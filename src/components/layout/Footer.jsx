import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="RD2XTT568H5DJ" />
                    <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                        border="0"
                        name="submit"
                        alt="PayPal - The safer, easier way to pay online!"
                    />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <div className="footer--content">
            Created By: <a href="http://www.mattstates.com" target="_new">Matt States</a>
                </div>
            </footer>
            <style jsx>{`
                    footer {
                        text-align: center;
                    }
                    form {
                        margin: 16px auto;
                    }
                    .footer--content {
                        background-color: #ededed;
                        padding: 16px 0;
                    }
                `}</style>
        </React.Fragment>

    );
}
