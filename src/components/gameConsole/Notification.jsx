import React from 'react';

class Notification extends React.Component {
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
                    {this.props.correctAnswer ? 'You got it!' : 'Try Again'}
                </div>
                <style jsx>{`
                    div {
                        border-radius: 6px;
                        color: white;
                        display: flex;
                        flex-direction: column;
                        font-weight: bold;
                        justify-content: center;
                        opacity; .1;
                        padding: 8px 16px;
                        text-align: center;
                        text-transform: uppercase;
                        transition: all 1s;
                        transform: translateY(0px);
                    }
					div.correctAnswer, div.wrongAnswer {
                        opacity: .9;
                    }
                    div.correctAnswer {
                        background-color: green;
                    }
                    div.wrongAnswer {
                        background-color: red;
                    }
                    
                    
				`}</style>
            </React.Fragment>
        );
    }
}
export default Notification;
