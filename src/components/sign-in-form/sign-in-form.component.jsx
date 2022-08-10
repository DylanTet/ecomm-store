import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { signInUserWithEmail, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { useState } from 'react'
import './sign-in-form.styles.scss'



const SignInForm = () => {

    const defaultFormFields = {
        email: '',
        password: ''
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const googleUserPopup = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({...formFields, [name]: value})
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const { user } = await signInUserWithEmail(email, password)
            resetFormFields()
            
        } catch (error) {
            console.log('Error signing in,', error)
        }
    }

    return (

        <div className='sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={() => handleSubmit}>

                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email}/>
                
                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password}/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={googleUserPopup}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;