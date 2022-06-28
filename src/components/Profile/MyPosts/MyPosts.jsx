import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    //Получаем пустой шаблон ссылки
    let newPostElement = React.createRef();

    let addPost = () => {
        //Вызываем обработку поста в BLL при нажатии кнопки
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {/*Привязываем пустую ссылку к элементу textarea в DOM дереве*/}
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    {/*Передаём Функцию! по событию onClick для вызова функции при нажатии на клавишу*/}
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
