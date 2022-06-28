const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);

            /* зануляем текстовое поле после сохранения в state */
            this._state.profilePage.newPostText = '';

            /* отрисовываем */
            this._callSubscriber(this._state);
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

window.store = store;

export const addPostActionCreator = () => {
    return { type: 'ADD-POST' }
}

export const  updateNewPostActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}

export default store;
