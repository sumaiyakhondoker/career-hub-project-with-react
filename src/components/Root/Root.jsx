
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {

    const navigation = useNavigation()
    // console.log(navigation);
    return (
        <div>
         
            <Header></Header>
            {
                navigation.state === 'loading' ? 
                <p>Loading...</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Root;