export default {
    name:'gamecategories',
    type:'document', //document vanligst brukt. Et document vil alltid bli innholdstype som vises i sanity. Hadde det vært object så kunne det bli brukt i et annet element.  
    title:'Gamecategories',
    fields: [
        {
            name:'category_title',
            type:'string',
            title:'Categoryname',
        },

        {

            name:'category_slug',
            type: 'slug',
            title:'URL-tittel',
            options:{
                source: 'category_title',
                slugify: input => input.toLowerCase()
                                .replace((/\s+/g,/[^\w-]+/g), '-')
                                .slice(0, 150)
            }


        },


        {
            name:'game_category_image',
            type:'image',
            title:'Categorpicture',
        }
    ]
}