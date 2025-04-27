import { Permission } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import { storage } from "./config";

export default async function getOrCreateStorage() {
    try {
        await storage.getBucket(questionAttachmentBucket);
        console.log("Storage created")
    } catch (error) {
        try {
            await storage.createBucket(
                questionAttachmentBucket,questionAttachmentBucket,
                [
                    Permission.read("any"), //anybody can read
                    Permission.read("users"), // user can perform curd operation
                    Permission.create("users"),
                    Permission.update("users"),
                    Permission.delete("users"),
                ],
                false,
                undefined,
                undefined,
                ["jpeg", "png","gif","jpeg","webp","heic"]

            );

            console.log("Storage created");
            console.log('Storage connected')
        } catch (error) {
            console.error("Error creating storage:", error);
        }
    }
}