'use client'

import Card from "@/components/Card/Card";
import api from "@/services/api";
import { useEffect, useState } from "react";
import Collection from '@/interfaces/Collection'
import Heading from "@/components/Heading/Heading"
import styles from '../layout.module.css'

export default function Places() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
      api.get('/places')
      .then((res) => setPlaces(res.data))
      .catch((error) => console.error(error))
    }, [])

    return (
      <div className={styles.section}>
        <Heading category={'Places'}></Heading>
        <div className={styles.cards}>
          {places.map((place:Collection) => (
            <Card key={place.id} title={place.title} image={`http://localhost:1337${place.photo}`}></Card>
          ))}
        </div>
      </div>
    );
}