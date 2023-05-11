import { client } from "./client"

export const fetchAllGames = async () => {
    const data = await client.fetch(`
      *[_type == "gameproducts"]{
        api_id,
        favoritelist,
        hours_played,
        game_genres[]->{genre_title, genre_slug},
        game_title,
        slug
      }
    `);
    return data;
  };
  

export const fetchGame = async (api_id) => {
    const data = await client.fetch(`
    *[_type == "gameproducts" && api_id.current == $api_id]
    {api_id, favoritelist, hours_played, game_genres, game_title}`,{api_id})
    return data
   
}

export const fetchFavoriteGame = async () => {
  const data = await client.fetch(`*[_type == 'gameproducts' && favoritelist]`)
  return data
}

export const favoriteGameCount = async () => {
    const data = await client.fetch(`count(*[_type == 'gameproducts' && favoritelist])`)
    return data
    
}
export const myGameCount = async () => {
    const data = await client.fetch(`count(*[_type == 'gameproducts'])`)
    return data
    
}


//https://www.sanity.io/docs/query-cheat-sheet midt på siden så fant vi et eksempel på hvordan man kan telle(count) favorite games/my games//
