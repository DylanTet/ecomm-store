import './sign-up-form.styles.scss'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const SignUpForm = () => {

    const defaultFormFields = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { name, email, password, confirmPassword } = formFields

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if(password !== confirmPassword) return

        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { name })

            resetFormFields()
            
        } catch (error) {
            if (error.code === 'auth/email-already-in-use' ) {
                console.log('Cannot create user, email already in use')
            } else {
                console.log('Error creating user', error)
            }
        }
    }

    return (

        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Enter Your Information Below</span>

            <form onSubmit={() => handleSubmit}>
                <FormInput label='Name' type='text' required onChange={handleChange} name="name" value={name}/>

                <FormInput label='Email' type='email' required onChange={handleChange} name="email" value={email}/>
                
                <FormInput label='Password' type='password' required onChange={handleChange} name="password" value={password}/>

                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm