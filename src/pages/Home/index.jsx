import Header from './components/Header'
import Ufo from '../../assets/imgs/ufo.svg'
import Bottom from './components/Botttom'
import Middle from './components/Middle'
import Sun from '../../assets/imgs/sun.svg'

const Home = () => {
    return (
        <div className='w-screen h-screen'>
            <Header/>
            <Middle />
            <Bottom />
            <img src={Ufo} className='absolute h-[600px] w-[600px] lg:top-4 lg:left-44 top-24 left-24' alt="look, an Ufo!" />
        </div>
    )
}

export default Home
