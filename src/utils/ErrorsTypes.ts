export default {
    server: {
        statusCode: 500,
        name: "Internal Server Error",
        message: "Database error"
    },
    validation: {
        statusCode: 400,
        name: "Bad Request",
        message: "Validation error"
    },
    auth: {
        statusCode: 401,
        name: "Unauthorized",
        message: "Authentication error"
    },
    invalidToken: {
        statusCode: 401,
        name: "Invalid token",
        message: "The token provided is not valid"
    },
    tokenExpired: {
        statusCode: 401,
        name: "Token expired",
        message: "The token provided has expired"
    },
    invalidCredentials: {
        statusCode: 401,
        name: "Invalid credentials",
        message: "The credentials provided are not valid"
    },
    forbidden: {
        statusCode: 403,
        name: "Forbidden",
        message: "Forbidden content"
    },
    notFound: {
        statusCode: 404,
        name: "Not Found",
        message: "Content not found"
    },
}