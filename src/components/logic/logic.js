import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { autifikation } from '../../firebase/index'

const authGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(autifikation, provider)
    .then((acaunt) => {
      const credential = GoogleAuthProvider.credentialFromResult(acaunt)
      const token = credential.accessToken
      // The signed-in user info.
      const user = acaunt.user
    })
    .catch((err) => console.log(err))
}

export default authGoogle