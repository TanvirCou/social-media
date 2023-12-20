import Navbar from '../../Navbar/Navbar';
import Feed from '../Feed/Feed/Feed';
import Rightbar from '../Rightbar/Rightbar/Rightbar';
import Sidebar from '../Sidebar/Sidebar/Sidebar';


const Home = () => {
    return (
        <>
            <Navbar />
            <div className='pt-12  flex '>
                <div className='w-3/12'>
                    <Sidebar />
                </div>

                <div className='w-6/12'>
                    <Feed></Feed>
                </div>
                <div className='w-3/12 my-4'>
                    <Rightbar />
                </div>

            </div>
        </>
    );
};

export default Home;