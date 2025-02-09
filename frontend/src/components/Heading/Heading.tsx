import styles from './Heading.module.css'

interface HeadingProps {
    category: string
}

export default function Heading({ category }: HeadingProps) {
    return (
      <>
      <h1 className={styles.heading}>List of {category}</h1>
      <div className={styles.line}></div>
      </>
    );
}