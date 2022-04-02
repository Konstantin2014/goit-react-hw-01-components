import { FriendsList } from "./FriendList.styled."
import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({avatar, name, isOnline}) => (
        <FriendCard
          avatar={avatar}
          name={name}
          isOnline={isOnline}
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
