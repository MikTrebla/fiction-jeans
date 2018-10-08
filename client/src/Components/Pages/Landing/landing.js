import React, {Component} from 'react';
import './landing.css';
import pic1 from './Assets/1.jpg'
import pic2 from './Assets/2.jpg'
import pic3 from './Assets/3.jpg'
const pictureArray = [pic1, pic2, pic3];
class Landing extends Component {
    state = {
        image:''
    }
    componentDidMount() {
        this.setState({
            image:pic1
        })
        this.changeLandingImage();
    }
    changeLandingImage = () => {
        let i = 0;
        setTimeout( () => {
            if (i >= pictureArray.length) {
                let i = 0;
                this.setState({
                    image:pictureArray[i]
                }, () => {
                    this.changeLandingImage();
                })
            } else {
                i++;
                this.setState({
                    image:pictureArray[i]
                }, () => {
                    this.changeLandingImage();
                });
            }
        }, 3000)
    }
    render() {
        return(
            <div className = 'slider'>
                <img src = {this.state.image}/>
            </div>
        )
    }
}

export default Landing;


