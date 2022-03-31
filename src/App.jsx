import { Profile } from './components/SocialProfile/SocialProfile';
import user from './components/SocialProfile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
// import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
// import transactions from "./components/TransactionHistory/transaction.json";

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      ,
      <Statistics title="UPLOAD STATS" stats={data} />,
      <FriendList friends={friends} />,
      {/* <TransactionHistory 
      items={transactions}
      />, */}
    </div>
  );
};
