import React from 'react'
import { useAppContext } from '../state'
import styles from './Header.module.css'

export default function Header() {
    let {
    state, dispatch
    } = useAppContext();

    let toggleDarkMode = () => {
        dispatch({ type: "TOGGLE_DARK_MODE" })
    }

    return (
        <div className={styles.header}>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            <p>Welcome, {state.name}</p>
        </div>
    )
}
