
import {Request,Response, NextFunction} from "express"
import { firebaseApp } from "./auth/firebase.js";

async function verifyFirebaseToken(req:Request, res:Response, next:NextFunction) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/^Bearer (.+)$/);
  const idToken = match ? match[1] : null;

  if (!idToken) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = await firebaseApp.auth().verifyIdToken(idToken);

    
    // req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification failed', err);
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = verifyFirebaseToken;
