import { Dispatch, ReactNode, SetStateAction } from "react";

type CounterPorps = {
    children: ReactNode;
    setCount: Dispatch<SetStateAction<number>>;
};

const Counter = ({ children, setCount }: CounterPorps) => {
    return (
        <>
            <h1>{children}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </>
    );
};

export default Counter;
