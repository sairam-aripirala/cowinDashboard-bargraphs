// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <>
      <h1 className="chart-heading">Vaccination by gender</h1>

      <PieChart width={1000} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
