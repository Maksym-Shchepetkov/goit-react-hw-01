import { clsx } from 'clsx';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={s.profileWrapper}>
        <img className={s.profileImg} src={image} alt="User avatar" />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>{'@' + tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.profileList}>
        <li className={s.profileItems}>
          <span className={s.profileSpan}>Followers</span>
          <span className={s.profileSpan}>{stats.followers}</span>
        </li>
        <li className={s.profileItems}>
          <span className={s.profileSpan}>Views</span>
          <span className={s.profileSpan}>{stats.views}</span>
        </li>
        <li className={s.profileItems}>
          <span className={s.profileSpan}>Likes</span>
          <span className={s.profileSpan}>{stats.likes}</span>
        </li>
      </ul>
    </>
  );
};

export default Profile;
