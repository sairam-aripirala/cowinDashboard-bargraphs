import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {data} = props
  //   console.log(data)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="chart-heading-2">Vaccination Coverage</h1>

      <BarChart
        data={data}
        margin={{
          top: 5,
        }}
        width={1000}
        height={400}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 20,
            fontFamily: 'roboto',
            fontSize: '17px',
            fontWeight: '600',
          }}
        />
        <Bar
          dataKey="dose_1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[5, 5, 0, 0]}
          barSize="30%"
        />
        <Bar
          dataKey="dose_2"
          name="Dose 2"
          radius={[5, 5, 0, 0]}
          fill="#f54394"
          barSize="30%"
        />
      </BarChart>
    </>
  )
}

export default VaccinationCoverage
