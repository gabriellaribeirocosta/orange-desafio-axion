'use client'

import Header from "@/components/Header/Header"
import styles from './layout.module.css'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isAuthenticated } from "@/middleware/auth";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated()) {
          router.push('/');
      }
    }, []);

    return (
      <>
        <Header></Header>
        <main className={styles.main}>
          {children}
        </main>
      </>
    );
}