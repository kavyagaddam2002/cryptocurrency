// Write your code here

import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {listData: [], isloading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      currencyName: data.currency_name,
      usdValue: data.usd_value,
      euroValue: data.euro_value,
      id: data.id,
      currencyLogo: data.currency_logo,
    }))

    this.setState({isloading: false, listData: formattedData})
  }

  render() {
    const {isloading, listData} = this.state
    return (
      
          {isloading ? (
            <div testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            listData.map(item => (
              <CryptocurrenciesList key={item.id} currencyItem={item} />
            ))
          )}
        
    )
  }
}

export default CryptocurrencyTracker
