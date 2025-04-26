// sometimes instead of .env i need this file to satisfy all needs

const env ={
    appwrite: {
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL),  // not sure if it is of a string type thats why convert it to string
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apikey: String(process.env.APPWRITE_API_KEY)
    }
}

export default env;