import React from 'react';
import Footer from '../../Footer';
import Top from '../../Top';

function Blank() {
  return <>
    <div className="container-fluid">
    <div>
    <Top />
    </div>
       <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
        <div style={{position:"fixed",bottom:"0",left:"225px",right:"0"}}>
            <Footer />
         </div>
    </div>
    </>
}

export default Blank;