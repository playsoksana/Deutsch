import React from "react";


import classNames from "../../lib/classNames";

const Box2 = (props) => {


    if (props.richtik) {
        return;
    }

    const onCheck = () => {

        if (props.currId !== props.data.id) {
            return;
        }
        props.addAnswer();
    }

    const classNameD = classNames({
        word: true,
        m: props.data.kind === "m",
        n: props.data.kind === "n",
        f: props.data.kind === "f",
    })

    return (<div className={classNameD}
        onClick={onCheck}>{props.data.deutsch}   </div>)
}

export default Box2;