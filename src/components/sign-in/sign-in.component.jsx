import React from 'react'
import './sign-in.style.scss'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleChange=(event)=>{

        const { value, name}=event.target;

        this.setState({[name]:value});

    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    render(){

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput name="email" 
                handleChange={this.handleChange}
                value={this.state.email} 
                label="email"
                required />
                
                <FormInput name="password" type="password" value={this.state.password} 
                handleChange={this.handleChange}
                label="password" 
                required />
                
                <div className='buttons'><CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton isGoogleSignIn='google-sign-in' onClick={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
                </div>
                </form>
            </div>
        )




    }


}

export default SignIn;