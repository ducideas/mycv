import React, {Component, component} from 'react'
import Navbar from './Navbar'
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Profile from './Profile';
import Project from './Project';
export default class Home extends Component{
    render(){
        return(
            <section>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 m4 l3'>
                            <Profile />
                        </div>
                        <div className='col s12 m8 l9'>
                            <About />
                            <Education />
                            <Skills />
                            <Project/>
                            <Experience />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}