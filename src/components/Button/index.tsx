import React from 'react';
import style from './Button.module.scss'

interface Props{
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    text?: React.ReactNode
}

function Button({ onClick, type, text}: Props) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {text}
        </button>
    )
}


export default Button 