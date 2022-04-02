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
        {items.map(({id, type, amount, currency}) => (
          <TableRows key={id}>
            <TableСolumns >{type}</TableСolumns>
            <TableСolumns >{amount}</TableСolumns>
            <TableСolumns >{currency}</TableСolumns>
          </TableRows>          
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id:PropTypes.string.isRequired,
};
