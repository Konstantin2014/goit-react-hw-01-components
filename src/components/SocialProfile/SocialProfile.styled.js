import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 300px;
  height: 400px;
  margin: auto;
  box-shadow: 2px 3px 3px 2px rgb(204, 204, 204);
`;

export const UserDescription = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  padding-top: 45px;
  width: auto;
  height: 110px;
  border-radius: 50%;
  margin: auto;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 700;
`;

export const TagLocation = styled.p`
  font-size: 20px;
  color: rgb(94, 93, 93);
  margin-top: 15px;
`;

export const Statistic = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: #f3f6f9;
  border-radius: 0 0 5px 5px;
`;
export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;  
  border: solid 1px #d8e0ea;
  width: 100px;
  color: #1b1b1b;
`;

export const StatisticQuantity = styled.span`
font-weight: 700;
font-size: 15px;
`;

export const SratisticLable = styled.span`
font-size: 18px;
`;

