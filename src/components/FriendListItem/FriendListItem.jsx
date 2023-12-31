import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={clsx(styles.status, {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
