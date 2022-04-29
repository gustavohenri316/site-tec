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
import Infra from '../../assets/img/infra.svg'
import Out from '../../assets/img/out.svg'
import DEV from '../../assets/img/dev.svg'
import Rec from '../../assets/img/rec.svg'

import { Link } from 'react-router-dom'
import { Solutions } from '../../components/Solutions'


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
      <C.BemVindo>
              <h4>Bem vindo</h4>
              <h3>Solution Provider de TI</h3>
              <p>Somos o seu parceiro de TI para desenvolvimento de software, <br /> plataforma multicloud para microsserviços, integração e atualização de <br /> sistemas legados.</p>
              <div>
                <div>
                  <Solutions 
                  img={DEV}
                  title="Desenvolvimento de software"
                  describe="Desenvolvemos softwares a fim de te ajudar na integração e atualização de sistemas, aumentando resultados, favorecendo a flexibilização de recursos e redução de custos."
                  />
                  <Solutions 
                  img={Infra}
                  title="Infraestrutura de TI"
                  describe="Desenvolvemos toda a estrutura de TI do seu negócio."
                  />
                  <Solutions 
                  img={Out}
                  title="Outsourcing"
                  describe="Disponibilizamos profissionais especialistas para somar à sua equipe de trabalho."
                  />
                  <Solutions 
                  img={Rec}
                  title="Recrutamento e seleção"
                  describe="Por meio de nossos processos, ferramentas e do entendimento real do seu negócio, garantimos o profissional certo."
                  />
                </div>
              </div>
      </C.BemVindo>
    </Fragment>
  )
}
