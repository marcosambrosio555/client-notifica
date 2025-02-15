import { Link } from 'react-router-dom'

import styles from './Home.module.css'

import { Title } from "../components/Title";
import { BiCog, BiMessage, BiUser } from 'react-icons/bi';


export function Home() {

    
    return (
        <main className={styles.main}>
            <section className={styles.home}>
                <div className="container">

                    <Title />

                    <article>
                        <img src={"./images/message.svg"} alt="Ilustração de Criação de usuário" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ut minima, repellat repellendus vel aliquid eaque modi! Officia</p>
                        <Link to={"send-message"} className='btn-main'>
                            <BiMessage /> Enviar Mensagem
                        </Link>
                    </article>

                    <article className={styles.createUserSession}>
                        <img src={"./images/create-user.svg"} alt="Ilustração de Criação de usuário" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ut minima, repellat repellendus vel aliquid eaque modi! Officia</p>
                        <Link to={"/create-user"} className='btn-success'>
                            <BiUser /> Criar Contacto
                        </Link >
                    </article>

                    <article>
                        <img src={"./images/manage.svg"} alt="Ilustração de Criação de usuário" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ut minima, repellat repellendus vel aliquid eaque modi! Officia</p>
                        <Link to={"/manage-users"} className='btn-main'>
                            <BiCog /> Gerenciar Contactos
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    )
}