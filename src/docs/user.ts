const createUser = {
    tags: ['Users'],
    description: "User registration.",
    operationId: 'createUser',
    security: [
        {
            bearerAuth:[]
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: "#components/schemas/createUserBody"
                }
            }
        },
        required: true
    },
    responses: {
        '201': {
            describe: "User registration successfull.",
            content: {
                'application/json': {
                    schema: {
                        type: "object",
                        properties: {
                            _id: { type: "string", example: "123we4r5t6y7u89uy54e22ee" },
                            name: { type: "string", example: "Chandra" },
                            email: { type: "string", example: "chandra@razorpod.in" },
                            age: { type: "number", example: 30 },
                            address: { type: "string", example: "123 111 111 111 111 111" },
                            password: { type: "string", example: "password" }
                        }
                    }
                }
            }
        },
        '500': {
            description: "Internal Server Error",
            content: {
                'application/json': {
                    schema: {
                        type: "object",
                        properties: {
                            message: { type: "string", example: "Internal Server Error" }
                        }
                    }
                }
            }

        }
    }

}

const createUserBody = {
    type: "object",
    properties: {
        name: { type: "string", example: "Chandra" },
        email: { type: "string", example: "chandra@razorpod.in" },
        age: { type: "number", example: 30 },
        address: { type: "string", example: "123 111 111 111 111 111" },
        password: { type: "string", example: "password" }
    },
}

export { createUser, createUserBody }