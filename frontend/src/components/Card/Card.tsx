import { StaticImageData } from 'next/image'
import Image from 'next/image'
import styles from './Card.module.css'

interface CardProps {
  image: string | StaticImageData
  title: string
}

export default function Card({ image, title }: CardProps) {
    return (
      <div className={styles.card}>
        <div className={styles.gradient}></div>
        <Image src={image} alt={'image'} className={styles.image} height={290} width={290}></Image>
        <h2 className={styles.title}>{title}</h2>
      </div>
    );
}