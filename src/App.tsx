import './App.css'
import { MantineProvider, TextInput, Group, Table } from '@mantine/core'
import { useState } from 'react'
import plateRounding from './util/PlateRounding'

interface Lift {
  liftName: string
  weight: number
  type: string
}

interface Multipliers {
  weekNumber: string
  set1: number
  set2: number
  set3: number
}

const multipliers: Multipliers[] = [
  {
    weekNumber: '1',
    set1: 0.65,
    set2: 0.75,
    set3: 0.85
  },
  {
    weekNumber: '2',
    set1: 0.7,
    set2: 0.8,
    set3: 0.9
  },
  {
    weekNumber: '3',
    set1: 0.75,
    set2: 0.85,
    set3: 0.95
  },
  {
    weekNumber: '4',
    set1: 0.4,
    set2: 0.5,
    set3: 0.6
  }
]

function calculateWeight(lift: Lift) {
  return (
    <Table key={lift.liftName}>
      <thead>
        <tr>
          <th colSpan={4}>{lift.liftName}</th>
        </tr>

        <tr>
          <th></th>
          <th>Sarja 1</th>
          <th>Sarja 2</th>
          <th>Sarja 3</th>
        </tr>
        <tr>
          <th>Sarjapaino</th>
          <th>65 % x 5</th>
          <th>75 % x 5</th>
          <th>85 % x 5+</th>
        </tr>
      </thead>
      <tbody>
        {multipliers.map((week) => {
          return (
            <tr key={`${lift.liftName}-${week.weekNumber}`}>
              <td>Viikko {week.weekNumber}</td>
              <td>{plateRounding(lift.weight * week.set1)} kg</td>
              <td>{plateRounding(lift.weight * week.set2)} kg</td>
              <td>{plateRounding(lift.weight * week.set3)} kg</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

function App() {
  const [zPressWeight, setZPressWeight] = useState(0)

  const mainLifts: Lift[] = [
    {
      liftName: 'Z-press',
      weight: zPressWeight,
      type: 'upper'
    },
    {
      liftName: 'Lat pulldown',
      weight: 110,
      type: 'upper'
    },
    {
      liftName: 'Pseudo planche push up',
      weight: 40,
      type: 'upper'
    },
    {
      liftName: 'Zombie squat',
      weight: 120,
      type: 'lower'
    }
  ]

  return (
    <div className='App'>
      <div>
        <h1>Juntti 531 calculator</h1>

        <div className='exercise-max'>
          <h2>Maksimit</h2>
          <Group>
            <TextInput
              placeholder='90'
              label='Z-press max'
              value={zPressWeight}
              onChange={(event) =>
                setZPressWeight(Number(event.currentTarget.value))
              }
            />
          </Group>
        </div>
        <div className='working-max'>
          <h2>Työmaksimit</h2>
          <p>Z-press {Math.round(Number(zPressWeight) * 0.9).toFixed(2)} kg</p>
        </div>
        <div className='sets'>
          {mainLifts.map((lift) => calculateWeight(lift))}
        </div>
      </div>
    </div>
  )
}

export default App
