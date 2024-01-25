import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/../../.env' });




export const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI) { console.error('[ERROR] Missing .env: MONGO_URI'); process.exit(1); }

export const JWT_RANDOM_PASSWORD = process.env.JWT_RANDOM_PASSWORD 
if (!JWT_RANDOM_PASSWORD) { console.error('[ERROR] Missing .env: JWT_RANDOM_PASSWORD=UnPasswordQueNoDebeCambiarNunca'); process.exit(1); }


export const PORT = process.env.PORT 
export const NODE_ENV = process.env.NODE_ENV


console.log("URL MONGO DB: ", MONGO_URI);
console.log("JWT_RANDOM_PASSWORD.length =", JWT_RANDOM_PASSWORD.length);


if (NODE_ENV !== 'PRODUCTION') console.log("Si está en windows, debe usar 'npm run dev'");
console.log("NODE_ENV =", NODE_ENV);


export const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY
if (!FIREBASE_PRIVATE_KEY) { console.error('[ERROR] Missing .env: FIREBASE_PRIVATE_KEY'); process.exit(1); }
export const PORTSOCKET = process.env.PORTSOCKET
if (!FIREBASE_PRIVATE_KEY) { console.error('[ERROR] Missing .env: FIREBASE_PRIVATE_KEY'); process.exit(1); }

