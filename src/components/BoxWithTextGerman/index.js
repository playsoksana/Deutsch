import React from "react";
import classNames from "../../lib/classNames";

import styles from "./styles.module.css";

const BoxWithTextGerman = (props) => {
    if (props.richtik) {
        return;
    }

    const onCheck = () => {
        if (props.currId !== props.data?.id) {
            return;
        }

        props.addAnswer();
    };

    const classNameD = classNames({
        [styles.word]: true,
        [styles.mStyles]: props.data?.kind === "m",
        [styles.nStyles]: props.data?.kind === "n",
        [styles.fStyles]: props.data?.kind === "f",
    })

    return (
        <div
            className={classNameD}
            onClick={onCheck}>
            {props.data?.deutsch}
        </div>
    );
};

BoxWithTextGerman.propsDefault = {
    data: {},
    richtik: false,
    addAnswer: () => { }
};

export default BoxWithTextGerman;