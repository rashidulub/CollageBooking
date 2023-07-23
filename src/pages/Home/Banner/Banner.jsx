 import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../../assets/slider/slide-1.png'
import slider2 from '../../../assets/slider/slide-2.png'
import slider3 from '../../../assets/slider/slide-6.png'
import slider6 from '../../../assets/slider/slide-4.png'
import slider5 from '../../../assets/slider/slide-5png.jpg'

const Banner = () => {
    return (
        <div > 
            <AwesomeSlider style={{height:'500px'}} >
                <div style={{height:'500px'}}  ><img style={{height:'760px', width:'1500px'} } className='max-h-full' src={slider1} alt="" /></div>
                <div><img style={{height:'760px', width:'1500px'} } className='max-h-full' src={slider2} alt="" /></div>
                <div><img style={{height:'760px', width:'1500px'} } className='max-h-full' src={slider3} alt="" /></div>
                <div><img style={{height:'760px', width:'1500px'} } className='max-h-full' src={slider6} alt="" /></div>
                <div><img style={{height:'760px', width:'1500px'} } className='max-h-full' src={slider5} alt="" /></div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;