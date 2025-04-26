// how can my client connect to the appimport { Client, Account } from "appwrite";
import env from "@/app/env";
import {Client, Account, Avatars, Databases, Storage} from "appwrite"  //Avatars are like images loading but theyre lightweight
const client = new Client()
.setEndpoint(env.appwrite.endpoint) // Your API Endpoint
.setProject(env.appwrite.projectId); // Your project ID

const databases = new Databases(client)// why database(s) because it will give me acces to all the db i created in this project
const avatars = new Avatars(client);
const storage = new Storage(client);
const account = new Account(client);

export {client, databases,account,avatars,storage} // frontend can now talk to any point in  the Db

