
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories2 = () => {
    const categories = useLoaderData()
    // console.log(categories);
    
    return (
        
      <div className="my-20 ">
        <h2 className="text-4xl font-bold my-6 text-center">Categories</h2>
        <p className="my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className="grid grid-cols-4 gap-6 mb-4">
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
        </div>
      </div>
    );
};

export default Categories2;