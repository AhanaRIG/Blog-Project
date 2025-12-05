import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            // .setEndpoint(conf.appwriteUrl)
        this.account = new Account(this.client);
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

}
const authService = new AuthService()
export default authService
