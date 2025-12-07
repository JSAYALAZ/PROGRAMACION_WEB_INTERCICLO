"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = void 0;
const firebase_admin_1 = require("firebase-admin");
// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {};
exports.firebaseApp = (0, firebase_admin_1.initializeApp)(firebaseConfig);
//# sourceMappingURL=firebase.js.map