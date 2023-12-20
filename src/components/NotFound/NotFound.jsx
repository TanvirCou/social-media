import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className='bg-gray-100 h-screen text-4xl text-red-600 text-center font-bold pt-20'>
                <h1>404! <br /> Error!</h1>
                <div className="text-blue-600">
                    Instead Go To <Link to="http://127.0.0.1:5173/"><p className="underline">http://127.0.0.1:5173/</p></Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;