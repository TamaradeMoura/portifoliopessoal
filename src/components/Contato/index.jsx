import { useForm, ValidationError } from '@formspree/react'

import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

function Contatos() {
    const [state, handleSubmit] =useForm('xyyrweqn')
    if (state.succeeded) {
        return (
            <>
                   <S.Titulo>
                <h1>Entre em contato</h1>
            </S.Titulo>
               <S.Contents>
               <form>
                <S.Container>
                    <h3>Preencha os dados abaixo</h3>
                <input  id='name' type="text" name='name' placeholder="Seu nome" required />
                <input id='email' type="email" name='email' placeholder="Seu Email" required />
                <input id='phone' type="text" name='phone' placeholder="Telefone para contato" required />
                <textarea id='message' name='message' placeholder="Sua mensagem" required></textarea>
                <S.Text>Email recebido, obrigada!</S.Text>
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
            </>
        )
    }
    return (
        <section>
            <S.Titulo>
                <h1>Entre em contato</h1>
            </S.Titulo>
               <S.Contents>
               <form onSubmit={handleSubmit}>
                <S.Container>
                    <h3>Preencha os dados abaixo</h3>
                <input  id='name' type="text" name='name' placeholder="Seu nome" required />
                <ValidationError prefix='name' field='name' errors={state.errors} /> 
                <input id='email' type="email" name='email' placeholder="Seu Email" required />
                <ValidationError prefix='email' field='email' errors={state.errors} /> 
                <input id='phone' type="text" name='phone' placeholder="Telefone para contato" required />
                <ValidationError prefix='phone' field='phone' errors={state.errors} /> 
                <textarea id='message' name='message' placeholder="Sua mensagem" required></textarea>
                <ValidationError prefix='message' field='message' errors={state.errors} /> 
                <button type='submit' disabled={state.submitting}>Enviar</button>
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