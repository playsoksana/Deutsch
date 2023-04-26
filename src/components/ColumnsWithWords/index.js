import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

import BoxWithTextNativeLanguage from "../BoxWithTextNativeLanguage/index.js";
import BoxWithTextGerman from "../BoxWithTextGerman/index.js";
import Answers from "../Answers/index.js";

import styles from "./styles.module.css";

const ColumnsWithWords = (props) => {
    const [currId, setCurrId] = useState(null);
    const [richtik, setRichtik] = useState([]);
    console.log(props);


    const { speak, voices } = useSpeechSynthesis();

    const addCurrent = (id) => {
        setCurrId(id);
    }

    const addAnswer = (id) => {
        const word = props.arrGerman.find((e) => {
            return e.id === currId
        });
        if (word) {
            speak({ text: word?.deutsch, voice: voices[2] });
            setRichtik(pre => [...pre, id]);
        }
    };

    const getArr = () => {
        return richtik.map((id) => {
            const elByRichtic = props.arrNative.find(e => e.id === id);
            if (elByRichtic !== -1) {
                return elByRichtic
            }
        });
    }

    // --- //

    const renderAnswers = () => {
        return (
            getArr().map(chosenWord => {
                if (chosenWord === undefined) {
                    return null;
                }

                return (
                    <Answers
                        chosenWord={chosenWord}
                        deleteWorld={() => props.deleteWorld(chosenWord?.id)} />
                );
            })
        );
    };

    const renderNativeColumn = () => {
        return (
            props.arrNative.map((objNative) => {
                return (
                    <BoxWithTextNativeLanguage
                        addCurrent={() => { addCurrent(objNative.id) }}
                        currId={currId}
                        data={objNative}
                        richtik={richtik.includes(objNative.id)}
                    />)
            })
        )
    };

    const renderGermanColumn = () => {
        return (
            props.arrGerman.map((objGerman) => {
                return (
                    <BoxWithTextGerman
                        currId={currId}
                        addAnswer={() => addAnswer(currId)}
                        data={objGerman}
                        richtik={richtik.includes(objGerman.id)}
                    />)
            })
        );
    };

    const renderColumsForTask = () => {
        return (
            <div className={styles.Container}>
                <div className="scroll">
                    {renderNativeColumn()}
                </div>
                <div className="scroll">
                    {renderGermanColumn()}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div>
                {renderAnswers()}
            </div>
            {renderColumsForTask()}
        </div>)
};

ColumnsWithWords.propsDefault = {
    arrNative: [],
    arrGerman: [],
    deleteWorld: () => { },
};

export default ColumnsWithWords;