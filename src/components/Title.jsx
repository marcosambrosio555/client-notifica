
import {
    BiMessage,
    BiPlus
} from 'react-icons/bi'


import styles from './Title.module.css'

export function Title() {
    return (
        <h1 className={styles.title}>
            <BiMessage />
            SMS Notifica
            <BiPlus />
        </h1>
    )
}