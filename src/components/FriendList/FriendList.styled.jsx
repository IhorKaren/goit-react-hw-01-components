import styled from 'styled-components';

const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  gap: 10px;
  background-color: pink;
  border-radius: 10px;
  overflow: hidden;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;  
  width: 100%
  margin-bottom: 10px;
  background-color: skyblue;
  padding: 5px;
`;

const Avatar = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;

const OnlineIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

const FriendName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export { FriendsList, FriendListItem, Avatar, OnlineIndicator, FriendName };
