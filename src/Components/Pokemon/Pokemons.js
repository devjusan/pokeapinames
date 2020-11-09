import React from 'react';
import styles from './Pokemons.module.css';
import { GET_POKEMON, API_URL } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../Hook/useFetch';

const Pokemons = () => {
  const { error, loading, data, request } = useFetch();
  const { options } = GET_POKEMON();

  React.useEffect(() => {
    async function firstRender() {
      await request(API_URL, options);
    }
    firstRender();
  }, []);

  async function handleClickPrevious() {
    await request(data.previous, options);
  }

  async function handleClickNext() {
    const { options } = GET_POKEMON();
    await request(data.next, options);
  }

  if (error) return <Error error={error} />;
  if (loading) return <Loading loading={loading} />;
  if (data)
    return (
      <div className={styles.pokemons}>
        <div className={styles.gridTitle}>
          <h1 className={`title ${styles.titlePos}`}>Nomes</h1>
        </div>
        <div className={styles.item}>
          {data.results.map((poke) => (
            <ul key={poke.url}>
              <li>{poke.name}</li>
            </ul>
          ))}
        </div>

        <div className={styles.btnAdjust}>
          {data.previous ? (
            <button className="button" onClick={handleClickPrevious}>
              Anterior
            </button>
          ) : null}
          <button className="button" onClick={handleClickNext}>
            Próxima
          </button>
        </div>
      </div>
    );
  else return null;
};

export default Pokemons;
