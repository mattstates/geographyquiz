import React, { Component } from 'react';
import Instructions from './Instructions.jsx';
import Map from './Map.jsx';
import Question from './Question.jsx';
import Selector from './Selector.jsx';
import Button from '../generic/Button.jsx';
import ScorePanel from './ScorePanel.jsx';
import Notification from './Notification.jsx';
import FlexRow from '../generic/FlexRow.jsx';
import mapStyles from '../../styles/mapStyles.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators'; // TODO: Only import actions you use.

function mapStateToProps(store) {
    store = store.gameConsoleReducer;
    return {
        score: store.score,
        currentQuestion: store.currentQuestion,
        numberOfQuestionsAsked: store.numberOfQuestionsAsked,
        mapJson: store.mapJson,
        questions: store.questions,
        selectedCountry: store.selectedCountry,
        attemptCount: store.attemptCount
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

class GameConsole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapType: '', // country || world
            showCorrectAnswer: false,
            answeredCorrectly: null,
            showNotification: false
        };
        this.hideNotificationTimeOut = this.hideNotificationTimeOut.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    submitAnswer(selectedCountry, currentQuestion) {
        this.setState({ showNotification: true });

        if (selectedCountry === currentQuestion) {
            this.props.UPDATE_SCORE(true);
            // TODO: Refactor duplicate randomization.
            this.props.SET_CURRENT_QUESTION(this.props.questions[Math.floor(Math.random() * this.props.questions.length)]);
            this.props.UPDATE_QUESTIONS_ASKED(this.props.numberOfQuestionsAsked);
            this.setState({ showCorrectAnswer: false });
            this.setState({ answeredCorrectly: true });
        } else {
            this.setState({ showCorrectAnswer: true });
            this.setState({ answeredCorrectly: false });
        }
        this.props.UPDATE_ATTEMPT_COUNT(this.props.attemptCount);
        this.props.SET_PREVIOUS_QUESTION(this.props.currentQuestion);
    }

    nextQuestion() {
        this.props.SET_CURRENT_QUESTION(this.props.questions[Math.floor(Math.random() * this.props.questions.length)]);
        this.props.UPDATE_QUESTIONS_ASKED(this.props.numberOfQuestionsAsked);
        this.props.UPDATE_ATTEMPT_COUNT(this.props.attemptCount);
        this.setState({ showCorrectAnswer: true });
        this.props.SET_PREVIOUS_QUESTION(this.props.currentQuestion);
    }

    hideNotificationTimeOut() {
        this.setState({ showNotification: false });
    }

    render() {
        return this.props.mapJson ? (
            <React.Fragment>
                {/* <Selector availableMaps={this.state.availableMaps} /> */}
                <ScorePanel score={this.props.score} attemptCount={this.props.attemptCount} />

                <Map mapJson={this.props.mapJson} attemptCount={this.props.attemptCount} needsCorrection={this.state.showCorrectAnswer} />
                <Question questionCount={this.props.numberOfQuestionsAsked} currentQuestion={this.props.currentQuestion} />
                <FlexRow>
                    <Button
                        disabled={Boolean(!this.props.selectedCountry)}
                        clickFunc={this.submitAnswer.bind(this, this.props.selectedCountry, this.props.currentQuestion)}
                        classes={['submitAnswer', this.props.selectedCountry ? '' : 'disabled']}
                        buttonText={'submit answer'}
                    />
                    {this.state.showNotification ? <Notification hide={this.hideNotificationTimeOut} correctAnswer={this.state.answeredCorrectly} /> : null}
                    <Button clickFunc={this.nextQuestion} classes={['nextQuestion']} buttonText={'next question'} />
                </FlexRow>
                {this.props.score !== 0 ? null : <Instructions />}

            </React.Fragment>
        ) : (
            <div>
                <p>Loading...</p>
                <style jsx>{`
                    p {
                        font-size: 24px;
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }

    componentDidMount() {
        // TODO: Read in a way to load the correct map on load.
        fetch('/maps/world')
            .then((response) => response.json())
            .then((mapJson) => {
                // TODO: Fix this to make it dynamic
                this.props.LOAD_MAP(mapJson);
                const firstKey = Object.keys(this.props.mapJson.objects)[0];
                const secondKey = Object.keys(this.props.mapJson.objects[firstKey])[1];
                this.props.UPDATE_QUESTIONS([...mapJson.objects[firstKey][secondKey].map((entry) => entry.properties.name)]);
                this.props.SET_CURRENT_QUESTION(this.props.questions[Math.floor(Math.random() * this.props.questions.length)]);
                this.props.UPDATE_QUESTIONS_ASKED(this.props.numberOfQuestionsAsked);
            });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameConsole);
