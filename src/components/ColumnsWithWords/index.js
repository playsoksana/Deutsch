import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

import BoxWithTextNativeLanguage from "../BoxWithTextNativeLanguage/index.js";
import BoxWithTextGerman from "../BoxWithTextGerman/index.js";
import Bin from "../../icons/bin.svg";


const ColumnsWithWords = ({ arrNative, b, deleteWorld }) => {
    const [currId, setCurrId] = useState(null);
    const [richtik, setRichtik] = useState([]);



    const { speak, voices } = useSpeechSynthesis();

    const addCurrent = (id) => {
        setCurrId(id);
    }

    const addAnswer = (id) => {
        const word = b.find((e) => {
            return e.id === currId
        });
        if (word) {
            speak({ text: word?.deutsch, voice: voices[2] });
            setRichtik(pre => [...pre, id]);
        }
    };

    const getArr = () => {
        return richtik.map((id) => {
            const elByRichtic = arrNative.find(e => e.id === id);
            if (elByRichtic !== -1) {
                return elByRichtic
            }
        });
    }

    const renderNativeColumn = () => {
        return (
            arrNative.map((objColNative) => {
                return (
                    <BoxWithTextNativeLanguage
                        addCurrent={() => { addCurrent(objColNative.id) }}
                        currId={currId}
                        data={objColNative}
                        richtik={richtik.includes(objColNative.id)}
                    />)
            })
        )
    };

    return <div>
        <div>
            {getArr().map(e => {
                if (e === undefined) {
                    return null;
                }
                return (
                    <div className="Container">

                        <div className="rich">{e?.native}</div>
                        <div className={`rich ${e?.kind}`}>{e?.deutsch}
                            <div onClick={() => deleteWorld(e?.id)} className="deleteBtn"><img className="iconBin" src={Bin} alt="Your SVG" /></div>
                        </div>
                    </div>
                )
            }
            )}
        </div>

        <div className="Container">
            <div className="scroll">
                {renderNativeColumn()}
            </div>
            <div className="scroll">
                {b.map((obj, i) => {
                    return (
                        <BoxWithTextGerman currId={currId} addAnswer={() => addAnswer(currId)} data={obj} richtik={richtik.includes(obj.id)} />)
                })}
            </div>
        </div>
    </div>
};

export default ColumnsWithWords;