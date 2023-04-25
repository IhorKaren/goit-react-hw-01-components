import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  Name,
  Tag,
  Location,
  StatList,
  StatItem,
  StatLabel,
  StatQuantity,
} from './UserProfile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </div>

      <StatList className="stats">
        <StatItem>
          <StatLabel className="label">Followers</StatLabel>
          <StatQuantity className="quantity">{stats.followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel className="label">Views</StatLabel>
          <StatQuantity className="quantity">{stats.views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel className="label">Likes</StatLabel>
          <StatQuantity className="quantity">{stats.likes}</StatQuantity>
        </StatItem>
      </StatList>
    </ProfileCard>
  );
};

export default Profile;

PropTypes.PropTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.array.isRequired,
};
