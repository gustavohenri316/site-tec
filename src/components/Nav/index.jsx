import React from 'react'
import * as C from './styles'
import Logo from '../../assets/img/logo.svg'
import { Link } from "react-router-dom";


export const Nav = () => {
  return (
    <C.Container>
        <div style={{marginLeft: '-120px'}}>
            <Link to='/'>
                <img src={Logo}/>
            </Link>
        </div>
        <nav>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Produtos">Produtos</Link>
            <Link to="/Carreiras">Carreira</Link>
            <Link to="/Contato">Contato</Link>
        </nav>
    </C.Container>
  )
}
