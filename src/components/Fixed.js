import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Fixed() {
    let navigate = useNavigate();
const [isComponentsOpen, setComponentsOpen] = useState(false);
const [isUtilitiesOpen, setUtilitiesOpen] = useState(false);
const [isPagesOpen, setPagesOpen] = useState(false);
const [isBarOpen, setBarOpen] = useState(false);



  const toggleComponents = (e) => {
    e.preventDefault();
    setComponentsOpen(!isComponentsOpen);
  };

  const toggleUtilities = (e) => {
    e.preventDefault();
    setUtilitiesOpen(!isUtilitiesOpen);
  };
  const togglePages = (e) => {
    e.preventDefault();
    setPagesOpen(!isPagesOpen);
  };
  const toggleBar = (e) => {
    // console.log(e);
    e.preventDefault();
    setBarOpen(!isBarOpen);
  };
  const handleAdminclick = (e)=>{
    e.preventDefault();
    navigate('/dashboard');
  };
  const handleButtonclick = (e)=>{
    e.preventDefault();
    navigate('/buttons');
  };
  const handleCardclick = (e)=>{
    e.preventDefault();
    navigate('/card');
  };
  const handleColorclick = (e)=>{
    e.preventDefault();
    navigate('/colors');
  };
  const handleBorderclick = (e)=>{
    e.preventDefault();
    navigate('/border');
  };
  const handleAnimationclick = (e)=>{
    e.preventDefault();
    navigate('/animation');
  };
  const handleOtherclick = (e)=>{
    e.preventDefault();
    navigate('/other');
  };
  const handleLoginclick = (e)=>{
    e.preventDefault();
    navigate('/login');
  };
  const handleForgotclick = (e)=>{
    e.preventDefault();
    navigate('/forgot-password');
  };
  const handleRegisterclick = (e)=>{
    e.preventDefault();
    navigate('/register');
  };
  const handleErrorclick = (e)=>{
    e.preventDefault();
    navigate('/error');
  };
  const handleBlankclick = (e)=>{
    e.preventDefault();
    navigate('/blank');
  };
  const handleChartclick = (e)=>{
    e.preventDefault();
    navigate('/chart');
  };
  const handleTableclick = (e)=>{
    e.preventDefault();
    navigate('/table');
  };
  return <>
  

<body id="page-top">
 <div id="wrapper">
    <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isBarOpen ? 'navbar--minimized' : ''}`} id="accordionSidebar">
          <a className="sidebar-brand d-flex align-items-center justify-content-center" onClick={handleAdminclick}>
            <div className="sidebar-brand-icon">
                <i className="fas fa-chart-line"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
        <hr className="sidebar-divider my-0"/>
        <li className="nav-item active">
            <a className="nav-link" onClick={handleAdminclick}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading">
            Interface
        </div>
        
        <li className="nav-item">
            <a className={`nav-link ${isComponentsOpen ? "" : "collapsed"}`} href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages" onClick={toggleComponents}>
                <i class="fas fa-fw fa-cog"></i>
                    <span>Components</span>
            </a>
            <div id="collapsePages" className={`collapse ${isComponentsOpen ? "show" : ""}`} aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" onClick={handleButtonclick}>Buttons</a>
                        <a className="collapse-item" onClick={handleCardclick}>Cards</a>
                </div>
            </div>
        </li>

        <li className="nav-item">
            <a className={`nav-link ${isUtilitiesOpen ? "" : "collapsed"}`} href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages" onClick={toggleUtilities}>
                <i class="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapsePages" className={`collapse ${isUtilitiesOpen ? "show" : ""}`} aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" onClick={handleColorclick}>Colors</a>
                        <a className="collapse-item" onClick={handleBorderclick}>Borders</a>
                        <a className="collapse-item" onClick={handleAnimationclick}>Animations</a>
                        <a className="collapse-item" onClick={handleOtherclick}>Other</a>
                    </div>
            </div>
        </li>
        
         <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>

      
        <li className="nav-item">
            <a className={`nav-link ${isPagesOpen ? "" : "collapsed"}`} href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages" onClick={togglePages}>
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" className={`collapse ${isPagesOpen ? "show" : ""}`} aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" onClick={handleLoginclick}>Login</a>
                    <a className="collapse-item" onClick={handleRegisterclick}>Register</a>
                    <a className="collapse-item" onClick={handleForgotclick}>Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" onClick={handleErrorclick}>404 Page</a>
                    <a className="collapse-item" onClick={handleBlankclick}>Blank Page</a>
                </div>
            </div>
        </li>

        
        <li className="nav-item">
            <a className="nav-link" onClick={handleChartclick}>
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span></a>
        </li>

        
        <li className="nav-item">
            <a className="nav-link" onClick={handleTableclick}>
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
        </li>

        
        <hr className="sidebar-divider d-none d-md-block"/>

        
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" onClick={toggleBar}></button>
        </div>

        
        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="./img/unknown_rocket.svg" alt="..."/>
            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div>

    </ul>
 
</div>

</body>
  </>
    
  
}

export default Fixed;