import conf from '../config/conf'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.setProject);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImg, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg, 
                    status,
                    userId,

                }
            )
        } catch (error) {
            console.log("Appwrite Session :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg, 
                    status,
                    userId,

                }
            )
        } catch (error) {
            console.log("Appwrite Session :: updatePost :: error", error);
        }
        
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Session :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            await this.databases.getDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite Session :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) { // indexing
        try {
            return await this.databases.listDocuments(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Session :: getPost :: error", error);
            return false;
            
        }
    } 

    //file upload methods/services
    
    async uploadFile(file) {
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            throw error;   
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                file
            )
            return true;
        } catch (error) {
            throw error;   
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const serivce = new Service();


export default serivce