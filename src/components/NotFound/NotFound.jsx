import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className='bg-gray-100 h-screen text-4xl text-red-600 text-center font-bold pt-20'>
                <h1>404! <br /> Error!</h1>
                <div className="text-blue-600">
                    Instead Go To <Link to="https://panda-book.netlify.app/"><p className="underline">https://panda-book.netlify.app</p></Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;