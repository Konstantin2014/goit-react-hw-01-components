import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardItem = styled.li`  
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 10px;
  width: 400px;
  height: 80px;
  border: solid 1px #000;
  border-radius: 4px;
  box-shadow: 2px 3px 3px 2px rgb(158, 158, 158);
`;

export const OnOffUser = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${p =>(p.isOnline ? 'green' : 'red')}
`;

export const UserName = styled.p`
  font-size: 40px;
  font-weight: 700;
  `;

  export const UserPhoto = styled.img`
  margin: 20px;
  `;


