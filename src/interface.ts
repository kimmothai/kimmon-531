export interface Lift {
  liftName: string
  workSetWeight: number
  type: string
}

export interface Assistance {
  workoutType: string
  movements: Array<String>
}

export interface RepSchema {
  percentage: number
  reps: string
}

export interface Multipliers {
  weekNumber: string
  set1: RepSchema
  set2: RepSchema
  set3: RepSchema
}
