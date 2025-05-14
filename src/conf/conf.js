const conf={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),



}

export default conf

// environment variable ko access krne ke liye... kyuuki import.meta.env.VITE_APPWRITEA_URL se kbhi bhi env variable nhi ate or application crash ho jati 