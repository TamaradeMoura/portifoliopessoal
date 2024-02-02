import foto from './image/foto.jpg'
import gato from './image/gato.jpg'
import * as S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faDownload } from '@fortawesome/free-solid-svg-icons'

const curriculo = 'http://localhost:5173/TamaradeMoura.pdf'

function Sobre() {
    const downloadFileAtUrl = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();


    }

     return (
        <section>
        <S.About>
            <h2>Prazer Tamara...</h2> 
        </S.About>
        <S.Text>
            <p>
            <FontAwesomeIcon icon={faTerminal} />
            Desenvolvedora Front-end focada nos meus objetivos, amante de tecnologia e jogos, <br></br> desde criança sempre me atrai por essas áreas,
             e após adulta fui atrás das minhas paixões, <br></br> com experiência prática em linguagem ReactJs,
             dinâmica, dedicada, com ótima comunicação, <br></br> sei trabalhar com prazos, gosto muito de um desafio. 
            </p>
        </S.Text>
        <S.Btn>
            <button onClick={() => {downloadFileAtUrl(curriculo)}} className='button'>
            <FontAwesomeIcon icon={faDownload} transform="left-5" />
                Currículo</button>
        </S.Btn>
        <S.Img>
            <img src={foto} alt=" foto pessoal" />
        </S.Img>
        <S.Img2>
            <img src={gato} alt="imagem gatinho jogando" />
        </S.Img2>
    </section>
    )
 }

export default Sobre