import './Signin.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { useState } from 'react';
import { signInWithGooglePopup } from '../../firebase';

export default function Signin() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function handleGoogleSignIn() {
        setLoading(true);
        setError(null);

        try {
            const userObj = await signInWithGooglePopup();
            setUser({
                name: userObj.displayName,
                email: userObj.email,
                photoURL: userObj.photoURL,
                uid: userObj.uid,
            });
            console.log('Usuário logado:', userObj)
        }catch (err) {
            console.log('Erro ao logar com o Google', err);
            setError(err.message || 'Erro no Login');
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className='container'>
            <div className='card'>
                <h2>Entre na sua conta e negocie com segurança!</h2>
                <p>Acesse e aproveite uma experiência segura dentro da KTZ</p>

                <div className='socialLogin'>
                    <button 
                        className='google'
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        aria-label='Entrar com Google'
                    >
                        <FcGoogle size={24} />
                    </button>

                    <button className='facebook'>
                        <FaFacebookF size={24}/>
                    </button>
                </div>

                <div className='divider'>
                    <span>Ou conect com</span>
                </div>

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' placeholder='Digite seu e-mail'/>

                <button className='acessarBtn'>
                    Acessar
                </button>

                <p className='register'>
                    Não tem uma conta? <a href='/signup'>Cadastre-se</a>
                </p>

                {error && <p style={{color: 'red', marginTop: 12}}></p>}

                {user && (
                    <div className='userInfo' style={{ marginTop: 16 }}>
                        <img
                            src={user.photoURL}
                            alt={user.name}
                            style={{ width: 48, borderRadius: '50%'}}
                        />
                        <div>
                            <p>
                                <strong>{user.nome}</strong>
                            </p>
                            <p style={{ fontSize: 12 }}>{user.email}</p>

                        </div>
                    </div>
                )}
            </div>
                <p className='terms'>
                    Ao continuar, você concorda com os <a href='#'>Termos de Uso</a> e <a href='#'>Política de Privacidade</a> da KTZ e suus parceiros, e em receber comunicação da KTZ
                </p>
        </div>
    )
}
