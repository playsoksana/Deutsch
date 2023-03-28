import classNames from "../../lib/classNames";

const Box1 = (props) => {
    if (props.richtik) {
        return;
    }

    const classNameR = classNames({
        word: true,
        currentWord: props.data.id === props.currId,
        disable: props.richtik,
    })

    return <div className={classNameR} onClick={() => props.addCurrent(props.data.id)}>{props.data.rus}</div>
}

export default Box1;