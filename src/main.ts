import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
    schema: schema,
})

// Pass it into a main to hook into request handlers.
const main = createServer(yoga)

// Start the main and you're done!
main.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphqlllll')
})