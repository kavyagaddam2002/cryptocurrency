// write code

import './index.css'

const CrptocurrencyItem = props => {
  const {currencyItem} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyItem

  return (
    <div>
      <li className="container">
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </li>
    </div>
  )
}

export default CrptocurrencyItem
