import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
// CONTEXT
import FirebaseContext from '../../../context/FirebaseContext'
// STYLE
import styles from '../styles/register.module.css'

const Register = () => {
    const navigate = useNavigate()
    const {register} = useContext(FirebaseContext)
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
    return (
        <div className={styles.register_container}>
            {/* BANNER */}
            <div className={styles.inner_container}>
                <div className={styles.banner_container}>
                    <h2>Already Have an Account?</h2>
                    <p>Sign in and catch up with your team</p>
                    <button className={[styles.login_btn, styles.btn].join(' ')} onClick = {(e) => { 
                        e.preventDefault()
                        navigate('/auth/login')
                    }} >Login</button>
                </div>
                {/* FORM */}
                <form>
                    <h2>Register Your Account</h2>
                    {/* SOCIAL BUTTONS */}
                    <div className={styles.social_login_container}>
                        <p>Register using social networks</p>
                        <div className={styles.social_login_buttons}>
                            <button>
                                <i className='fa-brands fa-google'></i>
                            </button>
                            <button>
                                <i className = 'fab fa-facebook-f'></i>
                            </button>
                            <button>
                                <i className='fa-brands fa-twitter'></i>
                            </button>
                        </div>
                    </div>
                    {/* SEPERATOR */}
                    <div className={styles.seperator}>
                        <div className={styles.line}></div>
                        <p>or</p>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.form_control}>
                        <input type='email' name='user_email' placeholder={'Email'}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.form_control}>
                        <input type='password' name='user_password' placeholder={'Password'}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* BUTTON */}
                    <button className={[styles.register_btn, styles.btn].join(' ')}
                    onClick = {(e) => {
                        e.preventDefault()
                        register(email, password)
                    }}
                    >Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register