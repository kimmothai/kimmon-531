import './App.css'
import {
  TextInput,
  Group,
  Button,
  Container,
  Space,
  List,
  Title,
  Text,
  Card,
  Center
} from '@mantine/core'
import { useState } from 'react'
import Week from './components/Week'
import { Lift, Multipliers, Assistance } from './interface'

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

const assistanceMoves: Array<Assistance> = [
  {
    workoutType: 'A',
    movements: [
      'Bridge',
      '4 position lift',
      'Split squat',
      'Reverse Nordic Curl',
      'Syväkyykkypito',
      'Vatsarutistus',
      'Kompressio'
    ]
  },
  {
    workoutType: 'B',
    movements: [
      'Reverse bridge',
      'Weighted pancake good morning',
      'Weighted side pancake lift',
      'Lantionnosto',
      'Hamstring curl',
      'Jefferson curl'
    ]
  }
]

const assistanceLifts = [
  'Weighted pancake good morning',
  'Inverted row',
  'Straight-arm pull down'
]

interface Metcon {
  category: string
  moves: string[]
}
const metcon: Metcon[] = [
  {
    category: 'Upper body',
    moves: ['Pike push-up', 'PPPU', 'Hip thrust', 'KB halo', 'Neck curl']
  },
  {
    category: 'Core',
    moves: [
      'Leg raise',
      'Back bridge',
      'Reverse bridge',
      'Half-kneeling windmill',
      'Compression'
    ]
  },
  {
    category: 'Lower body',
    moves: [
      'Hamstring curl',
      'ATG Split squat',
      'Reverse Nordic curl',
      'Jefferson curl'
    ]
  }
]

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
      <Center>
        <div>
          <Title order={1}>Kimmon 531 calculator</Title>
          <Container>
            <div className='working-max'>
              <Title order={2}>Workset maxes</Title>
              <Group position={'center'}>
                <Group align={'end'}>
                  <TextInput
                    placeholder='90'
                    label={`Z-press (${maxLifts.zPress} kg)`}
                    value={zPressWeight}
                    onChange={(event) =>
                      setZPressWeight(event.currentTarget.value)
                    }
                  />
                  <Button
                    type='button'
                    onClick={() => {
                      setZPressWeight(String(Number(zPressWeight) - 2.5))
                    }}
                  >
                    -
                  </Button>
                  <Button
                    type='button'
                    onClick={() => {
                      setZPressWeight(String(Number(zPressWeight) + 2.5))
                    }}
                  >
                    +
                  </Button>
                </Group>
                <Group align={'end'}>
                  <TextInput
                    placeholder='90'
                    label={`Lat pulldown (${maxLifts.latPulldown} kg)`}
                    value={latPulldownWeight}
                    onChange={(event) =>
                      setLatPulldown(event.currentTarget.value)
                    }
                  />
                  <Button
                    type='button'
                    onClick={() => {
                      setLatPulldown(String(Number(latPulldownWeight) - 2.5))
                    }}
                  >
                    -
                  </Button>
                  <Button
                    type='button'
                    onClick={() => {
                      setLatPulldown(String(Number(latPulldownWeight) + 2.5))
                    }}
                  >
                    +
                  </Button>
                </Group>
                <Group align={'end'}>
                  <TextInput
                    placeholder='90'
                    label={`PPPU (${maxLifts.pppu} kg)`}
                    value={pseudoPlanchePushupWeight}
                    onChange={(event) =>
                      setPseudoPlanchePushup(event.currentTarget.value)
                    }
                  />

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
                </Group>
                <Group align={'end'}>
                  <TextInput
                    placeholder='90'
                    label={`Zercher-kyykky (${maxLifts.zercherSquat} kg)`}
                    value={zercherSquatWeight}
                    onChange={(event) =>
                      setZercherSquat(event.currentTarget.value)
                    }
                  />

                  <Button
                    type='button'
                    onClick={() => {
                      setZercherSquat(String(Number(zercherSquatWeight) - 5))
                    }}
                  >
                    -
                  </Button>
                  <Button
                    type='button'
                    onClick={() => {
                      setZercherSquat(String(Number(zercherSquatWeight) + 5))
                    }}
                  >
                    +
                  </Button>
                </Group>
              </Group>
            </div>
          </Container>
          <Space h='md' />
          <Container>
            <div className='sets'>
              {multipliers.map((week) => (
                <Week {...{ mainLifts, week }} key={week.weekNumber} />
              ))}
            </div>
          </Container>
          <Space h='md' />
          <Container>
            <div className='assistance-lifts'>
              <Title order={2}>Apuliikkeet</Title>
              <List>
                {assistanceLifts.map((lift) => (
                  <List.Item key={lift}>{lift}</List.Item>
                ))}
              </List>
            </div>
          </Container>
          <Space h='md' />
          <Container>
            <Title order={2}>Conditioning</Title>
            <Text>
              Alternate jump rope & burpees with strength movements for 20 - 30
              min. Cool down with elliptical for 10 min.
            </Text>
            <Space h='md' />
            <Title order={3}>Moves</Title>
            <Group>
              {metcon.map((item) => {
                return (
                  <Card
                    shadow='sm'
                    p='lg'
                    radius='md'
                    withBorder
                    key={item.category}
                  >
                    <Text>{item.category}</Text>

                    <List>
                      {item.moves.map((move) => (
                        <List.Item key={move}>{move}</List.Item>
                      ))}
                    </List>
                  </Card>
                )
              })}
            </Group>
          </Container>
        </div>
      </Center>
    </div>
  )
}

export default App
