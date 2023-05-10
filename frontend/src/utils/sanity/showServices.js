import { client } from "./client"

export const fetchAllGames = async () => {
    const data = await client.fetch(`*[_type == "gameproducts"]{api_id, favoritelist, hours_played, game_genres, game_title, slug}`)
    return data
   
}

export const fetchGame = async (api_id) => {
    const data = await client.fetch(`
    *[_type == "gameproducts" && api_id.current == $api_id]
    {api_id, favoritelist, hours_played, game_genres, game_title}`,{api_id})
    return data
   
}

export const favoriteGameCount = async () => {
    const data = await client.fetch(`count(*[_type == 'gameproducts' && favoritelist])`)
    return data
    
}

