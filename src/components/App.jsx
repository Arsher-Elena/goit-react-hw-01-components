import { FriendList } from "./FriendList/FriendList";
import friends from "../configs/friends.json"
import { Profile } from "./Profile/Profile";
import user from "../configs/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../configs/data.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transaction from "../configs/transactions.json"


export const App = () => {
  return <div>
    <Profile
       username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transaction}/>
  </div>
};
