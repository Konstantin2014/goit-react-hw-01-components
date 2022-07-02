import styled from 'styled-components';

export const Statistic = styled.section`
  padding: 50px 0;
  text-align: center;
  width: 300px;
  margin: auto;
`;

export const StatisticTitle = styled.h2`
  font-size: 40px;
`;

export const StatisticList = styled.ul`
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
`;

export const StatisticLable = styled.span`
  color: rgb(255, 255, 255);
`;

export const StatisticPercentage = styled.span`
  color: rgb(255, 255, 255);
  margin: 10px;
  font-style: 25px;
  font-weight: 700;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  border: solid 1px rgb(5, 5, 5);
  width: 100px;
  padding: 10px 20px;
  background-color: #afafaf;
`;
