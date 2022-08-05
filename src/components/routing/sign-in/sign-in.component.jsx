import './sign-in.styles.scss'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firebase.utils'

const SignIn = () => {

    const googleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocReference = await createUserDocumentFromAuth(user)
    }

    return(

        <div>
            <h1>Sign In</h1>
            <button onClick={googleUser}>
                Sign In With Google
            </button>

        </div>
    )
}

export default SignIn