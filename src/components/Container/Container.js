import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

import Box1 from "../Box1/Box1";
import Box2 from "../Box2/Box2";
import Bin from "../../icons/bin.svg";


const Container = ({ a, b, deleteWorld }) => {
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
            const elByRichtic = a.find(e => e.id === id);
            if (elByRichtic !== -1) {
                return elByRichtic
            }
        })
    }

    return <div>
        <div>

            {getArr().map(e => {
                if (e === undefined) {
                    return null;
                }
                return (
                    <div className="Container">

                        <div className="rich">{e?.rus}</div>
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
                {a.map((obj) => {
                    return (
                        <Box1 addCurrent={addCurrent} currId={currId} data={obj} richtik={richtik.includes(obj.id)} />)
                })}</div>
            <div className="scroll">
                {b.map((obj, i) => {
                    return (
                        <Box2 currId={currId} addAnswer={() => addAnswer(currId)} data={obj} richtik={richtik.includes(obj.id)} />)
                })}
            </div>
        </div>
    </div>
}

export default Container;