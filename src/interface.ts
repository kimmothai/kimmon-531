export interface Lift {
  liftName: string
  weight: number
  workSetWeight: number
  type: string
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
