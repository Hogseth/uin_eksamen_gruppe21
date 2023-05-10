export default {
    name: 'gameproducts',
    title:'Games',
    type:'document',
    
    fields: [
        {
            name:'game_title',
            type:'string',
            title:'Gametitle'

        },
        {
            name: 'slug',
            type: 'slug',
            title:'url',
            options: {
                source: 'game_title',
                slugify: input => 
                input.toLowerCase()
                .replace((/\s+/g,/[^\w-]+/g), '-')
                .slice(0, 150)
            }
        },
       
        {
            name:'game_genres',
            type:'array',
            title:'Gamegenres',
            of: [
                { 
                    type: 'reference',
                    to: [
                        {type: 'gamegeneres'}
                        ]
                }
            ]
            
            
        },
        {
            name: 'favoritelist',
            title: 'Favoritelist',
            type: 'boolean',
            initialValue: false
            //https://www.sanity.io/docs/initial-value-templates// For finding how to se the favorite slider to default to be on false, unless clicked. 
          },
        
        {
            name:'api_id',
            type:'number',
            title:'API-Id',
        },
        {
            name:'hours_played',
            type:'number',
            title:'Hoursplayed',
        },

        
       
    ],
    

}