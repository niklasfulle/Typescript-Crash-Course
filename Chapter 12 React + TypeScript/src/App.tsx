import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";
import { useState } from "react";

function App() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <Heading title={"Hello"} />
            <Section title={"Test"}>
                <p>My content</p>
            </Section>
            <Counter setCount={setCount}>Count is {count}</Counter>
            <List
                items={["a", "b", "c"]}
                render={(item: string) => <span className="gold">{item}</span>}
            />
        </>
    );
}

export default App;
