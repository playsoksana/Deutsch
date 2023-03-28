import classNames from "../../lib/classNames";

const Box2 = (props) => {
    if (props.richtik) {
        return;
    }

    const classNameD = classNames({
        word: true,
        m: props.data.kind === "m",
        n: props.data.kind === "n",
        f: props.data.kind === "f",
    })

    return <div className={classNameD} onClick={() => { props.addAnswer(props.data.id) }}>{props.data.deutsch}

    </div>
}

export default Box2;