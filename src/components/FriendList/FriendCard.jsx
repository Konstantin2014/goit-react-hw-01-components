import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendCard = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <li className={css.item} key={id}>
        <span className={isOnline ? css.onLine : css.offLine}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
