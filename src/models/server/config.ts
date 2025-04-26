// can I copy config code written for client, how client talked??
// technically yes, but it wont be server to server call but routing thru the frontend and we dont want that
// some things we want to talk to appwrite from backend side
import env from "@/app/env";
import { Avatars,Client,Databases,Storage,Users } from "node-appwrite";
// we will be taling to users from the backend not frontend
let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apikey) // Your secret API key
;

const databases = new Databases(client)// why database(s) because it will give me acces to all the db i created in this project
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client);

export {client,databases,users,avatars,storage}
