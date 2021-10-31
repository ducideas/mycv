import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div>

                <div className='card'>
                    <div className='card-content'>
                        <h6><strong>PROJECT</strong></h6>
                        <div className='row'>
                            <div className=''> 
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'><strong>SEO "Gaming Gear" Website</strong></h6>
                                    <ul>
                                        <li>Leader in a group of 7 members.</li>
                                        <li>Design and customize a "Gaming Gear" website based on Wix.com.</li>
                                        <li>Search Engine Optimization the website on the top of Google with specific keywords.</li>
                                        <li><a href="https://banghegamingstore.wixsite.com/ban-ghe-gaming" target="_blank">
                                            Link Website "Garona Store"
                                        </a></li>
                                    </ul>
                                </blockquote>
                            </div>
                            <div className=''> 
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'><strong>Library Web-based Laravel.</strong></h6>
                                    <ul>
                                        <li>A developer in a group of 7 members.</li>
                                        <li>Design the front-end part of website with strong skills: HTML, CSS.</li>
                                        <li>Improve to reading and write document and report. </li>
                                    </ul>
                                </blockquote>
                            </div>
                            <div className=''> 
                                <blockquote className='no-pad'>
                                    <h6 className='no-pad mt-bottom'><strong>CV landing page</strong></h6>
                                    <ul>
                                        <li>Research the basic knowledge on framework: React.</li>
                                        <li>Buidling a landing page using React and Google Material Design.</li>
                                        <li><a href="#" target="_blank">
                                            Link CV Page 
                                        </a></li>
                                    </ul>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;