exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsHabitacion {
            nodes {
                slug
                }
            }
        }
   `);
   if(result.errors){
       reporter.panic('No ha haábido resultados ', result.errors);
   }
   const rooms = result.data.allDatoCmsHabitacion.nodes;
   rooms.forEach(room => {
       actions.createPage({
           path: room.slug,
           component: require.resolve('./src/components/rooms.jsx'),
           context: {
               slug: room.slug
           }
       })
   })
}