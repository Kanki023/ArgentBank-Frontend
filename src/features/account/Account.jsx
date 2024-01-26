/* eslint-disable react/prop-types */
import './Account.scss'

const Account = ({id, title, amount, amountDescription}) => {
  return (
    <div key={id} className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  )
}

export default Account