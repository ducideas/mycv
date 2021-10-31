import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Education extends Component {
    render() {
        return (
            <div>

                <div className='card'>
                    <div className='card-content'>
                        <h6><strong>EDUCATION</strong></h6>
                        <table>
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th>Organization</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bachelor’s degree</td>
                                    <td></td>
                                    <td>University of Information Technology</td>
                                    <td><Link to='/' className='btn blue-lighten-2'>View</Link></td>
                                </tr>
                                <tr>
                                    <td>815 Toeic Certificate</td>
                                    <td>June 15 2020</td>
                                    <td>IIG Vietnam</td>
                                    <td><Link to='/' className='btn blue-lighten-2'>View</Link></td>
                                </tr>
                                <tr>
                                    <td>Scrum Foundation Certificate</td>
                                    <td>August 7, 2020</td>
                                    <td>CertiProf</td>
                                    <td><Link to='/' className='btn blue-lighten-2'>View</Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

export default Education;