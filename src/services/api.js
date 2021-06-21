export const apiFetch = async (name, gqlQuery) => {
  const responseData = await fetch(
    'https://graphql-pokeapi.vercel.app/api/graphql',
    {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operationName: name,
        query: gqlQuery,
      }),
      method: 'POST',
    }
  )
    .then(response => response.json())
    .then(data => data);

  return responseData;
};

export const pokemonsGQLQuery = (limit, offset) => {
  const query = `query pokemons {
    pokemons(limit:${limit}, offset: ${offset}) {
      count
      next
      previous
      results {
        url
        name
        image
      }
    }
  }`;
  return query;
};

export const pokemonGQLQuery = name => {
  const query = `query pokemons {
    pokemon(name: "${name}") {
      id
      abilities{
        ability{
          name
        }
      }
      types{
          type{
            name
          }
        }
    }
  }`;
  return query;
};
