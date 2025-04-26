import { IndexType, Permission } from "node-appwrite"

import { db,questionCollection } from "../name"
import { databases } from "./config"


export default async function createQuestionCollection(){
    //create collection
    await databases.createCollection(db,questionCollection, questionCollection, 
       [
         Permission.read("any"), //anybody can read
         Permission.read("users"), // user can perform curd operation
         Permission.create("users"),
         Permission.update("users"),
         Permission.delete("users"),
       ]
    )

    console.log("Question collection is created")

    //creating attributes and Indexes

    //usualyy att. are created in one go but we have no idea that on
    //what order they'll be creating, so sometimes it is difficult to create att.

    await Promise.all([
        databases.createStringAttribute(db,questionCollection,
            "title",100, true
        ),
        databases.createStringAttribute(db,questionCollection,
            "content",10000, true
        ),
        databases.createStringAttribute(db,questionCollection,
            "authorId",50, true
        ),
        databases.createStringAttribute(db,questionCollection,
            "tags",50, true, undefined, true
        ),
        databases.createStringAttribute(db,questionCollection,
            "attachmentId",50, false
        ),
    ]);

    console.log("Question attributes is created")

    //create index
    await Promise.all([
        databases.createIndex(
            db,
            questionCollection,
            "title",
            IndexType.Fulltext,
            ["title"],
            ['asc']
        ),
        databases.createIndex(
            db,
            questionCollection,
            "content",
            IndexType.Fulltext,
            ["content"],
            ['asc']
        )
    ])

}