import { createUser, createUserBody } from "./user";
const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: "API Documentation:- rStoreFront eCommerce api documentation",
        description: "Documentation of Rest API of rStoreFront eCommerce application.",
        termsOfService: 'http://docs.rstorefront.com/',
        contact: {
            name: "Razorlabz Technology",
            email: "contact@razorlabz",
            url: "http://www.razorlabz.com"
        },
        licence: {
            name: "Apache 2.0",
            url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    servers: [
        {
            url: "http://www.localhost:4200/api/",
            description: "Local server"
        },
        {
            url: "http://www.resorefront.com",
            description: "Production server"
        }
    ],
    tags: [
        {
            name: "Users"
        },
        {
            name: "Auth"
        }
    ],
    paths: {
        '/user': {
            post: createUser
        }
    },
    components: {
        securitySchemas: {
            bearerAuth: {
                type: "http",
                scheme: 'bearer',
                bearerFormat: "JWT",
            }
        },
        schemas: {
            createUserBody
        }
    }
};
export { apiDocumentation }