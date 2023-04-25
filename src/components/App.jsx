import Profile from './UserProfile/UserProfile'
import userInfo from './JSON/user.json'

export const App = () => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
      backgroundColor: '#383838',
    }}>
      <Profile 
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
};
