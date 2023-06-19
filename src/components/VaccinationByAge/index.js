// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {data} = props

  return (
    <>
      <h1 className="chart-heading">Vaccination by Age</h1>

      <PieChart width={1000} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            padding: 0,
            fontFamily: 'Roboto',
            fontSize: '17px',
            fontWeight: '600',
          }}
        />
      </PieChart>
    </>
  )
}

export default VaccinationByAge
