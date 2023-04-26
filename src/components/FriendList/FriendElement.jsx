import {
  Avatar,
  OnlineIndicator,
  FriendName,
} from './FriendList.styled';

const FriendElement = ({ avatar, name, isOnline }) => {
  return (
    <>
      <OnlineIndicator status={isOnline}></OnlineIndicator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

export default FriendElement;
