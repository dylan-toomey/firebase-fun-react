import React from 'react';
import { Route, Link } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import ViewProfile from './components/ViewProfile'

import { useAuthState } from 'react-firebase-hooks/auth'


var firebaseConfig = {
  apiKey: "AIzaSyCzOQvmD8uPUg3XbRxHk1YYV7MRNd5RscI",
  authDomain: "fun-firebase-react.firebaseapp.com",
  projectId: "fun-firebase-react",
  storageBucket: "fun-firebase-react.appspot.com",
  messagingSenderId: "595253339612",
  appId: "1:595253339612:web:c8cc00874e7b82f338db19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

function App() {
  const [user] = useAuthState(auth)

  
  return (
    <>
    <div className="header">
      {user ? <><SignOut /> <Profile /> </>: <SignIn /> }
    </div>
    <Route exact path ="/profile" render={() => <ViewProfile user={auth.currentUser}/>} />
    </>
  );
}

<ViewProfile user={auth.currentUser}/>



function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <>
    <button className='sign-in' onClick={signInWithGoogle}>Google Sign In</button>
    </>
  )
}

function Profile () {
  
  return (
    <>
    <Link to="/profile">
      <button className='sign-in' >View Your Profile</button>
    </Link>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <Link to="/"><button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button></Link>
    )
  }
  
  export default App;
  