import React, { Fragment } from 'react'
import * as C from './styles'
import Typical from 'react-typical'
import IMG from '../../assets/img/img.svg'
import EMP1 from '../../assets/img/emp1.svg'
import EMP2 from '../../assets/img/emp2.svg'
import EMP3 from '../../assets/img/emp3.svg'
import EMP4 from '../../assets/img/emp4.svg'
import EMP5 from '../../assets/img/emp5.svg'
import EMP6 from '../../assets/img/emp6.svg'

import { Link } from 'react-router-dom'


export const Home = () => {
  return (
    <Fragment>
      <C.Infos>
        <C.Conteudo>
          <C.Text>
            Somos uma empresa <br />
            especialista em <br />
            desenvovimento <br />
          </C.Text>
          <C.TextTypical>
            <Typical
              loop={Infinity}
              steps={[
                "de aplicações Web",
                2000,
                "de aplicações Mobile",
                2000,
                "de aplicações Cloud",
                2000,
                "de Software",
                2000,
              ]}
            />
          </C.TextTypical>
          <p style={{paddingBottom: '20px', fontSize: '18px', marginTop: '-50px'}}>
            Ajudamos você no processo de transformação digital e inovação!
          </p>
          <C.Botao>
            <Link to="/Contato">FALE COM UM CONSULTOR</Link>
          </C.Botao>
        </C.Conteudo>
        <C.Image>
          <img src={IMG} alt="" />
        </C.Image>
      </C.Infos>
      <C.Inovacao>
            <h2>Pra quem inovamos</h2>
            <div>
              <img src={EMP1}/>
              <img src={EMP2}/>
              <img src={EMP3}/>
            </div>
            <div>
              <img src={EMP4}/>
              <img src={EMP5}/>
              <img src={EMP6}/>
            </div>
      </C.Inovacao>
    </Fragment>
  )
}
