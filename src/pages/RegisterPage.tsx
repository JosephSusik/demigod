import { useEffect, useState } from 'react';
import './styles/RegisterPage.css'

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


function RegisterPage() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [valid, setValid] = useState(false);
    const [visible, setVisible] = useState(false);

    
    const handleName = (event:React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }
    const handleSurname = (event:React.FormEvent<HTMLInputElement>) => {
        setSurname(event.currentTarget.value);
    }
    const handleEmail = (event:React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }
    const handlePassword = (event:React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }
    const handlePasswordRepeat = (event:React.FormEvent<HTMLInputElement>) => {
        setPasswordRepeat(event.currentTarget.value);
    }

    useEffect(() => {
        name &&
        surname &&
        email &&
        password &&
        passwordRepeat? setValid(true) : setValid(false);
    }, [surname, password, name, email, passwordRepeat]);

    return(
        <section className='register-page'>
            <p>Registrace</p>
            <div className='form'>
                <div>
                    <input type="text" 
                        id='name'
                        value={name}
                        onChange={handleName}
                    />
                    <label htmlFor="name">Jméno</label>
                </div>
                <div>
                    <input type="text" 
                        id='surname'
                        value={surname}
                        onChange={handleSurname}
                    />
                    <label htmlFor="surname">Příjmení</label>
                </div>
                <div>
                    <input type="text" 
                        id='email'
                        value={email}
                        onChange={handleEmail}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input type={visible? "text":"password"} 
                        id='password'
                        value={password}
                        onChange={handlePassword}
                    />
                    <label htmlFor="password">Heslo</label>
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
                <div>
                    <input type="password" 
                        id='repeat-password'
                        value={passwordRepeat}
                        onChange={handlePasswordRepeat}
                    />
                    <label htmlFor="epeat-password">Heslo</label>
                </div>
                <button className={valid? "valid":"not-valid"}>Registrovat</button>
            </div>
        </section>
    );
}

export default RegisterPage;