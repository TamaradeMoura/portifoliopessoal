import { HeroDiv } from "./style"
import Typical from 'react-typical'


function Hero() {
    return (
    <section>
        <HeroDiv>
        <h1>Sejam Bem vindos ao meu mundo</h1>
            <p>
                Eu sou {''}
                <Typical className='texto'
                    loop={Infinity}
                    steps={[
                        'Tamara',
                        500,
                        'Desenvolvedora Web',
                        500,
                        'Front-End',
                        500,
                        'Gamer',
                        500,
                    ]}
                />
                </p>
    </HeroDiv>
    </section>
    )
}


export default Hero