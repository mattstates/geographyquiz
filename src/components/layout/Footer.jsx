import React from 'react';
import { Link } from 'react-router-dom';
import footer from './footer.scss';

export default (props) => {
    return (
        <React.Fragment>
            <footer>
                {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
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
                </form> */}
                <div className="footerContent">
                    <a
                        target="_new"
                        href="https://www.paypal.com/donate/?token=eiDZs0aiLImFK5O3VqO7B024g2fhkDcY4541JNOXPJvYTR7NlNPSD77bENhCUiC4reFOBG&country.x=US&locale.x=US&Z3JncnB0="
                    >
                        DONATE
                    </a>
                    Copyright {new Date().getFullYear()}
                    <Link to="/privacypolicy">Privacy</Link>
                </div>
            </footer>
        </React.Fragment>
    );
};
