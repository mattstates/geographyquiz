import React from 'react';
import { Link } from 'react-router-dom';
import privacy from './privacyPolicy.scss';
export default (props) => {
    const privacyStatements = [
        {
            title: 'Age',
            statement: 'Users should be over the age of 13 or have their parent\'s consent to use GeoQuizzed.'
        },
        {
            title: 'Personal Information Privacy',
            statement: 'No personal information about the users of GeoQuizzed will be sold or distributed.'
        },
        {
            title: 'Use of Cookies',
            statement: 'GeoQuized uses session cookies.'
        },
        {
            title: 'User Information',
            statement: 'GeoQuizzed collects its user\'s: name, and email.'
        },
        {
            title: 'Further Questions?',
            statement: 'Email geoquizzedweb@gmail.com'
        }
    ];
    return (
        <section className="privacyPolicy">
            <h2>Privacy Policy</h2>
            <div className="wrapper">
                {privacyStatements.map((policy, index) => {
                    return (
                        <div key={index} className="policy">
                            <h3>{policy.title}</h3>
                            <p>{policy.statement}</p>
                        </div>
                    );
                })}
            </div>
            <Link className="button" to="/">
                Back
            </Link>
        </section>
    );
};
