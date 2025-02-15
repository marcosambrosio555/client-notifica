const apikey = import.meta.env.VITE_API

import styles from './Form.module.css'

import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react'

import { BiLeftArrowCircle } from "react-icons/bi";

import { Loading } from "../hooks/Loading";

export function EditUser() {

    const [searchParams] = useSearchParams()
    const userId = searchParams.get("id")

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("+244")


    const { modal, toggleModal } = Loading()

    useEffect(() => {

        async function fetchData() {
            toggleModal(true)
            const response = await fetch(`${apikey}users`)
            const data = await response.json()
            const user = data.find(user => user._id === userId)
            if (user) {
                setPhone(user.phone)
                setUsername(user.username)
            }
            toggleModal(false)
        }

        fetchData()

    }, [])

    return (
        <section className={styles.Form}>
            {modal}
            <div className="container-sm">
                <Link to={"/manage-users"} className="arrow-back">
                    <BiLeftArrowCircle />
                </Link>
                <h2>Editar contato 🖋️</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat quaerat, eligend</p>
                <form action={`http://localhost:9091/edit-user/${userId}`} method="POST">
                    <div className="box">
                        <label htmlFor="username">
                            Nome do usuário
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="username"
                            value={username}
                            name="username"
                            placeholder="Digite o nome do usuário"
                            onInput={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="box">
                        <label htmlFor="phone">
                            Telefone do usuário
                        </label>
                        <input
                            className="form-control"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            placeholder="Digite o telefone do usuário"
                            onInput={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="box">
                        <button type="submit"
                            className="btn btn-full btn-main">
                            Editar Contacto
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}