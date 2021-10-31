import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                
                <div className='card'>
                    <div className='card-content'>
                        <h6><strong>EXPERIENCE</strong></h6>
                        <div className='row'>
                            <div className='col s12 m14 l4 x14'>
                                <p className=' light-blue darken-4 year_exp white-text'>
                                    March 
                                    <strong> 2018</strong> - 
                                    September 
                                    <strong> 2018</strong>
                                </p>

                            </div>
                            <div className='col s12 m8 l8 x18'>
                                
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'><strong>English and Math Tutor</strong></h6>
                                    <p>Teach English and Math for Junior High school with strong Communication and Instructional skills</p>
                                </blockquote>

                            </div>

                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Experience;