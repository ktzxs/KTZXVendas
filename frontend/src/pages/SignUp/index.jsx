import { Link } from 'react-router-dom'
import './SignUp.css'
import { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";




const KtzLogo = () => (
    <div className='Logo'>
        <Link to='/'>
            <span className='Logo-1'>K</span>
            <span className='Logo-2'>T</span>
            <span className='Logo-3'>Z</span>
        </Link>
    </div>
);

export default function SignUpPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    //logica para validar a senha em tempo real
    const validations = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase:/[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[@!&_]/.test(password),
    }

    const PasswordCriterion = ({isValid, text}) => (
        <li className={`criterion ${isValid ? 'valid' : ''}`}>
            {isValid ? <FaRegCheckCircle /> : <FaRegTimesCircle />}
            <span>{text}</span>
        </li>
    )

    return (
        <div className="container">
            <div className="formWrapper">
                <KtzLogo />
                <h1 className="title">Crie a sua conta. É grátis!</h1>

                <div className="sociaLogin">
                    <button className="google">
                        <FcGoogle size={24} />
                    </button>
                    <button className="facebook">
                        <FaFacebookF size={24} />
                    </button>
                </div>

                <div className="separator">OU</div>

                <p className="subtitle">
                    Nos informe alguns dados para que possamos melhorar  sua experiencia na KTZ
                </p>

                <form>
                    <div className="formGroup">
                        <label htmlFor="cpf">
                            CPF <IoInformationCircleOutline />
                        </label>
                        <input 
                            type="text" 
                            id="cpf" 
                            name="cpf" 
                            placeholder="000.000.000-00" 
                            required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor='fullname'>Nome completo</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            name="fullname" 
                            required />
                    </div>

                    <div className="formGroup">
                       <label htmlFor="nickname">Como Você quer ser chamado(a)?</label> 
                       <input 
                        type="text" 
                        id="nickname" 
                        name="nickname" 
                        placeholder="Exemplo: João.s" />
                       <small>Aparecera em seu perfil, anúncios e chats</small>
                    </div>

                <div className="formGroup">
                    <label htmlFor="birthdate">Data de aniversário</label>
                    <input 
                        type="text" 
                        id="birthdate" 
                        name="birthdate" 
                        placeholder="dd/mm/aaaa" />
                </div>

                <div className="formGroup">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required />
                    <small>Enviaremos um e-mail de confirmação</small>
                </div>

                <div className="formGroup">
                    <label htmlFo="password">Senha</label>
                    <div className="passwordWrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="button"
                            onClick={() =>                              setShowPassword(!showPassword)}
                            className="eyeIcon"
                        >
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </button>
                    </div>
                </div>

                <div className='passwordCritearia'>
                    <p>Para sua segurança, crie uma senha com no mínimo</p>
                    <ul>
                        <PasswordCriterion
                            isValid={validations.length}
                            text='8 ou mais caracteres'
                        />
                        <PasswordCriterion
                            isValid={validations.uppercase}
                            text='Uma letra maíuscula'
                        />
                        <PasswordCriterion
                            isValid={validations.lowercase}
                            text='Uma letra minúscula'
                        />
                        <PasswordCriterion
                            isValid={validations.number}
                            text='Um número'
                        />
                        <PasswordCriterion
                            isValid={validations.special}
                            text='Um caracter especial (exemplo: @!&_)'
                        />
                    </ul>
                </div>

                <button type='submit' className='submitButton'>
                    Cadastre-se
                </button>
                </form>

                <p className='loginLink'>
                    Já tem uma conta? <Link to='/signin'>Entrar</Link>
                </p>
            </div>
        </div>
    )

}




