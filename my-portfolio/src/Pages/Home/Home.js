import React from 'react';
import Banner from './Banner';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;