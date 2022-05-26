import type { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = (props) => {
  return (
    <Layout props={{ title: "Listado de Pókemons" }}>
      <Grid.Container gap={2} justify='flex-start'>
        {props.pokemons.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          );
        })}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons = await Promise.all(data.results.map((p, i) => {
    return {
      ...p,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    };
  }));

  return {
    props: {
      pokemons
    }
  };
}

export default HomePage;
