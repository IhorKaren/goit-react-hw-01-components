import PropTypes from 'prop-types';
import {FriendsList, FriendListItem } from './FriendList.styled';
import FriendElement from './FriendElement';

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <FriendElement avatar={avatar} name={name} isOnline={isOnline} />
        </FriendListItem>
      ))}
    </FriendsList>
  );
};

export default FriendList;

PropTypes.PropTypes = {
  friends: PropTypes.array,
};