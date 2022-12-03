import { Table } from '@mantine/core'
import { Lift, Multipliers } from '../interface'
import plateRounding from '../util/plateRounding'

export default function Week(props: { mainLifts: Lift[]; week: Multipliers }) {
  const { mainLifts, week } = props
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={4}>Viikko {week.weekNumber}</th>
        </tr>
        <tr>
          <th>Liike</th>
          <th>
            Sarja 1: {week.set1.percentage * 100} % x {week.set1.reps}
          </th>
          <th>
            Sarja 2: {week.set2.percentage * 100} % x {week.set2.reps}
          </th>
          <th>
            Sarja 3: {week.set3.percentage * 100} % x {week.set3.reps}+
          </th>
        </tr>
      </thead>
      <tbody>
        {mainLifts.map((lift) => {
          return (
            <tr key={lift.liftName}>
              <td>{lift.liftName}</td>
              <td>
                {plateRounding(lift.workSetWeight * week.set1.percentage)} kg
              </td>
              <td>
                {plateRounding(lift.workSetWeight * week.set2.percentage)} kg
              </td>
              <td>
                {plateRounding(lift.workSetWeight * week.set3.percentage)} kg
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
