import React, { useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import classNames from '../../lib/classNames';

import styles from './styles.module.css';

import options from '../../words/options';

const TaskWithSentens = (props) => {
    const [counter, setCounter] = useState(0);
    const [counterWord, setCounterWord] = useState(0);
    const [answer, setAnswer] = useState([]);

    const { speak, voices } = useSpeechSynthesis();

    let sentensNative = props.sentensSort[counter].native;
    let sentensDeutsch = props.sentensSort[counter].deutsch;
    let arrSentensDeutsch = sentensDeutsch.match(/\b(\w+)\b/g);
    const lengthSentens = arrSentensDeutsch.length;
    let word = arrSentensDeutsch[counterWord];

    let optArr = options[word];
    if (optArr) {
        optArr = [...optArr] || [].sort(() => Math.random() - 0.5);
    }

    const onChoice = (word) => {
        setAnswer(pre => [...pre, word]);
        setCounterWord(pre => pre + 1);
    }

    const onNext = () => {
        if (props.sentensSort.length - 1 === counter) {
            setCounter(0);
            setAnswer([]);
            setCounterWord(0);
            return;
        }

        if (counterWord !== lengthSentens) {

            setAnswer([]);
            setCounterWord(0);
            return;
        }

        setCounter(pre => pre + 1)
        setAnswer([]);
        setCounterWord(0);
    };


    // === //


    useEffect(() => {
        if (sentensDeutsch === answer.join(" ")) {
            speak({ text: sentensDeutsch, voice: voices[2] });
        }
    }, [answer]);


    // === //


    const renderOptionForChoice = () => {
        if (counterWord === lengthSentens) {
            return;
        };

        const list = optArr.map((word) => {
            return (<div className={styles.btnWord} onClick={() => { onChoice(word) }}>{word}</div>)
        })
        return (
            <div className={styles.BtnWrap}>
                {list}
            </div>)
    };


    const renderResult = () => {
        if (counterWord === lengthSentens) {
            return;
        }

        return (<div className={styles.answer}>{answer.join(" ")}</div>);
    };


    const answerChecked = (index) => {
        const classNameWord = classNames({
            [styles.wrongWord]: answer[index] !== arrSentensDeutsch[index]
        });

        return (
            <span className={classNameWord}>{` ${answer[index]}`}</span>
        );
    };


    const renderAnswerWithNotification = () => {
        if (counterWord !== lengthSentens) {
            return;
        }

        const list = answer.map((word, index) => {
            return answerChecked(index);
        });

        return (
            <div className={styles.result}>
                <div>{list}</div>
                <div
                    className={styles.btnNext}
                    onClick={onNext}>
                    Next
                </div>
            </div>
        );
    };


    // === //


    return (
        <div className={styles.wrap}>
            <div className={styles.sentenceNative}>
                {sentensNative}
            </div>
            {renderOptionForChoice()}
            {renderResult()}
            {renderAnswerWithNotification()}
        </div>
    );
};

export default TaskWithSentens;