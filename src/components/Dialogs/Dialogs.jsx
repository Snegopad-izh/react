import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Igor" id="1"/>
                <DialogItem name="Olga" id="2"/>
                <DialogItem name="Lev" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Nina" id="5"/>
                <DialogItem name="Anna" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="hi hi"/>
                <Message message="Hellllooo"/>
            </div>
        </div>
    )
}

export default Dialogs;