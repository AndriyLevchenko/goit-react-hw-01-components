import PropTypes from 'prop-types'
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.tTable}>
        <thead className={css.tHead}>
            <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
            </tr>
        </thead>

        <tbody>
        {items.map(item => (
            <tr key={item.id} className={css.tr}>
            <td className={css.td}>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
            </tr>
        ))}     
        </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}