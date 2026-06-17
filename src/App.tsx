import React from 'react';
import './App.css';
import {Header} from './layout/Header/Header'
import {Footer} from './layout/Footer/Footer'
import {Cards} from "./companents/Cards/Cards";

function App() {
    return (
        <>
            <Header/>
            <Cards />
            <Footer/>
        </>
    );
}

export default App;
