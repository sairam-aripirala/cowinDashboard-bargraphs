import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const statusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    vaccinationDetails: {
      last7DaysVaccination: [],
      vaccinationByAge: [],
      vaccinationByGender: [],
    },
    status: statusConstants.inital,
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    this.setState({status: statusConstants.inProgress})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        status: statusConstants.success,
        vaccinationDetails: updatedData,
      })
    } else {
      this.setState({status: statusConstants.failure})
    }
  }

  render() {
    const {status, vaccinationDetails} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccinationDetails

    let element
    switch (status) {
      case statusConstants.success:
        element = (
          <>
            <div className="chart-container-bg">
              <VaccinationCoverage data={last7DaysVaccination} />
            </div>
            <div className="chart-container-bg">
              <VaccinationByGender data={vaccinationByGender} />
            </div>
            <div className="chart-container-bg">
              <VaccinationByAge data={vaccinationByAge} />
            </div>
          </>
        )
        break
      case statusConstants.failure:
        element = (
          <div className="failure-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="failure-image"
            />
            <h1 className="failure-text">Something went wrong</h1>
          </div>
        )
        break
      case statusConstants.inProgress:
        element = (
          <div data-testid="loader" className="failure-container">
            <Loader type="ThreeDots" color="#ffffff" height={180} width={120} />
          </div>
        )
        break
      default:
        element = null
        break
    }

    return (
      <div className="bg-container">
        <div className="header-nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="nav-icon"
          />
          <h1 className="nav-logo-text">Co-Win</h1>
        </div>
        <h1 className="main-heading">CoWin Vaccination in India</h1>
        {element}
      </div>
    )
  }
}

export default CowinDashboard
