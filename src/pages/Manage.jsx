const apikey = import.meta.env.VITE_API

import styles from './Manage.module.css'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowCircle, BiPencil, BiTrash } from 'react-icons/bi'

import { Loading } from '../hooks/Loading'
import { ModalDeleteUser } from '../components/ModalDeleteUser'


export function Manage() {

    const [modalDelete, setModalDelete] = useState(null)

    const [users, setUsers] = useState([])
    const { loading, toggleLoading } = Loading()


    useEffect(() => {

        async function fetchData() {
            toggleLoading(true)
            const response = await fetch(`${apikey}users`)
            const data = await response.json()
            setUsers(data)
            toggleLoading(false)
        }

        fetchData()

    }, [])



    function handleModalDelete(user) {
        setModalDelete(<ModalDeleteUser setModalDelete={setModalDelete} user={user} />)
    }

    return (
        <section className={styles.manageUsers}>
            {loading}
            {modalDelete}
            <div className="container">
                <Link to={"/"} className="arrow-back">
                    <BiLeftArrowCircle />
                </Link>
                <h2>Gerenciar usuários 🎩</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium numquam velit tempora minus, perferendis asperiores quas blanditiis doloremque eaque sapiente aliquid</p>
                <div className={styles.users}>
                    {
                        users.length > 0 ? (
                            users.map((user) => (
                                <div key={user._id} className={styles.col}>
                                    <div className={styles.info}>
                                        <span className={styles.username}>{user.username}</span>
                                        <span className={styles.phone}>{user.phone}</span>
                                    </div>
                                    <div className={styles.actions}>

                                        <Link
                                            to={`/edit-user?id=${user._id}`}
                                            className='btn-main'
                                        >
                                            <BiPencil />
                                            Editar
                                        </Link>

                                        <Link
                                            className='btn-danger'
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleModalDelete(user)
                                            }}
                                        >
                                            <BiTrash />
                                            Apagar
                                        </Link>

                                    </div>
                                </div>

                            ))
                        ) : (
                            <h3>Sem usuários</h3>
                        )
                    }
                </div>
            </div>
        </section>
    )
}