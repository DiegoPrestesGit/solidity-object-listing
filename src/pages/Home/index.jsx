import Header from './components/Header'
import Ufo from '../../assets/imgs/ufo.svg'

const Home = () => {
    return (
        <>
            <Header/>
            <img src={Ufo} className='absolute h-[600px] w-[600px] lg:top-4 lg:left-44 top-24 left-24' alt="look, an Ufo!" />
        </>
    )
}

export default Home
