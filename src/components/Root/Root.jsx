
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ClipLoader } from 'react-spinners';

const Root = () => {

    const navigation = useNavigation()
    // console.log(navigation);
    return (
        <div>
         
            <Header></Header>
            {
                navigation.state === 'loading' ? 
                <div className='flex justify-center items-center  min-h-screen'>
                    <ClipLoader color='#8c3bde' ></ClipLoader>
                </div>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Root;