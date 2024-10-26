import Logo from '../../../assets/Components/Images/logo.png'
import Coin from '../../Components/Images/dollar.png'


const Header = ({ price }) => {
    return (
        <div>
            <div className="navbar my-5">
                <div className="navbar">
                    <a className=""><img src={Logo} alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex justify-between gap-5 mr-7">
                        <li className="text-,g font-normal text-black"><a href="#">Home</a></li>
                        <li className="text-xl font-normal text-black"><a href="#">Fixture</a></li>
                        <li className="text-xl font-normal text-black"><a href="#">Teams</a></li>
                        <li className="text-xl font-normal text-black"><a href="#">Schedules</a></li>
                    </ul>
                </div>
                <button className="btn text-lg border-2 border-solid border-gray-300 bg-white hover:bg-white w-1/7 h-14"> ${price} Coin <img src={Coin} alt="" /></button>
                <div className="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='text-black'><a href="#">Home</a></li>
                        <li className='text-black'><a href="#">Fixture</a></li>
                        <li className='text-black'><a href="#">Teams</a></li>
                        <li className='text-black'><a href="#">Schedules</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;