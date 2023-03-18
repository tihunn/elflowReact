import React, {useState} from 'react';
import css from "../../../style/basket.module.css"



const ButtonNumberFlowers = (props) => {
    let [newNum, setNewNum] = useState( Number(props.number) )

    let sendNewNumberFlower = () => {
        props.setNumberFlowers(props.id, newNum)
        props.addOrder(props.id, true, newNum)
    }
    let onChangeNum = (e) => {
        setNewNum(e.currentTarget.value)
    }


    return (
        <div>
            кол-во: <br/>
            <input className={css.input}
                   type="number"
                   value={newNum}
                   onChange={onChangeNum}
                   onBlur={sendNewNumberFlower}
            />
        </div>
    )
}

export default ButtonNumberFlowers;