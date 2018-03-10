import React from 'react';
import { Link } from 'react-router-dom';
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
    ]
    return (
        <React.Fragment>
            <h1>Privacy Policy</h1>
            {privacyStatements.map((policy, index) => { return (<div key={index} className='policy'><h2>{policy.title}</h2><p>{policy.statement}</p></div>) })}
            <Link className="button" to="/">Back</Link>
            <style jsx>{`
					h1 {
						font-weight: 200;
                        text-align: center;
                        text-decoration: underline;
                        text-underline-position: under;
                    }
                    p, h2 { 
                        margin: 0 auto;
                        padding: 0 16px;
                    }
                    h2 { font-weight: 200; margin-top: 18px; }
                    p { font-style: italic; }
                    .policy {
                        border-left: 5px solid black;
                        margin: 0 auto;
                        width: 80%;
                    }
				`}</style>
        </React.Fragment>
    );
};
