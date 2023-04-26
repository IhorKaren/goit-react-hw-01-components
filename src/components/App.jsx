import Profile from './UserProfile/UserProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/Transaction';
// JSON
import userInfo from './JSON/user';
import data from './JSON/data';
import friends from './JSON/friends';
import transactions from './JSON/transactions';

export const App = () => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
