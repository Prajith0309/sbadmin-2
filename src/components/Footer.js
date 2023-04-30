import React from 'react'
import ScrollToTopButton from './Scrolltop';
function Footer() {
  return <>
  <footer className="sticky-footer bg-white">
    <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <div style={{display:"grid", gridTemplateColumns:"100% 0%"}}>
                <div>
                <span>Copyright &copy; Your Website 2021</span>
                </div>
                <div>
                    <ScrollToTopButton />
                </div>
            </div>
            
        </div>
    </div>
</footer> 
  </>
    
}

export default Footer;