import React,{useState} from 'react'
import Footer from '../Footer';
import Top from '../Top';


function Animations() {
    const [isAni1Open, setAni1Open] = useState(false);
    const [isAni2Open, setAni2Open] = useState(false);
    const [isAni3Open, setAni3Open] = useState(false);

    const toggleAni1 = (e)=>{
        e.preventDefault();
        setAni1Open(!isAni1Open);
    };
    const toggleAni2 = (e)=>{
        e.preventDefault();
        setAni2Open(!isAni2Open);
    };
    const toggleAni3 = (e)=>{
        e.preventDefault();
        setAni3Open(!isAni3Open);
    }
  return <>
  <div style={{display:"grid", gridTemplaterows:"10% 85% 5%"}}>
      <div>
            <Top />
      </div>
    <div className="container-fluid">


<h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
<p className="mb-4">Bootstrap's default utility classes can be found on the official <a
        href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
    below were created to extend this theme past the default utility classes built into Bootstrap's
    framework.</p>


<div className="row">

  
    <div className="col-lg-6">

        <div className="card position-relative">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <code>.animated--grow-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" onClick={toggleAni1}>
                                Dropdown
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right animated--grow-in ${isAni1Open?"show":""}`}
                                aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#" onClick={toggleAni1}>Action</a>
                                <a className="dropdown-item" href="#" onClick={toggleAni1}>Another action</a>
                                <div className="dropdown-divider" onClick={toggleAni1}></div>
                                <a className="dropdown-item" href="#" onClick={toggleAni1}>Something else here</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <p className="mb-0 small">Note: This utility animates the CSS transform property,
                    meaning it will override any existing transforms on an element being animated!
                    In this theme, the grow in animation is only being used on dropdowns within the
                    navbar.</p>
            </div>
        </div>

    </div>

    
    <div className="col-lg-6">

        <div className="card position-relative">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <code>.animated--fade-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" onClick={toggleAni2}>
                                Dropdown
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right animated--grow-in ${isAni2Open?"show":""}`}
                                aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#" onClick={toggleAni2}>Action</a>
                                <a className="dropdown-item" href="#" onClick={toggleAni2}>Another action</a>
                                <div className="dropdown-divider" onClick={toggleAni2}></div>
                                <a className="dropdown-item" href="#" onClick={toggleAni2}>Something else here</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="small mb-1">Dropdown Button Example:</div>
                <div className="dropdown mb-4">
                    <button className="btn btn-primary dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false" onClick={toggleAni3}>
                        Dropdown
                    </button>
                    <div className={`dropdown-menu animated--grow-in ${isAni3Open?"show":""}`}
                        aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" onClick={toggleAni3}>Action</a>
                        <a className="dropdown-item" href="#" onClick={toggleAni3}>Another action</a>
                        <a className="dropdown-item" href="#" onClick={toggleAni3}>Something else here</a>
                    </div>
                </div>
                <p className="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                    it will override any existing opacity on an element being animated!</p>
            </div>
        </div>

    </div>

</div>

</div>
<div style={{position:"fixed",bottom:"0",left:"225px",right:"0"}}>
    <Footer />
</div>
</div>


  </>
}

export default Animations