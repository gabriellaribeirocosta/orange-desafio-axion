'use client'

import Button from "@/components/Button/Button";
import styles from './page.module.css'
import { useRouter } from "next/navigation";

export default function Error() {
    const router = useRouter()

    function handleBack(){
        router.push('/')
    }

    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 className={styles.errorTitle}>404</h1>
                    <h2>Page Not Found</h2>
                </div>
                <Button onClick={handleBack} text={'Return To Home'} className={styles.buttonGradient}></Button>
            </div>
        </main>
    )
}