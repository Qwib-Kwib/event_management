import './signin.css';

const Signin: React.FC = () => {
    return (
            <div className="container">
                <div className="wrapper">
                    <form id="signin-form" method="POST">
                        <h1>Sign In</h1>
                        <div className="input-box">
                            <input 
                                type="email" 
                                id="signin-email" 
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
                                id="signin-password" 
                                name="password" 
                                placeholder="Password" 
                                required 
                                autoComplete="current-password" 
                            />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" required /> Remember Me
                            </label>
                        </div>
                        <button type="submit" className="btn">Sign In</button>
                        <div className="register-link">
                            <p>Don't have an account yet? <a href="./signup">Sign up</a></p>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Signin;
