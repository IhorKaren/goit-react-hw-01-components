import Profile from './UserProfile/UserProfile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
// JSON
import userInfo from './JSON/user'
import data from './JSON/data'
import friends from './JSON/friends'


export const App = () => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
    </div>
  );
};
