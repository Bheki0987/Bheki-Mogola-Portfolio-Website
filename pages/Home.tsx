import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Timeline from '../components/Timeline';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Skills />
            <Certifications />
            <Timeline />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;
