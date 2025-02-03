import './signup.css';

const Signup: React.FC = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <form id="signup-form" method="POST">
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            id="first-name" 
                            name="firstName" 
                            placeholder="First Name" 
                            required 
                            autoComplete="given-name" 
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="text" 
                            id="last-name" 
                            name="lastName" 
                            placeholder="Last Name" 
                            required 
                            autoComplete="family-name" 
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="email" 
                            id="signup-email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            autoComplete="email" 
                        />
                        <i className='bx bxs-envelope'></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            id="signup-password" 
                            name="password" 
                            placeholder="Password" 
                            required 
                            autoComplete="new-password" 
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            id="signup-confirm-password" 
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            required 
                            autoComplete="new-password" 
                        />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" required /> I agree to the terms and conditions
                        </label>
                    </div>
                    <button type="submit" className="btn">Create Account</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="./signin">Sign in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
