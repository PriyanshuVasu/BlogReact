import conf from "../conf/conf";

import {Client , Account, ID} from "appwrite";        //steps for auth (refer documentation)

export class AuthService {                    //class bna rhe h taki object banake badme method use kr ske.. or agr backend service chnge hori ho jse appwrite ki jagah fireball toh bhi sirf class change krni pde badme aage ke code nhi
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){   // ek method taki sirf badme ye 3 chize le.. chahe koi bhi backend service ho
       try{
            const userAccount=await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password})
            } else {
                return userAccount;
            }
                
       } catch (error) {
            throw error;
       } 
    }

    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch (error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            //throw error;
        }
        return null;
    }

    async logout(){
        try {
           await this.account.deleteSessions();
        } catch(error){
            console.log("Appwrite serive :: logout :: error", error);
            //throw error
        }
    }


}

const authService = new AuthService();       // pehle hi object banake us hi ko export krdo taaki badme new objects hmesha na bnane pdhe.. sirf .method call kre

export default authService

// JAB BHI IN FUTURE APPWRITE SE AUTHENTICATION KRNA HO,,, YE COPY PASTE KR SKTE KYUKI SB SAME HOTA