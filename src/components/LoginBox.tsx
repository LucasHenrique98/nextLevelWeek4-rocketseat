import React, { useState } from 'react';
import Router from 'next/router';
import styles from '../styles/pages/Login.module.css';

export function LoginBox() {
  const [username, setUsername] = useState('');

  const usernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handleButtonClick = () => {
    if (username !== '') {
      localStorage.setItem('username', username);
      Router.push('/app');
    } else {
      alert('Insira um username válido!');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src="/icons/Logo.svg" alt="logo" />
        <br />
        <p>Bem-vindo</p>
        <div>
          <img src="/icons/iconmonstr-github-1.svg" alt="" />
          <p>
            Faça login com seu Github <br /> para começar
          </p>
        </div>

        <div className={styles.inputField}>
          <input
            onChange={usernameInput}
            type="text"
            placeholder="Digite seu username"
            name="username"
          />
          <button type="button" onClick={handleButtonClick} name="username">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
