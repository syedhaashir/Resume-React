import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div className='body'>
    <h1 className='heading'>RESUME</h1>
    <p className='name'><strong>SYED HASHIR ALI HUSSAINI</strong></p><hr/>
    <div className='info'>
    <p>House # B-18 Duplex Naveed Bangalows Gulistan-e-Johar, Karachi</p>
    <p>0330-2134872</p>
    <p><a href ="#" className='email' >hashir.hali@gmail.com</a></p><br></br>
    </div>

    <div className='objective'>
    <p className='obj'><strong>CAREER OBJECTIVE</strong></p><hr/>
    <p className='para'>Dedicated and Determined Undergrad student seeking a position that<br></br>
encourages hard work, organization and communication skills.</p><br></br>
    </div>

    <div className='per-info'>
    <p className='obj'><strong>PERSONAL INFORMATION</strong></p><hr/>
    <p className='para'><strong>Date of Birth: </strong>22<sup>nd</sup> Jan 2003</p>
    <p className='para'><strong>Marital Status: </strong>Single</p>
    <p className='para'><strong>Religion: </strong>Islam</p>
    <p className='para'><strong>Nationality: </strong>Pakistani</p>

    </div>

    </div>
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));