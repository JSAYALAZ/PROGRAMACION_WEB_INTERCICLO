import {  AppOptions, initializeApp  } from 'firebase-admin';

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig:AppOptions = {
    
};

export const firebaseApp = initializeApp(firebaseConfig);