import Earth from "../../../assets/imgs/planet-earth.svg";
import Meteor from '../../../assets/imgs/burning-meteor.svg'

const Middle = () => {
    return (
        <div className="block h-[48%] bg-stars">
            <div className="flex w-screen h-full items-center justify-between pb-20">
                <div id='the-journey' className='flex flex-col font-Monofett text-7xl text-center px-10'>
                    <p className='text-[#1AA5E2]'>Welcome</p>
                    <p className='text-[#A85020]'>to the</p>
                    <p className='text-[#092247]'>Journey</p>
                </div>
                <img src={Earth} alt="pale blue dot" className="w-96 h-96 mt-96" />
                <img src={Meteor} alt="what a hell" className='w-80 rotate-12'/>
            </div>
        </div>
    );
};

export default Middle;
