import * as S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHouse } from '@fortawesome/free-solid-svg-icons'

import lar from './images/larMariaSanta.jpg'
import Disney from './images/DisneyPlus.jpg'
import Games from './images/GamersGirl.jpg'
import todo from './images/todo.jpg'

const Projetos = () => (
    <section>
        <S.Titulo>
            <h1>
               Principais Projetos
            <FontAwesomeIcon icon={faStar} transform='right-5' />
            </h1>
        </S.Titulo>
        <S.Projeto>
        <S.Proj1>
                <img src={lar} alt="site de lar de idosos" />
        <S.text>
            <h2>Lar Maria Santa</h2>
            <p> website desenvolvido para um lar de idosos, 
                as tecnologias utilizadas foram ReactJs e Bootstrap. 
                O website foi desenvolvido com o propósito de atrair novos possíveis clientes, assim como 
                divulgar a missão, visão e valores do lar, através de imagens do próprio lar, videos e informativos 
                sobre os cuidados e serviços.
                Foi desenvolvido canais de contato para informações (com botões 
                whatsapp) e um canal exclusivo para envio de currículos. 
                Assim como inserido pela API do googleMaps, o mapa de localização do lar.
                </p>
                <S.Logos>
                <i className="devicon-react-original"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                </S.Logos>
                <S.Button><a href="https://www.larmariasanta.com.br/" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faHouse} transform="left-5" />Visite</a></S.Button>
        </S.text>
        </S.Proj1>
        <S.Proj1>
                <img src={Games} alt="site de design" />
        <S.text>
            <h2>Gamers Girls</h2>
            <p> 
            Foi desenvolvido um website fictício de uma loja de projetos de design de cantinhos gamers 
            femininos, um nicho pouco explorado pela área de design de interiores, o objetivo foi buscar e explorar essa temática também para meninas.
            O site foi elaborado através do uso de bootstrap e a responsividade web.
            Utilização de Jquery para a aplicação de máscaras nos campos do formulário e validação do 
            formulário. As linguagens utilizadas foram HTML5, CSS, JavaScript e Bootstrap
            </p>
            <S.Logos>
                <i className="devicon-jquery-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                </S.Logos>
                <S.Button><a href="https://gamers-girls-tmm.vercel.app/" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faHouse} transform="left-5" />Visite</a></S.Button>
        </S.text>
        </S.Proj1>
        <S.Proj1>        
                <img src={Disney} alt="clone disney plus" />
        <S.text>
            <h2>Disney Plus</h2>
            <p> 
                    Landing Page clone da plataforma Disney+, desenvolvido durante o curso Engenharia Front-End da EBAC.
                    O site foi criado com o intuito de aprimorar os conhecimentos em clean code, web responsividade e as habilidades em javascript e Css. 
                    As tecnologias utilizadas foram Html, Sass e Javascript.
            </p>
                <S.Logos>
                <i className="devicon-html5-plain"></i> 
                <i className="devicon-sass-original"></i>
                <i className="devicon-javascript-plain"></i>
                </S.Logos>
                <S.Button><a href="https://clone-disneyplus-bsrk.vercel.app/" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faHouse} transform="left-5" />Visite</a></S.Button>
        </S.text>
        </S.Proj1>
        <S.Proj1>        
                <img src={todo} alt="imagem to do list" />
        <S.text>
            <h2>Todo List</h2>
            <p> 
                    To do List criada no curso da EBAC, o objetivo foi aprimorar o uso do Framework ReactJs e o uso do Redux. 
                    A lista é inteiramente dinâmica, com botões de adição de tarefas, remoção, edição e salvamento das tarefas. 
                    As tecnologias utilizadas foram, ReactJs, Typescript, Html, styled-components e Redux.

            </p>
                <S.Logos>
                <i className="devicon-react-original"></i>     
                <i className="devicon-redux-original"></i>
                <i className="devicon-typescript-plain"></i>
                <i className="devicon-html5-plain"></i> 
                </S.Logos>
                <S.Button><a href="https://to-do-list-tmm.vercel.app/" target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faHouse} transform="left-5" />Visite</a></S.Button>
        </S.text>
        </S.Proj1>
        
        </S.Projeto>

    </section>
)

export default Projetos