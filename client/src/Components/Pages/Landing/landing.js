import React, {Component} from 'react';
import './landing.css';

class Landing extends Component {
    render() {
        return(
            <div>
                <div id='landing'>
                    <ul className='landingSlide'>
                        <li>
                            <span></span>
                            <div>
                                <h3>Insert Text Here</h3>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div>
                            <h3>Insert Text Here</h3>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div>
                            <h3>Insert Text Here</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div id='go-to-store'>
                    <a href='/shop'><i className="fas fa-arrow-right"></i></a>
                </div>
               
            </div>
            
        )
    }
}

export default Landing;


