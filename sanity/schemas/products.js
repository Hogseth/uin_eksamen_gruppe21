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
            title:'url_tittel',
            options: {
                source: 'game_title',
                slugify: input => 
                input.toLowerCase()
                .replace((/\s+/g,/[^\w-]+/g), '-')
                .slice(0, 150)
            }
        },
        {
            name:'price',
            type:'number',
            title:'Price',
        },
        {
            name:'game_rating',
            type:'number',
            title:'Gamerating',
        },
        {
            name:'game_plot',
            type:'string',
            title:'Gameplot',
        },
        {
            name:'game_tags',
            type:'string',
            title:'Gametags',
        },
        {
            name:'game_developers',
            type:'string',
            title:'Gamedevelopers',
        },
        {
            name:'release_year',
            type:'number',
            title:'Releaseyear',
        },
        {
            name:'game_image',
            type:'image',
            title:'Gameimage',
        },
        {
            name:'game_platforms',
            type:'string',
            title:'Gameplatforms',
        },
        {
            name:'game_stores',
            type:'url',
            title:'Gamestores',
        },
        
        {
            name:'gamecategory',
            title:'Gamecategory',
            type:'reference',
            to: [{type: 'gamecategories'}]

        },
       
    ]
   

}