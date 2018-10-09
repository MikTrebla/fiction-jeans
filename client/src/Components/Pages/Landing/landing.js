import React, {Component} from 'react';
import './landing.css';
import pic1 from './Assets/1.jpg'
import pic2 from './Assets/2.jpg'
import pic3 from './Assets/3.jpg'
const pictureArray = [pic1, pic2, pic3];
class Landing extends Component {
    render() {
        return(
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
        )
    }
}

export default Landing;


