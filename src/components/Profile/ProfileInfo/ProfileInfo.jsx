import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.topPicture}
                     src="https://thailand-news.ru/sites/default/files/storage/images/2019-47/76928174_1441403332691909_1733241817601671168_o.jpg"
                     alt="water"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description</div>
        </div>
    );
};

export default ProfileInfo;
