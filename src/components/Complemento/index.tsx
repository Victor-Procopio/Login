import Espaço from '../imgs/Espaço.jpg';
import Laptop from '../imgs/Laptop.jpg';

import * as O from './style'

export const Complemento = () =>{
    return(
        <O.Complemento>    
             <img className="lap" src={Laptop} alt="imagem de um loptop" />
            <img src={Espaço} alt="imagem do espaço" />
           
            

        </O.Complemento>
    )
}