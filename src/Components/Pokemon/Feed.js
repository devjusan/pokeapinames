import React from 'react';
import styles from './Feed.module.css';
import Pokemons from './Pokemons';

const Feed = () => {
  return (
    <section className={styles.feed}>
      <div>
        <Pokemons />
      </div>
    </section>
  );
};

export default Feed;
