import styled from 'styled-components';

export const Transaction = styled.table`
  width: 500px;
  margin: 100px auto;
  padding-bottom: 100px;
`;

export const Title = styled.th`
  background-color: rgb(79, 176, 214);
  color: #ffffff;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: calc(100% / 3);
  text-transform: uppercase;
`;

export const TableСolumns = styled.td`
  text-align: center;
`;

export const TableRows = styled.tr`
  height: 40px;
  color: grey;
  background-color: #f2f2f2;

  &:nth-child(even) {
    background-color: #ffffff;
  }

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;
