import React, {Component} from 'react';
import './landing.css';
import pic1 from './Assets/1.jpg'
import pic2 from './Assets/2.jpg'
import pic3 from './Assets/3.jpg'
const pictureArray = [pic1, pic2, pic3];
class Landing extends Component {
    // state = {
    //     image:'',
    //     counter:0
    // }
    // componentDidMount() {
    //     this.changeLandingImage()
    // }
    // changeLandingImage = () => {
    //     this.setState({
    //         counter: this.state.counter+=1
    //     })
    //     if (this.state.counter > pictureArray.length) {
    //             this.setState({
    //                 counter:1,
    //             }, () => {
    //                 this.setState({
    //                     image:pictureArray[this.state.counter-1]
    //                 })
    //             });
    //     }
    //     else {
    //         this.setState({
    //             image:pictureArray[this.state.counter-1]
    //         })
    //     }
    //     setTimeout(this.changeLandingImage,3000);
    // }
    render() {
        return(
            <ul className='landingSlide'>
                    <li>
                        <span></span>
                        <div>
                            <h3>Peace</h3>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div>
                            <h3>Love</h3>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div>
                            <h3>Serenity</h3>
                        </div>
                    </li>
                </ul>
        )
    }
}

export default Landing;


