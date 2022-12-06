import './App.css'
import {
  MantineProvider,
  TextInput,
  Group,
  Button,
  Container
} from '@mantine/core'
import { useState } from 'react'
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

const maxLifts = {
  zPress: 80,
  latPulldown: 110,
  pppu: 30,
  zercherSquat: 120
}

function App() {
  const [zPressWeight, setZPressWeight] = useState(
    String(maxLifts.zPress * WORKSET_PERCENTAGE)
  )
  const [latPulldownWeight, setLatPulldown] = useState(
    String(maxLifts.latPulldown * WORKSET_PERCENTAGE)
  )
  const [pseudoPlanchePushupWeight, setPseudoPlanchePushup] = useState(
    String(maxLifts.pppu * WORKSET_PERCENTAGE)
  )
  const [zercherSquatWeight, setZercherSquat] = useState(
    String(maxLifts.zercherSquat * WORKSET_PERCENTAGE)
  )

  const mainLifts: Lift[] = [
    {
      liftName: 'Z-press',
      workSetWeight: Number(zPressWeight),
      type: 'upper'
    },
    {
      liftName: 'Lat pulldown',
      workSetWeight: Number(latPulldownWeight),
      type: 'upper'
    },
    {
      liftName: 'Pseudo planche push up',
      workSetWeight: Number(pseudoPlanchePushupWeight),
      type: 'upper'
    },
    {
      liftName: 'Zercher squat',
      workSetWeight: Number(zercherSquatWeight),
      type: 'lower'
    }
  ]

  return (
    <div className='App'>
      <div>
        <h1>Juntti 531 calculator</h1>
        <Container>
          <div className='working-max'>
            <h2>Työmaksimit</h2>
            <Group position={'center'}>
              <Group align={'end'}>
                <TextInput
                  placeholder='90'
                  label='Z-press'
                  value={zPressWeight}
                  onChange={(event) =>
                    setZPressWeight(event.currentTarget.value)
                  }
                />
                <Button
                  type='button'
                  onClick={() => {
                    setZPressWeight(String(Number(zPressWeight) + 2.5))
                  }}
                >
                  +
                </Button>
                <Button
                  type='button'
                  onClick={() => {
                    setZPressWeight(String(Number(zPressWeight) - 2.5))
                  }}
                >
                  -
                </Button>
              </Group>
              <Group align={'end'}>
                <TextInput
                  placeholder='90'
                  label='Lat pulldown'
                  value={latPulldownWeight}
                  onChange={(event) =>
                    setLatPulldown(event.currentTarget.value)
                  }
                />
                <Button
                  type='button'
                  onClick={() => {
                    setLatPulldown(String(Number(latPulldownWeight) + 2.5))
                  }}
                >
                  +
                </Button>
                <Button
                  type='button'
                  onClick={() => {
                    setLatPulldown(String(Number(latPulldownWeight) - 2.5))
                  }}
                >
                  -
                </Button>
              </Group>
              <Group align={'end'}>
                <TextInput
                  placeholder='90'
                  label='Pseudo planche push up'
                  value={pseudoPlanchePushupWeight}
                  onChange={(event) =>
                    setPseudoPlanchePushup(event.currentTarget.value)
                  }
                />
                <Button
                  type='button'
                  onClick={() => {
                    setPseudoPlanchePushup(
                      String(Number(pseudoPlanchePushupWeight) + 2.5)
                    )
                  }}
                >
                  +
                </Button>
                <Button
                  type='button'
                  onClick={() => {
                    setPseudoPlanchePushup(
                      String(Number(pseudoPlanchePushupWeight) - 2.5)
                    )
                  }}
                >
                  -
                </Button>
              </Group>
              <Group align={'end'}>
                <TextInput
                  placeholder='90'
                  label='Zercher squat'
                  value={zercherSquatWeight}
                  onChange={(event) =>
                    setZercherSquat(event.currentTarget.value)
                  }
                />
                <Button
                  type='button'
                  onClick={() => {
                    setZercherSquat(String(Number(zercherSquatWeight) + 5))
                  }}
                >
                  +
                </Button>
                <Button
                  type='button'
                  onClick={() => {
                    setZercherSquat(String(Number(zercherSquatWeight) - 5))
                  }}
                >
                  -
                </Button>
              </Group>
            </Group>
          </div>
        </Container>
        <Container>
          <div className='sets'>
            {multipliers.map((week) => (
              <Week {...{ mainLifts, week }} key={week.weekNumber} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default App
