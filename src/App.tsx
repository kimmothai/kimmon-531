import './App.css'
import { MantineProvider, TextInput, Group, Table } from '@mantine/core'
import { useState } from 'react'
import plateRounding from './util/plateRounding'
import Week from './components/Week'
import { Lift, Multipliers } from './interface'

const WORKSET_PERCENTAGE = 0.9

const multipliers: Multipliers[] = [
  {
    weekNumber: '1',
    set1: {
      percentage: 0.65,
      reps: '5'
    },
    set2: {
      percentage: 0.75,
      reps: '5'
    },
    set3: {
      percentage: 0.85,
      reps: '5'
    }
  },
  {
    weekNumber: '2',
    set1: {
      percentage: 0.7,
      reps: '3'
    },
    set2: {
      percentage: 0.8,
      reps: '3'
    },
    set3: {
      percentage: 0.9,
      reps: '3'
    }
  },
  {
    weekNumber: '3',
    set1: {
      percentage: 0.75,
      reps: '5'
    },
    set2: {
      percentage: 0.85,
      reps: '3'
    },
    set3: {
      percentage: 0.95,
      reps: '1'
    }
  },
  {
    weekNumber: '4',
    set1: {
      percentage: 0.4,
      reps: '5'
    },
    set2: {
      percentage: 0.5,
      reps: '5'
    },
    set3: {
      percentage: 0.6,
      reps: '5'
    }
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
              <td>{plateRounding(lift.weight * week.set1.percentage)} kg</td>
              <td>{plateRounding(lift.weight * week.set2.percentage)} kg</td>
              <td>{plateRounding(lift.weight * week.set3.percentage)} kg</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

function App() {
  const [zPressWeight, setZPressWeight] = useState('0')
  const [latPulldownWeight, setLatPulldown] = useState('0')
  const [pseudoPlanchePushupWeight, setPseudoPlanchePushup] = useState('0')
  const [zercherSquatWeight, setZercherSquat] = useState('0')

  const mainLifts: Lift[] = [
    {
      liftName: 'Z-press',
      weight: Number(zPressWeight),
      workSetWeight: Number(zPressWeight) * WORKSET_PERCENTAGE,
      type: 'upper'
    },
    {
      liftName: 'Lat pulldown',
      weight: Number(latPulldownWeight),
      workSetWeight: Number(latPulldownWeight) * WORKSET_PERCENTAGE,
      type: 'upper'
    },
    {
      liftName: 'Pseudo planche push up',
      weight: Number(pseudoPlanchePushupWeight),
      workSetWeight: Number(pseudoPlanchePushupWeight) * WORKSET_PERCENTAGE,
      type: 'upper'
    },
    {
      liftName: 'Zercher squat',
      weight: Number(zercherSquatWeight),
      workSetWeight: Number(zercherSquatWeight) * WORKSET_PERCENTAGE,
      type: 'lower'
    }
  ]

  const week1 = multipliers[0]

  return (
    <div className='App'>
      <div>
        <h1>Juntti 531 calculator</h1>

        <div className='exercise-max'>
          <h2>Maksimit</h2>
          <Group>
            <TextInput
              placeholder='90'
              label='Z-press'
              value={zPressWeight}
              onChange={(event) => setZPressWeight(event.currentTarget.value)}
            />
            <TextInput
              placeholder='90'
              label='Lat pulldown'
              value={latPulldownWeight}
              onChange={(event) => setLatPulldown(event.currentTarget.value)}
            />
            <TextInput
              placeholder='90'
              label='Pseudo planche push up'
              value={pseudoPlanchePushupWeight}
              onChange={(event) =>
                setPseudoPlanchePushup(event.currentTarget.value)
              }
            />
            <TextInput
              placeholder='90'
              label='Zercher squat'
              value={zercherSquatWeight}
              onChange={(event) => setZercherSquat(event.currentTarget.value)}
            />
          </Group>
        </div>
        <div className='working-max'>
          <h2>Työmaksimit</h2>
          <p>Z-press {Math.round(Number(zPressWeight) * 0.9).toFixed(2)} kg</p>
        </div>
        <div className='sets'>
          {multipliers.map((week) => (
            <Week {...{ mainLifts, week }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
