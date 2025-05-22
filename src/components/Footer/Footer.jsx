import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-black text-slate-300 p-10">
  <div className="footer max-w-7xl mx-auto border-b-2 pb-3">
  <aside className="max-w-72">
  <Link className="btn btn-ghost text-3xl font-extrabold ">CareerHub</Link>
    <p className="">
    There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
    </p>
    
      <img src="../../assets/icons/social.png" alt="" />
 
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>


  </div>
  <div className="flex max-w-7xl mx-auto justify-between pt-6">
  
  <p>@2025 CareerHub. All Rights Reserved </p>
  <p>Powered by <Link to='/' className="underline">CareerHub</Link></p>
</div>
</footer>
    );
};

export default Footer;