'use client'
import backgroundImage from '@/assets/bg.jpg'
import logo from '@/assets/logo.png'
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input'
import Image from 'next/image';
import styles from './login.module.css'

export default function Login() {
  const handleAcessar = () => {

  }

  const handleCadastrar = () => {

  }

  return (
    <div className={styles.content}>
      <Image src={backgroundImage} className={styles.backgroundImage} alt='desk with computer' width={860}/>
      <main className={styles.loginCard}>
        <Image src={logo} alt={`Orange's Logo`} width={230}></Image>
        <div className={styles.inputs}>
          <Input placeholder={'seunome@email.com'} label={'Email'} icon={'email'}></Input>
          <Input placeholder={'Password'} label={'Password'} icon={'password'}></Input>
          <div>
            <input type={'checkbox'} id={'mostrarSenha'} name={'mostrarSenha'}></input>
            <label htmlFor='mostrarSenha'>Mostrar Senha.</label>
          </div>
        </div>
        <a href="#" className={styles.linkProblemas}>Problemas para acessar sua conta?</a>
        <Button text={'Acessar'} onClick={handleAcessar} className={styles.buttonAcessar}></Button>
        <div className={styles.ouDivider}>
          <div className={styles.line}></div>
          <p>ou</p>
          <div className={styles.line}></div>
        </div>
        <Button text={'Cadastrar'} onClick={handleCadastrar}></Button>
        <div className={styles.links}>
          <a href="#">Termos de uso</a>
          <p>•</p>
          <a href="#">Política de Privacidade</a>
        </div>
      </main>
    </div>
  );
}
