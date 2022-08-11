import React from 'react';
import { Header, Footer, Features, Possibility, WhatGPT3, Blog } from './containers';
import { Navbar, Brand, CTA } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
