const Categories = () => {
  return (
    <div className="my-24">
      <div className="text-center ">
      <h2 className="text-5xl font-extrabold">Job Category List</h2>
      <p className="my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>

      </div>
      <div className="grid grid-cols-4 gap-6">
        {/* card 1 */}
        <div className="p-10 bg-slate-50 rounded-lg">
            <img className="bg-violet-100 p-4 rounded-lg" src="../../assets/icons/accounts.png" alt="" />
            <h4 className="text-xl font-extrabold mt-6 mb-2">Account & Finance</h4>
            <p className="text-gray-400">300 Jobs Available</p>
        </div>
        {/* card 2 */}
        <div className="p-10 bg-slate-50 rounded-lg">
            <img className="bg-violet-100 p-4 rounded-lg" src="../../assets/icons/creative.png" alt="" />
            <h4 className="text-xl font-extrabold mt-6 mb-2">Creative Design</h4>
            <p className="text-gray-400">100+ Jobs Available</p>
        </div>
        {/* card 3 */}
        <div className="p-10 bg-slate-50 rounded-lg">
            <img className="bg-violet-100 p-4 rounded-lg" src="../../assets/icons/marketing.png" alt="" />
            <h4 className="text-xl font-extrabold mt-6 mb-2">Marketing & Sales</h4>
            <p className="text-gray-400">150 Jobs Available</p>
        </div>
        {/* card 4 */}
        <div className="p-10 bg-slate-50 rounded-lg">
            <img className="bg-violet-100 p-4 rounded-lg" src="../../assets/icons/chip.png" alt="" />
            <h4 className="text-xl font-extrabold mt-6 mb-2">Engineering Job</h4>
            <p className="text-gray-400">224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
