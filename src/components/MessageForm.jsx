import styles from './MessageForm.module.css'

export function MessageForm({ message, setMessage }) {

    return (
        <div className={styles.MessageForm}>
            <form action="">
                <label htmlFor="message">
                    Mensagem para enviar para ...
                </label>
                <textarea id='message' value={message} onInput={(e) => setMessage(e.target.value)}>
                </textarea>
            </form>
        </div>
    )

}