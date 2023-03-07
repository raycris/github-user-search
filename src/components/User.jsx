import React from "react";
import styles from "./User.module.css";

const User = ({ avatar, url, username }) => {
  return (
    <div className={styles.user}>
      <picture>
        <img
          src={avatar}
          alt={`${username} Profile`}
          className={styles.icon}
          
        />
      </picture>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
};

export default User;
