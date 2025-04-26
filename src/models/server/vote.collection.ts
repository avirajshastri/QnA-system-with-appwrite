import { Permission } from "node-appwrite";
import { db, voteCollection } from "../name";
import { databases } from "./config";


export default async function createVoteCollection(){
    await databases.createCollection(db,voteCollection,voteCollection,[
        Permission.read("any"), //anybody can read
        Permission.read("users"), // user can perform curd operation
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])

    console.log("Vote collection created")

    await Promise.all([
        databases.createStringAttribute(db,voteCollection,
            "votedById", 50 ,true
        ),
        databases.createStringAttribute(db,voteCollection,
            "typeId", 50 , true
        ),
        databases.createEnumAttribute(db,voteCollection,
            "type", ["answer","question"],true
        ),
        databases.createEnumAttribute(db,voteCollection,
            "voteStatus", ["upvoted","downvoted"], true
        )
    ])

    console.log("Vote Attributes Created");
}


