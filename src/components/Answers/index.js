import React from "react";

import Bin from "../../icons/bin.svg";

import styles from "./styles.module.css";

const Answers = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.rich}>
                {props.chosenWord?.native}
            </div>
            <div className={`${styles.rich} ${props.chosenWord?.kind}`}>
                {props.chosenWord?.deutsch}
                <div
                    onClick={props.deleteWorld}
                    className={styles.deleteBtn}>
                    <img className={styles.iconBin} src={Bin} alt="Your SVG" />
                </div>
            </div>
        </div>
    );
}

Answers.propsDefault = {
    chosenWord: {},
    deleteWorld: () => { },
};

export default Answers;