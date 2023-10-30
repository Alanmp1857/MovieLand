
const Navbar = () => {
    return (
        <div className="bg-gray-300 flex justify-between shadow-lg">
            <img className="p-2 w-16 rounded-full" src="https://cdn.worldvectorlogo.com/logos/movieland.svg" alt="logo" />
            <ul className="flex items-center">
                <li className="mx-2 px-2 cursor-pointer">Home</li>
                <li className="mx-2 px-2 cursor-pointer">TV Shows</li>
                <li className="mx-2 px-2 cursor-pointer">About Us</li>
                <li className="mx-2 px-2 cursor-pointer">Contact Us</li>
                <li className="mx-2 px-2 cursor-pointer"><button className="p-2 bg-green-300 rounded-lg shadow-lg hover:bg-green-200">SignIn</button></li>
            </ul>
        </div>
    )
};

export default Navbar;