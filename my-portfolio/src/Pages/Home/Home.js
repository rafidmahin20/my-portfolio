import React from 'react';
import Banner from './Banner';
import ProjectHomePage from './ProjectHomePage';
import Projects from './Projects';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
           <ProjectHomePage></ProjectHomePage>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;