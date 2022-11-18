import React from "react";
import styles from './NotFoundModule.module.scss'

const NotFoundBlock = () => {
    return (

            <h1 className={styles.root}>
                <span>☹️</span>
                <br/>
                Ничего не найдено :(
                <p className={styles}>К сожаления страница отсутствует</p>
            </h1>

    )
}

export default NotFoundBlock