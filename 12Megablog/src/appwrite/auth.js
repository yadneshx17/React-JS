import conf from '../config/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.setProject);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) { // jo bhi isko call karega vo object dega apne ko, destructure kardiya values.
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                // call another Method
                return this.login({email, password}) // account made so direct login
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)

        } catch(error){
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite Session :: CurrentUser :: error", error);

        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Session :: logout :: error", error);
            
        }
    }




}

const authService = new AuthService();

export default authService;