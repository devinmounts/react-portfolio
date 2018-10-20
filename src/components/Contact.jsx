import React from 'react';
import './../styles/Contact.css';
import Resume from './../assets/files/resume.pdf';


class Contact extends React.Component {
  render(){
    return(
      <div className='contact-style'>
        <header className='header'>
          Contact
        </header>
        <h4>Resum&eacute;<br/>
        <small><a href={Resume}>Click to View!</a></small></h4>
        <h4>Github<br/>
        <small><a href="https://github.com/devinmounts">github.com/devinmounts</a></small></h4>
        <h4>Email:<br/>
        <small><a href="mailto:devinmounts@gmail.com">devinmounts@gmail.com</a></small></h4>
        <h4>Hometown:<br/>
        <small>PDX, OR</small></h4>
      </div>
    );
  }
}


export default Contact;
