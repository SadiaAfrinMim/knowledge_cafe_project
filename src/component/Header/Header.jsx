
import profile from '../../assets/assets/img/boy2.jpg'
const Header = () => {
    return (
        <header
         className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h2 className=" font-bold
             text-4xl">knowledge flow</h2>
             <img className='w-12' src={profile} alt="" />
        </header>
    );
};

export default Header;