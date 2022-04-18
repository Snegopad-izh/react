import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://thailand-news.ru/sites/default/files/storage/images/2019-47/76928174_1441403332691909_1733241817601671168_o.jpg"
        alt="water"
      />
      <div>ava+description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
