import { NextPage } from "next"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from 'react';
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemons } from "../../components/pokemon/FavoritePokemons";

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout props={{ title: 'Favoritos' }}>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <FavoritePokemons pokemons={favoritePokemons}/>
      }
    </Layout>
  )
}

export default FavoritesPage;
