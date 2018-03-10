import React from 'react';

export default (props) => {
    return (
        <React.Fragment>
            <h2>Welcome to GeoQuizzed</h2>
            <p>GeoQuizzed is a geography learning quiz game.</p>
            <div className="welcome">
                <h2>Future Features:</h2>
                <h3>User Roles</h3>
                <ul>
                    <li>
                        Teacher<ul>
                            <li>Upload Students</li>
                            <li>Manage Classroom</li>
                            <li>Student Scores</li>
                        </ul>
                    </li>
                    <li>Student</li>
                </ul>
                <h3>User Dashboard</h3>
                <ul>
                    <li>See Score Performance Visualizations</li>
                    <li>Manage Account</li>
                </ul>
                <h3>Additional Authorization Providers</h3>
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                </ul>
                <h3>Persistant Progress</h3>
                <h3>Start New Game</h3>
                <h3>More Maps</h3>
                <ul>
                    <li>USA</li>
                    <li>Africa</li>
                    <li>Australia</li>
                    <li>Europe</li>
                    <li>Asia</li>
                </ul>
                <h3>More Projections</h3>
                <ul>
                    <li>Mercator</li>
                    <li>Orthographoc</li>
                </ul>
                <h3>Map-Based Facts</h3>
                <h3>Better Mobile Support</h3>
                <h3>Style and Design Updates</h3>
            </div>
            <style jsx>{`
                h2,
                p {
                    text-align: center;
                }
                .welcome {
                    max-width: 350px;
                    margin: 38px auto;
                    padding: 0.5rem;
                }
                .welcome h2 {
                    text-decoration: underline;
                }
                h3 {
                    font-size: 1.13rem;
                }
                ul {
                    padding-left: 32px;
                    list-style: inside;
                }
            `}</style>
        </React.Fragment>
    );
};
