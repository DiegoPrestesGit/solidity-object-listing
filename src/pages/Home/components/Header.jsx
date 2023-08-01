const Header = () => {
    return (
        <div className='bg-white h-20 flex items-center justify-between px-14'>
            <h1 className=' font-Monofett text-4xl'>Diego Likes Code</h1>
            <div id='navbar' className='flex flex-row space-x-12 font-MonomaniacRegular text-3xl'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Header;
