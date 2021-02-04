
import React, { Component } from 'react';


class Contacts extends Component {

        render() {
            return (
                <div className="container-contacts">                
                  <div className="contact">
                    <ul className="contact-list">                        
                        <li><span className="dog-data find-us">Find us </span></li>
                        <li><span className="dog-data">E-email: </span> contact-logensa@gmail.com</li>
                        <li><span className="dog-data">Location: </span> Riga, Latvia </li>
                        <li><span className="dog-data">Telephone: </span> +371 555-5555</li>
                        <li><span className="dog-data">Social medial: </span> <a href="facebook.com">Our Facebook page</a> </li> <br />
                        <img className="img-gallery" src="https://i.ibb.co/WfpjC7F/cont2.png" />
                    </ul>
                    
                    </div>
                </div>
            )}
        }
        
 export default Contacts
    