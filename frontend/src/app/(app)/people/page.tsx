'use client'

import Card from "@/components/Card/Card";
import api from "@/services/api";
import { useEffect, useState } from "react";
import Collection from '@/interfaces/Collection'
import Heading from "@/components/Heading/Heading";
import styles from '../layout.module.css'
import withAuth from "@/hocs/withAuth";

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
      api.get('/people')
      .then((res) => setPeople(res.data))
      .catch((error) => console.error(error))
    }, [])

    return (
      <div className={styles.section}>
        <Heading category={'People'}></Heading>
        <div className={styles.cards}>
          {people.map((person:Collection) => (
            <Card key={person.id} title={person.title} image={`http://localhost:1337${person.photo}`}></Card>
          ))}
        </div>
      </div>
    );
}

export default withAuth(People);