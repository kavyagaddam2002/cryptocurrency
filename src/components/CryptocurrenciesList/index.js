// Write your JS code here
import {Component} from 'react'
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="heading-container">
      <p>CoinType</p>
      <p>USD</p>
      <p>EURO</p>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {data} = this.props

    return (
      <div>
        {this.renderCryptoCurrenciesHeader()}
        <ul>
          {data.map(eachdata => (
            <CryptocurrencyItem key={eachdata.id} details={eachdata} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 className="heading">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
