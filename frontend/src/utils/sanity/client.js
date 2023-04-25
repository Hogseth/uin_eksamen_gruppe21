import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "3u0rj0fh",
    dataset: "production",
    useCdn: true, 
    apiVersion: "2021-10-21",

})