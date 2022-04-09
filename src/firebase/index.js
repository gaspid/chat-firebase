import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDIBGKSL_1eFpMAtkmDlNfwAvYWeGBikSU',
  authDomain: 'chat-test-27fd4.firebaseapp.com',
  projectId: 'chat-test-27fd4',
  storageBucket: 'chat-test-27fd4.appspot.com',
  messagingSenderId: '41021559580',
  appId: '1:41021559580:web:3d38f9ace3a71935f460d9',
  measurementId: 'G-0MB39DQWCM',
}

const app = initializeApp(firebaseConfig)
export const autifikation = getAuth(app)
