import {renderEntireTree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Olga'},
            {id: 3, name: 'Lev'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Nina'},
            {id: 6, name: 'Anna'},
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ],
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 1},
            {id: 2, message: 'It`s my first post', likesCount: 26},
        ],
        newPostText: 'it_specialist',
    },
}

export let addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);

    /* зануляем текстовое поле после сохранения в state */
    state.profilePage.newPostText = '';

   /* отрисовываем */
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}











export default state;
