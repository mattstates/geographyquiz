import React, { Component } from 'react';
import { colors } from '../globalStyles.js';

class Notification extends Component {
    constructor(props) {
        super();
        this.state = {
            classes: ''
        };
        this.removeClasses = this.removeClasses.bind(this);
    }

    removeClasses() {
        this.setState({ classes: '' });
    }

    componentWillMount() {
        if (this.props.correctAnswer !== null) {
            this.setState({ classes: this.props.correctAnswer ? 'correctAnswer' : 'wrongAnswer' });
        }

        setTimeout(this.props.hide, 2000);
    }

    render() {
        return this.props.correctAnswer === null ? (
            ''
        ) : (
            <React.Fragment>
                <div onClick={this.removeClasses} className={this.state.classes}>
                    <span>{this.props.correctAnswer ? 'You got it!' : 'Try Again'}</span>
                </div>
                <style jsx>{`
                    div {
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        font-weight: bold;
                        justify-content: center;
                        text-align: center;
                        text-transform: uppercase;
                    }
                    div.correctAnswer span {
                        border-bottom: 3px solid ${colors.green};
                    }
                    div.wrongAnswer span {
                        border-bottom: 3px solid ${colors.red};
                    }
                    span {
                        animation: 2000ms ease 1 showhide;
                        color: ${colors.black};
                        height: auto;
                        opacity: 0;
                        padding: 8px 16px;
                        width: 100%;
                    }
                    @keyframes showhide {
                        0% {
                            opacity: 0;
                        }
                        20% {
                            opacity: 1;
                        }
                        80% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                      }
                    
                    
				`}</style>
            </React.Fragment>
        );
    }
}
export default Notification;
