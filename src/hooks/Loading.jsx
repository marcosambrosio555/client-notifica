import { useState } from 'react'
import styles from './Loading.module.css'

function Modal() {
    return (
        <div className={styles.modal}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export function Loading() {
    const [loading, setLoading] = useState(<Modal />)

    function toggleLoading(state) {
        setLoading(state ? <Modal /> : null)
    }

    return {
        loading,
        toggleLoading
    }
}