import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className='grey-text'>
                        I have an interest in front-end web development .
                        I am looking to pursue a challenging and rewarding career in a role as front-end web developer.
                        </p>
                        <p className='grey-text'>
                        I feel free to become a full-time trainee and a official member. 
                        With my knowledge from executing my projects and my progressive spirit, 
                        I will bring my best skills to this position.
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6><strong>PERSONAL INFO.</strong></h6>
                        <div className='row mt'>
                            <div className='col s12 m6 l6 x16'>
                                <p><strong>Birthday:</strong> 24/03/1999</p>
                                <p><strong>Email:</strong> lehuynhduc.ideas@gmail.com</p>
                                <p><strong>Phone:</strong> (+84) 948548409</p>
                            </div>
                            <div className='s12 m6 l6 x16'>
                                <p><strong>Main Language:</strong> Vietnamese</p>
                                <p><strong>Second Language:</strong> English</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;