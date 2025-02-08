'use client'

import styles from './Button.module.css'

interface ButtonProps {
    text: string
    onClick: () => void
    className?: string
}

export default function Button({ text, onClick, className }: ButtonProps) {
    return (
      <>
        <button className={`${styles.button} ${className}`} onClick={onClick}>{text}</button>
      </>
    );
}