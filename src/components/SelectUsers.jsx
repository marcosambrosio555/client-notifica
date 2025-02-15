import { useEffect, useState } from 'react'
import styles from './SelectUsers.module.css'

import {
    BiSearch
} from 'react-icons/bi'

export function SelectUsers({ users, setUsers }) {

    const [searchValue, setSearchValue] = useState("")
    // const [listUsers, setListUsers] = useState(users)

    function searchUsers(e) {
        e.preventDefault()
        return
        setListUsers(...users)
        console.log(users)
        const usersFiltered = listUsers.filter(user => {
            return user.username.includes(searchValue) ||
                user.phone.includes(searchValue)
        })

        setListUsers(usersFiltered)
    }

    // useEffect(() => {
    //     setListUsers(users)
    // }, [])

    function handleSelectAll(e) {
        const selected = e.target.checked
        users.map(user => {
            user.selected = selected
        })
        setUsers([...users])
    }

    function handleSelect(user) {
        user.selected = !user.selected
        setUsers([...users])
    }

    function allUsersIsSelected() {
        if (users.length === 0) return false
        return users.every(user => {
            return user.selected
        })
    }

    return (
        <div className={styles.SelectUsers}>
            <div className="search-form">

                <form onSubmit={(e) => {
                    searchUsers(e)
                }}>
                    <div className="box">
                        <input
                            type="search"
                            id='search-form'
                            name='search-form'
                            value={searchValue}
                            onInput={(e) => {
                                setSearchValue(e.target.value)
                            }}
                        />
                        <BiSearch />
                    </div>
                </form>

                <div className={styles.selectAll}>
                    <label htmlFor="input-all">
                        Selecionar todos
                    </label>
                    <input
                        type="checkbox"
                        id='input-all'
                        checked={allUsersIsSelected()}
                        name="all-checked"
                        onChange={
                            (e) => handleSelectAll(e)
                        }
                    />
                </div>

                <div className={styles.users}>
                    {
                        users.length > 0 ? (
                            users.map(user => (
                                <div key={user._id} className={styles.col}>
                                    <div className={styles.info}>
                                        <span className={styles.username}>{user.username}</span>
                                        <span className={styles.phone}>{user.phone}</span>
                                    </div>
                                    <input
                                        type="checkbox"
                                        name='user-checked'
                                        id={user.phone}
                                        checked={user.selected}
                                        onChange={
                                            () => handleSelect(user)
                                        }
                                    />
                                </div>
                            ))
                        ) : (
                            <h3>Sem usuários</h3>
                        )
                    }
                </div>

            </div>
        </div>
    )

}