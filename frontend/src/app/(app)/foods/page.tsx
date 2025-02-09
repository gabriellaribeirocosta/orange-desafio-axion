'use client'

import Card from "@/components/Card/Card";
import api from "@/services/api";
import { useEffect, useState } from "react";
import Collection from '@/interfaces/Collection'
import Heading from "@/components/Heading/Heading";
import styles from '../layout.module.css'

export default function Foods() {
    const [foods, setFoods] = useState([])

    useEffect(() => {
      api.get('/foods')
      .then((res) => setFoods(res.data))
      .catch((error) => console.error(error))
    }, [])

    return (
      <div className={styles.section}>
        <Heading category={'Foods'}></Heading>
        <div className={styles.cards}>
          {foods.map((food:Collection) => (
            <Card key={food.id} title={food.title} image={`http://localhost:1337${food.photo}`}></Card>
          ))}
        </div>
      </div>
    );
}