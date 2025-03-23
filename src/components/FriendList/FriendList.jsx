import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={s['friend-list']}>
        {friends.map(item => {
          return (
            <li key={item.id} className={s['friend-items']}>
              <FriendListItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
