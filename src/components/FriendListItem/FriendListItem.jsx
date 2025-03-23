import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={s['friend-img']} src={avatar} alt="Avatar" width="48" />
      <p className={s['friend-name']}>{name}</p>
      <p className={(s['friend-status'], isOnline ? s.green : s.red)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;
