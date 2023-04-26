import styled from 'styled-components';

const TransactionTable = styled.table`
  font-size: 14px;
  width: 300px;
  border-collapse: collapse;
`;

const TransactionTableHeader = styled.thead`
  background-color: skyblue;
  font-weight: bold;
`;

const TransactionTableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TransactionTableBody = styled.tbody`
  background-color: #fff;
`;

const TransactionTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TransactionTableCell = styled.td`
  padding: 10px;
`;

export {
  TransactionTable,
  TransactionTableHeader,
  TransactionTableHeaderCell,
  TransactionTableBody,
  TransactionTableRow,
  TransactionTableCell
};
