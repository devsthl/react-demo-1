import { useEffect, useState } from "react"

const CountDown = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            props.setIsDisable(true);
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [count]);
    return (
        <div>
            {count}
        </div>
    )
}

export default CountDown