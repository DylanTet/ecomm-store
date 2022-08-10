import './sign-in.styles.scss'
import SignUpForm from '../../sign-up-form/sign-up-form.component'
import SignInForm from '../../sign-in-form/sign-in-form.component'


const SignIn = () => {

    return(

        <div className='authentication-page'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default SignIn