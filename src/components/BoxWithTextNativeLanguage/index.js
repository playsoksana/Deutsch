import React from "react";
import classNames from "../../lib/classNames";

import styles from "./styles.module.css";

const BoxWithTextNativeLanguage = (props) => {
    if (props.richtik) {
        return;
    }

    const classNameR = classNames({
        [styles.word]: true,
        [styles.currentWord]: props.data.id === props.currId,
    })

    return (
        <div
            className={classNameR}
            onClick={props.addCurrent} >
            {props.data?.native}
        </div>
    );
};

BoxWithTextNativeLanguage.propsDefault = {
    data: {},
    richtik: false,
    currId: null,
    addCurrent: () => { },
};

export default BoxWithTextNativeLanguage;