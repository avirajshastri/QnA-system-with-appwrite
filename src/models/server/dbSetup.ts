import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";

import createVoteCollection from "./vote.collection";
import { databases } from "./config";

export default async function getorCreated(){
    try {
        await databases.get(db)
        console.log("database connected")
    } catch (error) {
        try {
            await databases.create(db,db)
            console.log("database created")

            //create collection
            await Promise.all([
                createQuestionCollection(),
                createAnswerCollection(),
                createCommentCollection(),
                createVoteCollection(),
            ])

            console.log("Collection created")
            console.log("Database connected")
        } catch (error) {
            console.log("error created database or collection",error)

        }
    }

    return databases;
}