import styles from './Card.module.sccs';

const Card = props => {
  return <div className={styles.card}>{props.children}</div>;
};
