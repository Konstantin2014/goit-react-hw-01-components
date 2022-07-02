import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  TagLocation,
  Statistic,
  StatisticItem,
  StatisticQuantity,
  SratisticLable,
} from './SocialProfile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <UserDescription>
        <UserAvatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <TagLocation>{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </UserDescription>

      <Statistic>
        <StatisticItem>
          <SratisticLable>Followers</SratisticLable>
          <StatisticQuantity>{stats.followers}</StatisticQuantity>
        </StatisticItem>
        <StatisticItem>
          <SratisticLable>Views</SratisticLable>
          <StatisticQuantity>{stats.views}</StatisticQuantity>
        </StatisticItem>
        <StatisticItem>
          <SratisticLable>Likes</SratisticLable>
          <StatisticQuantity>{stats.likes}</StatisticQuantity>
        </StatisticItem>
      </Statistic>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
