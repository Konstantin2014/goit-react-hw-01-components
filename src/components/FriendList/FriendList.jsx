import { FriendsList } from "./FriendList.styled."
import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendCard
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
