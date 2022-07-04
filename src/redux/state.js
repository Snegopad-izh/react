import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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

            newMessageBody: '',


        },

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 1},
                {id: 2, message: 'It`s my first post', likesCount: 26},
            ],
            newPostText: 'it_specialist',
        },

        sidebar: {},
    },

    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};







window.store = store;
export default store;
