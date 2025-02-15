const apikey = import.meta.env.VITE_API

import styles from './Form.module.css'

import { Link } from "react-router-dom";
import { useState } from 'react'

import { BiLeftArrowCircle } from "react-icons/bi";

export function CreateUser() {

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("+244")

    return (
        <section className={styles.Form}>
            <div className="container-sm">
                <Link to={"/"} className="arrow-back">
                    <BiLeftArrowCircle />
                </Link>
                <h2>Crie um contato 👋</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat quaerat, eligend</p>
                <form action={`${apikey}save-user`} method="POST">
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
                            // Navigate={"/"}
                            className="btn btn-full btn-success">
                            Criar Contacto
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}