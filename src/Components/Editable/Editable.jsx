import React, {useState} from "react";

let Editable = (props) => {
    let [editMode, setEditMode] = useState(false)


    let toggleEditMode = () => {
        if (props.role === "admin") {
            setEditMode(!editMode)
        }
    }
    let deactivateEditMode = (e) => {
        setEditMode( editMode = false)
        props.dispatch(e.currentTarget.value) // отправить на сервер
    }
    let onChange = (e) => {
        props.dispatch(e.currentTarget.value) // сохранить в редаксе
    }


    const isEditMode = () => {
        if (editMode) {
            return <input autoFocus={true} onBlur={deactivateEditMode} value={props.value} onChange={onChange} type={props.type}/>
        } else if (props.value === "" || props.value === null || props.value === " ") {
            return <i onClick={toggleEditMode}> Текст не введён, можете кликать на меня </i>
        } else {
            return <span onClick={toggleEditMode}>  {props.value} </span>
        }

    }

        return <>
            { isEditMode() }

        </>
}

export default Editable