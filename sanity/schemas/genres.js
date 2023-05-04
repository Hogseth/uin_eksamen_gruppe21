export default {
    name:'gamegeneres',
    type:'document', //document vanligst brukt. Et document vil alltid bli innholdstype som vises i sanity. Hadde det vært object så kunne det bli brukt i et annet element.  
    title:'Gamegeneres',
    fields: [
        {
            name:'genre_title',
            type:'string',
            title:'Genrename',
        },

        {

            name:'genre_slug',
            type: 'slug',
            title:'URL-tittel',
            options:{
                source: 'genre_title',
                slugify: input => input.toLowerCase()
                                .replace((/\s+/g,/[^\w-]+/g), '-')
                                .slice(0, 150)
            }


        },

        
    ]
}