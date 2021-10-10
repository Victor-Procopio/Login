import logo from '../imgs/Logo.jpg';

import * as C from './style'

export const AddArea = () => {
    
    return (
        <C.Container>    
            
                <img src= {logo} />  
                <p>Bem Vindo ao <span style={{ color: '#FF6C22' }}>painel</span></p>
                <input type="email" className='email' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder="Digite seu e-mail" />
                <input type="password" className="password" id="inputPassword" placeholder="Senha"/>
                <button type="submit" className='btn btn-primary'>Acessar</button>
            
        </C.Container>
    )
}