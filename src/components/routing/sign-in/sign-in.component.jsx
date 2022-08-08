import './sign-in.styles.scss'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firebase.utils'
import SignUpForm from '../../sign-in-form/sign-up-form.component'


const SignIn = () => {

    const googleUserPopup = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocReference = await createUserDocumentFromAuth(user)
    }

    return(

        <div>
            <h1>Sign In</h1>
            <button onClick={googleUserPopup}>
                Sign In With Google
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn