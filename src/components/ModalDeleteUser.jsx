const apikey = import.meta.env.VITE_API

import { Link } from 'react-router-dom'
import styles from './Modal.module.css'

export function ModalDeleteUser({ setModalDelete, user }) {

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <form action="">
                    <h3>Deletar Contacto 👌</h3>
                    <p>Deseja mesmo deletar esse contacto ?</p>
                    <div className="buttons">
                        <button
                            className='btn btn-main'
                            onClick={(e) => {
                                e.preventDefault()
                                setModalDelete(null)
                            }}>
                            Cancelar
                        </button>
                        <Link
                            to={`${apikey}delete-user/${user._id}`}
                            className='btn btn-danger'
                        >
                            Deletar
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}