
import PropTypes from 'prop-types';
import { SiCountingworkspro } from "react-icons/si";

const Category = ({category}) => {
    const { category_name,availability} = category
    return (
        <div className="p-10 bg-slate-50 rounded-lg">
            {/* <img className="bg-violet-100 p-4 rounded-lg" src={logo} alt="" /> */}
            <SiCountingworkspro className='text-5xl'></SiCountingworkspro>
            <h4 className="text-xl font-extrabold mt-6 mb-2">{category_name}</h4>
            <p className="text-gray-400">{availability}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,
}

export default Category;