import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3geoProj from 'd3-geo-projection';
import React from 'react';
import Instructions from './Instructions.jsx';
import Map from './Map.jsx';
import Question from './Question.jsx';
import Selector from './Selector.jsx';
import Button from '../generic/Button.jsx';
import ScorePanel from './ScorePanel.jsx';
import Notification from './Notification.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators';

function mapStateToProps(store) {
    // console.log(store, 'Game Console map state to props');
    // add all of these properties to props...
    return {
        correctAnswerCount: store.correctAnswerCount,
        currentCountry: store.currentCountry,
        currentMap: store.currentMap,
        score: store.score,
        currentQuestion: store.currentQuestion,
        numberOfQuestionsAsked: store.numberOfQuestionsAsked,
        mapJson: store.mapJson,
        questions: store.questions,
        selectedCountry: store.selectedCountry,
        attemptCount: store.attemptCount,
        previousQuestion: store.previousQuestion
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

class GameConsole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            mapType: '', // country || world
            showCorrectAnswer: false,
            answeredCorrectly: null,
            showNotification: false
        };
        this.submitAnswer = this.submitAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.hideNotificationTimeOut = this.hideNotificationTimeOut.bind(this);
    }
    submitAnswer(selectedCountry, currentQuestion) {
        this.setState({ showNotification: true });
        console.log('submitted: ', selectedCountry, currentQuestion);
        if (selectedCountry === currentQuestion) {
            this.props.UPDATE_SCORE(true);
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
        console.warn('hide func')
        this.setState({showNotification: false})
    }

    render() {
        console.log(this.state.showNotification)
        return this.props.mapJson ? (
            <React.Fragment>
                <Instructions />
                {/* <Selector availableMaps={this.state.availableMaps} /> */}
                <Map mapJson={this.props.mapJson} attemptCount={this.props.attemptCount} needsCorrection={this.state.showCorrectAnswer} />
                <Question questionCount={this.props.numberOfQuestionsAsked} currentQuestion={this.props.currentQuestion} />
                <div className="controlRow">
                    <Button
                        disabled={Boolean(!this.props.selectedCountry)}
                        clickFunc={this.submitAnswer.bind(this, this.props.selectedCountry, this.props.currentQuestion)}
                        classes={['submitAnswer', this.props.selectedCountry ? '' : 'disabled']}
                        buttonText={'submit answer'}
                    />
                    {this.state.showNotification ? <Notification hide={this.hideNotificationTimeOut} correctAnswer={this.state.answeredCorrectly} /> : null}

                    <Button clickFunc={this.nextQuestion} classes={['nextQuestion']} buttonText={'next question'} />
                </div>

                <ScorePanel score={this.props.score} attemptCount={this.props.attemptCount} />
                <style jsx>{`
					div.controlRow {
						display: flex;
                        justify-content: space-between;
                        margin: 0 auto;
                        max-width: 500px;
                        min-height: 36px;
					}
				`}</style>
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
