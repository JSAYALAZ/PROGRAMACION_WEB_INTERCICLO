"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_js_1 = require("./auth/firebase.js");
async function verifyFirebaseToken(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/^Bearer (.+)$/);
    const idToken = match ? match[1] : null;
    if (!idToken)
        return res.status(401).json({ error: 'No token provided' });
    try {
        const decoded = await firebase_js_1.firebaseApp.auth().verifyIdToken(idToken);
        // req.user = decoded;
        next();
    }
    catch (err) {
        console.error('Token verification failed', err);
        return res.status(401).json({ error: 'Invalid token' });
    }
}
module.exports = verifyFirebaseToken;
//# sourceMappingURL=middleware.js.map