import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Projects></Projects>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;