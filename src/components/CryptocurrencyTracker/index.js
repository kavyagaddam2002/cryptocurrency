// Write your code here

import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {listData: [], loading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedData = await response.json()
    this.setState({
      cyptoCurrenciesData: fetchedData.map(eachItem => ({
        currencyName: eachItem.currency_name,
        usdValue: eachItem.usd_value,
        euroValue: eachItem.euro_value,
        id: eachItem.id,
        currencyLogo: eachItem.currency_logo,
      })),
      loading: false,
    })
  }

  renderCryptoList = () => {
    const {listData} = this.state
    return <CryptocurrenciesList listData={listData} />
  }

  renderLoader = () => (
    <div className="loader-containerr">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {loading} = this.state
    return (
      <div className="loader-container">
        {loading ? this.renderLoader() : this.renderCryptoList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
