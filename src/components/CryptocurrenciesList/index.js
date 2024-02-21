// Write your JS code here
import {Component} from 'react'
import './index.css'

import CryptocurrenciesItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
 

  render() {
      const {data}=this.props
    
    return (
         <div>
        <h1 className="heading">CryptoCurrencyTracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        </div>


      <div>
        <div className="heading-container">
        <h1>CoinType</h1>
        <h1>USD</h1>
        <h1>EURO</h1>
      </div>
      </div>
      <ul>
      {data.map(eachdata=>(
          <CryptocurrenciesItem key={eachdata.id} details={eachdata}/>
      ))}

      </ul>
    )
  }
}

export default CryptocurrenciesList
