const apikey = import.meta.env.VITE_API

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowCircle } from 'react-icons/bi'

import styles from './SendMessage.module.css'

import { SelectUsers } from '../components/SelectUsers'
import { MessageForm } from '../components/MessageForm'
import { ModalSendMessage } from '../components/ModalSendMessage'
import { Loading } from '../hooks/Loading'

export function SendMessage() {

    const [users, setUsers] = useState([])
    const [usersSelected, setUsersSelected] = useState([])

    const [lastStep, setLastStep] = useState(false)

    const [message, setMessage] = useState("")
    const [modalSendMessage, setModalSendMessage] = useState(false)

    const { loading, toggleLoading } = Loading()

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(`${apikey}users`)
            const data = await response.json()
            data.map(user => user.selected = false)
            setUsers(data)
            toggleLoading(false)
        }

        fetchData()

    }, [])

    function handleOpenModal() {
        const arraySelected = users.filter(user => user.selected)
        setUsersSelected(arraySelected)
        if (message === "" || arraySelected.length === 0) {
            return
        }
        setModalSendMessage(true)
    }

    function changeForm(value) {
        setLastStep(value)
    }

    return (
        <section className={styles.SendMessage}>
            {modalSendMessage &&
                <ModalSendMessage
                    usersSelected={usersSelected}
                    message={message}
                    setModalSendMessage={setModalSendMessage}
                />}
            {loading}
            <div className="container-md">
                <Link to={"/"} className="arrow-back">
                    <BiLeftArrowCircle />
                </Link>
                <h2>Mensagens 📨</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat quaerat, eligend</p>

                <div className={styles.content}>
                    {lastStep ? (
                        <MessageForm
                            message={message}
                            setMessage={setMessage}
                        />
                    ) : (
                        <SelectUsers users={users} setUsers={setUsers} />
                    )}
                    <div className="buttons">
                        {lastStep && <button
                            className='btn'
                            onClick={() => changeForm(false)}
                            text={"Voltar"}
                        >Voltar</button>
                        }
                        {
                            lastStep ? (
                                <button
                                    className='btn'
                                    onClick={handleOpenModal}
                                    text={"Enviar"}
                                >Enviar</button>
                            ) : (
                                <button
                                    className='btn'
                                    onClick={() => changeForm(true)}

                                >Avançar</button>
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}