// write code

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyItem

  return (
    <li className="container">
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
