import React from 'react';
export default function LoginTest() {
    return (
        <div className="login">
            {/* <form action="createuser" method="post">
                <input name="firstName" placeholder="firstName" />
                <input name="lastName" placeholder="lastName" />
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input type="submit" value="try it" />
            </form> */}
            <p>GeoQuizzed currently supports login with the following third party accounts:</p>
            <a href="/oauth/google">Login With Google</a>
            <style jsx>{`
                    div {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                    }
                    a {
                        align-self: center;
                        background-color: red;
                        border-radius: 5px;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        height: 60px;
                        justify-content: center;
                        margin: 18px auto;
                        text-align: center;
                        text-decoration: none;
                        width: 160px;
                    }
                    div.login {
                        border: 2px dashed rgba(0,0,0,.125);
                        margin:24px auto 0;
                        max-width: 650px;
                        padding: 32px 0;
                    }
                `}</style>
        </div>
    );
}
