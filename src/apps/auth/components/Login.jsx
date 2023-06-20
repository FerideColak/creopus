import {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
// CONTEXT
import FirebaseContext from '../../../context/FirebaseContext'
// STYLE
import styles from '../styles/login.module.css'

const Login = () => {
    const navigate = useNavigate()
    const {login} = useContext(FirebaseContext)
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
    return (
       <div className={styles.login_container}>
            {/* BANNER */}
            <div className={styles.inner_container}>
                <div className={styles.banner_container}>
                {/* FORM */}
                <form>
                    <h2>Sign In to Your Account</h2>
                    {/* SOCIAL BUTTONS */}
                    <div className={styles.social_login_container}>
                        <p>Sign in using social networks</p>
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
                        <input type='email'name='user_email' placeholder={'Email'}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.form_control}>
                        <input type='password' name='user_password' placeholder={'Password'}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* BUTTON */}
                    <button className={[styles.login_btn, styles.btn].join(' ')}
                            onClick = {(e) => {
                                e.preventDefault()
                                login(email, password)
                            }}
                            >Login</button>
                </form>
                </div>
            </div>
       </div>
    )
}

export default Login