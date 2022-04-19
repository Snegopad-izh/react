import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://thailand-news.ru/sites/default/files/storage/images/2019-47/76928174_1441403332691909_1733241817601671168_o.jpg"
        alt="water"
      />
      <div>ava+description</div>
    <MyPosts />
    </div>
  );
};

export default Profile;
