import styles from './Input.module.css'
import emailIcon from '@/assets/mail.png'
import lockIcon from '@/assets/lock.png'
import Image from 'next/image'

interface InputProps {
    type?: 'text' | 'email' | 'password'
    placeholder: string
    label: string
    icon?: 'email' | 'password'
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type = 'text', placeholder, label, icon, value, onChange }:InputProps) {
    const getIcon = () => {
        switch(icon){
            case 'email':
                return emailIcon;
            case 'password':
                return lockIcon;
            default:
                return emailIcon;
        }
    }

    return (
      <div>
        <label className={styles.label}>{label}</label>
        <div className={styles.inputContainer}>
            <input type={type} className={styles.input} placeholder={placeholder} value={value} onChange={onChange}/>
            {icon && (<div className={styles.icon}><Image alt='icon' src={getIcon()} height={16} width={16}></Image></div>)}
        </div>
      </div>
    );
}