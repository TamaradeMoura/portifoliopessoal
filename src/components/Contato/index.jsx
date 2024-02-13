import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Contatos() {
    return (
        <section>
            <S.Titulo>
                <h1>Entre em contato</h1>
            </S.Titulo>
               <S.Contents>
               <form>
                <S.Container>
                    <h3>Preencha os dados abaixo</h3>
                <input type="text" placeholder="Seu nome" />
                <input type="text" placeholder="Seu Email" />
                <input type="text" placeholder="Telefone para contato" />
                <textarea placeholder="Sua mensagem"></textarea>
                <button>Enviar</button>
                </S.Container>
                </form>
                <S.Container2>
                    <h3>#Social</h3>
                <S.Links>
                <li>
                    <a href="https://github.com/TamaradeMoura" target='_blank' rel="noreferrer"><i className="devicon-github-original colored"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tamara-frontend-dev/" target='_blank' rel="noreferrer"><i className="devicon-linkedin-plain colored"></i></a>
                </li>
                <li>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5551997385625" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/tamara_moura_18/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x"/></a> 
                </li>
                <li>
                    <a href="https://www.facebook.com/tamara.moura1" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
                </li>
                </S.Links>
                </S.Container2>
               </S.Contents>
        </section>
    )
}

export default Contatos