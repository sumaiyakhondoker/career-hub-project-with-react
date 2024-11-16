import { Helmet } from "react-helmet-async";


const Blogs = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Helmet>
                <title>Career Hub | Blogs</title>
            </Helmet>
            <h2 className="text-3xl">All blogs will appear here.</h2>
        </div>
    );
};

export default Blogs;