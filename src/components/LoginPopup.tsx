import { NavLink } from 'react-router-dom';
import './styles/LoginPopup.css'
import { useEffect, useState } from 'react';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function LoginPopup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [validName, setValidName] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [valid, setValid] = useState(false);

    const [visible, setVisible] = useState(false);


    const handleName = (event:React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }
    const handlePassword = (event:React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    useEffect(() => {
        username && password? setValid(true) : setValid(false);
        username? setValidName(true) : setValidName(false);
        password? setValidPassword(true) : setValidPassword(false);
    }, [username, password]);

    return(
        <div className='login-popup'>
            <p className='login'>Přihlásit se</p>
            <div className='inputs'>
                <div className='name'>      
                    <input type="text" 
                        id='name'
                        className={validName? "name-valid":"name-not-valid"}
                        value={username}
                        onChange={handleName}
                    />     
                    <label htmlFor="name">Email</label>
                </div>
                <div className='password'>      
                    <input type={visible? "text":"password"}
                        id='password'
                        className={validPassword? "password-valid":"password-not-valid"}
                        value={password}
                        onChange={handlePassword}
                    />
                    <label htmlFor="password">Password</label>
                    <div className='eye'
                        onClick={()=>setVisible(!visible)}
                    >
                        {visible?
                            <VisibilityOutlinedIcon className='icon'/>
                            :
                            <VisibilityOffOutlinedIcon className='icon'/>
                        }
                    </div>
                </div>
                <button className={valid? "valid":"not-valid"}>Přihásit se</button>
            </div>
            <div className='register'>
                <p>Nemáte účet?</p>
                <NavLink to={'/register'}>Zaregistrujte se </NavLink>
            </div>
        </div>
    );
}

export default LoginPopup;