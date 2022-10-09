import {Profile} from 'components/Profile/Profile';
import user from 'components/user.json';
import {Statistics} from 'components/Statistics/Statistics';
import data from 'components/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'components/friends.json';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';
import transactions from 'components/transactions.json'

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
      <Statistics title='Upload stats' stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
