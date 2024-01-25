import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import app from "../../auth/firebase"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'


export const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)})
