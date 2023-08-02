import WavesOpacity from "../../../assets/imgs/waves.svg";

const Bottom = () => {
    return (
        <div className="w-screen h-[60%] bottom-0 fixed">
            <div className="absolute bottom-0 w-screen h-full bg-waves bg-cover"></div>
            {/* <img src={WavesOpacity} className='absolute h-full bg-cover'/> */}
        </div>
    );
};

export default Bottom;
