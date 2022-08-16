import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user-no-photo.jpg'

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;


/*props.setUsers([
            {id: 1, photoUrl: 'https://sun1-92.userapi.com/impg/c854228/v854228086/212e8a/UKun4zT1-mg.jpg?size=200x0&quality=96&crop=2,2,1077,1077&sign=03ad27eb5c21897fceff8834239903a3&c_uniq_tag=vaUfRYDFt1i3bwa0YayB4Mv35YJgFT0fsLv2qwJ-mOI&ava=1',
                followed: true, fullName: 'Igor', status: 'look out', location: {city: 'Izhevsk', country: 'Russia'}},
            {id: 2, photoUrl: 'https://sun1-92.userapi.com/impg/c854228/v854228086/212e8a/UKun4zT1-mg.jpg?size=200x0&quality=96&crop=2,2,1077,1077&sign=03ad27eb5c21897fceff8834239903a3&c_uniq_tag=vaUfRYDFt1i3bwa0YayB4Mv35YJgFT0fsLv2qwJ-mOI&ava=1',
                followed: false, fullName: 'Olga', status: 'good', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://sun1-92.userapi.com/impg/c854228/v854228086/212e8a/UKun4zT1-mg.jpg?size=200x0&quality=96&crop=2,2,1077,1077&sign=03ad27eb5c21897fceff8834239903a3&c_uniq_tag=vaUfRYDFt1i3bwa0YayB4Mv35YJgFT0fsLv2qwJ-mOI&ava=1',
                followed: true, fullName: 'Lev', status: 'shit', location: {city: 'Minsk', country: 'Belarus'}},
        ]);*/