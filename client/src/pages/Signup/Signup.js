import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Googlelogo from '../../images/search.png';
import MicrosoftLogo from '../../images/microsoft.png';
import { Alert, Button, Input } from '@nextui-org/react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState('');
    const [success, setSucess] = useState('');

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const navigate = useNavigate()

    const handlSignup = async () => {
        try {
            setError("");
            setSucess("");
            if (!email || !password || !Confirmpassword) {
                setError('All Field Required');
                return
            }
            if (password !== Confirmpassword) {
                setError("Password not matched");
                return
            }
            const response = await axios.post('http://localhost:5555/api/connexion', {
                Email: email,
                Password: password
            });
            if (response.data) {
                setSucess("Registration successful! Please check your email to verify your account.");
                setTimeout(() => {
                    navigate('/signin')
                }, 3000)
            }
        } catch (error) {
            if (error.response.status === 400) {
                setError("This email is already in use");
                return
            }
            console.error('Signup error', error)
        }
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="max-w-md  mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-6">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <img src={Googlelogo} alt="Google logo" width={25} />
                        Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <img src={MicrosoftLogo} alt="Microsoft logo" width={25} />
                        Continue with Microsoft
                    </button>
                </div>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                </div>

                {/* Signup Form */}
                <form className="space-y-4">
                    <div>
                        <Input
                            type="email"
                            id="email"
                            variant='bordered'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            name="email"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            type={isVisible ? "text" : "password"}
                            variant="bordered"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            type={isVisible ? "text" : "password"}
                            id="confirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirme your password"
                            name="confirmPassword"
                            variant="bordered"
                            required
                        />
                    </div>

                    <Button
                        onPress={handlSignup}
                        className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Sign up
                    </Button>
                    {error && <Alert color={'danger'} title={error} />}
                    {success && <Alert color={'success'} title={success} />}
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                    </a>

                </p>

            </div>
        </div>
    );
};
