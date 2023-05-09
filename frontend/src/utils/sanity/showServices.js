import { client } from "./client"

export const fetchAllGames = async () => {
    const data = await client.fetch(`*[_type == "gameproducts"]`)
    return data
   
}
console.log(data)