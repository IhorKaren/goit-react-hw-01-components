import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHeader,
  TransactionTableHeaderCell,
  TransactionTableBody,
  TransactionTableRow,
  TransactionTableCell,
} from './Transaction.styled';


const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionTableHeader>
        <tr>
          <TransactionTableHeaderCell>Type</TransactionTableHeaderCell>
          <TransactionTableHeaderCell>Amount</TransactionTableHeaderCell>
          <TransactionTableHeaderCell>Currency</TransactionTableHeaderCell>
        </tr>
      </TransactionTableHeader>
      <TransactionTableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTableRow key={id}>
              <TransactionTableCell>{type}</TransactionTableCell>
              <TransactionTableCell>{amount}</TransactionTableCell>
              <TransactionTableCell>{currency}</TransactionTableCell>
            </TransactionTableRow>
          );
        })}
      </TransactionTableBody>
    </TransactionTable>
  );
};

export default TransactionHistory;

PropTypes.PropTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};