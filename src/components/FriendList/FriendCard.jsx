import { CardItem, OnOffUser, UserName, UserPhoto} from "./FriendList.styled."
import PropTypes from 'prop-types';

export const FriendCard = ({ avatar, name, isOnline}) => {
  return (
      <CardItem>
        <OnOffUser isOnline={isOnline}>{isOnline}</OnOffUser>
        <UserPhoto src={avatar} alt={name} width="48" />
        <UserName>{name}</UserName>
      </CardItem>
    );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
