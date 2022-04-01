import { Transaction, Title, TableСolumns, TableRows } from './TransactionHistory.stylrd';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
  return (
    <Transaction>
      <thead>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRows key={item.id}>
            <TableСolumns >{item.type}</TableСolumns>
            <TableСolumns >{item.amount}</TableСolumns>
            <TableСolumns >{item.currency}</TableСolumns>
          </TableRows>          
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
