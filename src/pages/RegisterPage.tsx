import { useState } from 'react';
import './styles/RegisterPage.css'

function RegisterPage() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    
    
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
                    <input type="password" 
                        id='password'
                        value={password}
                        onChange={handlePassword}
                    />
                    <label htmlFor="password">Heslo</label>
                </div>
                <div>
                    <input type="password" 
                        id='repeat-password'
                        value={passwordRepeat}
                        onChange={handlePasswordRepeat}
                    />
                    <label htmlFor="epeat-password">Heslo</label>
                </div>
            </div>
        </section>
    );
}

export default RegisterPage;