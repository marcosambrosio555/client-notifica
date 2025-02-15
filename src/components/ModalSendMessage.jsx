const apikey = import.meta.env.VITE_API

import styles from './Modal.module.css'

export function ModalSendMessage({ usersSelected, message, setModalSendMessage }) {

    const users = [...usersSelected]

    function calculateNumberOfUser() {
        const total = users.length
        if (total === 1) {
            return `${users[0].username}`
        }
        if (total === 2) {
            return `${users[0].username} e ${users[1].username}`
        }
        if (total === 3) {
            return `${users[0].username}, ${users[1].username} e ${users[2].username}`
        }
        return `${users[0].username}, ${users[1].username} e mais ${users.length - 2} pessoas`
    }
 
    async function handleSend(e) {
        
        consol.log("Ok")
        console.log(`${apikey}message`)

        await fetch(`${apikey}message`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                users,
                message
            })
        })

    }


    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <form action="">
                    <h3>Etapa Final 👌</h3>
                    <div className={styles.to}>
                        <h4>Para : </h4>
                        {users.length > 0 && calculateNumberOfUser()}
                    </div>
                    <div className={styles.message}>
                        <h4>Mensagem :</h4>
                        <p>{message}</p>
                    </div>
                    <div className="buttons">
                        <button
                            className='btn btn-main'
                            onClick={(e) => {
                                e.preventDefault()
                                setModalSendMessage(false)
                            }}>
                            Cancelar
                        </button>
                        <button
                            className='btn btn-main'
                            onClick={(e) => {
                                handleSend(e)
                            }}>
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}