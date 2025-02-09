import styles from './Header.module.css'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Link from 'next/link';

export default function Header() {
    return (
      <header className={styles.header}>
        <Image src={logo} alt={`Orange's Logo`} width={230} height={28}/>
        <nav className={styles.navigation}>
            <ul className={styles.navLinks}>
                <li>
                    <Link className={styles.navLink} href="/foods">Foods</Link>
                </li>
                <li>
                    <Link className={styles.navLink} href="/people">People</Link>
                </li>
                <li>
                    <Link className={styles.navLink} href="/places">Places</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
}