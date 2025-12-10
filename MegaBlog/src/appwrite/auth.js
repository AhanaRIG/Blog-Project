import conf from "../conf/conf";
import { Client, Account, ID, Databases } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    databases

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            // .setEndpoint(conf.appwriteUrl)
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    async createAccount({email,password,name}){
        try{
           const userAccount = await this.account.create(ID.unique(),email,password,name);
           if (userAccount){
                // if userAccount created successfully, then 
                // Login directly 
                return this.login({email,password})
           }
           else{
                return userAccount;
           }
           
        }
        catch(err){
            throw err;
        }
        
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }
        catch(err){
            throw err
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        }
        catch(err) {
            console.log("Appwrite Service:: getCurrentUser :: Error : ", err);
            return null; //claude
        }

        // return null;

    }

    async logout() {
        try{
            await this.account.deleteSessions();
        }
        catch (err) {
            console.log("Appwrite Service:: Logout :: error:",err);
        }
    }

    async addUserToDatabase(userId, fullName, email) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionIdUserInfo,
                userId,
                {
                    userId,
                    fullName,
                    email
                }

            )

        } catch (error) {
            console.log("Appwrite Service:: addUserToDatabase :: error:",error)
        }
    }


}
const authService = new AuthService()
export default authService
