import React, { useCallback, useState } from 'react'
import { auth, googleProvider } from '../config/firebase-config'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
        
        
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err)
        }
        
        
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
        
        
    }

    return (
    <div className='flex border border-gray-500 h-screen w-2/4 flex-col gap-4 m-auto mt-10 rounded-xl  p-5'>
        <input type="email" placeholder='Email...' className='h-12 w-1/2 rounded-xl border border-blue-300 outline-none'
        onChange={(e) => setEmail(e.target.value)}
         />

        <input type="password" placeholder='password' className='h-12 w-1/2 rounded-xl border border-blue-300 outline-none'
        onChange={(e) => setPassword(e.target.value)}
        />

        <button className='h-11 w-1/2 bg-black text-white rounded-lg' onClick={signIn}>Sign in</button>

        <button className='h-11 w-1/2 bg-black text-white rounded-lg hover:bg-white hover:text-black' onClick={signInWithGoogle}>Sign in with google</button>
        <button className='h-11 w-1/2 bg-black text-white rounded-lg' onClick={logOut}>logOut</button>
    </div>
  )
}

export default Auth