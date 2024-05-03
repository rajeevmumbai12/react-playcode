import React, { useState } from 'react';
import Wrapper from "../components/Wrapper";

const heading = `What is the output of below code?`;
const snippet = `
import { useState } from 'react';
export default function Counter() {
    const [counter, setCounter] = useState(10);
    return (
        <>
            <span>{counter}</span>
            <button onClick={() => {
                setCounter(counter + 10);
                setCounter(counter + 10);
                alert(counter);
                setCounter(counter + 10);
                setCounter(counter + 10);
            }}>Increment</button>
        </>
    )
}
`;

function NewComponent() {
    // code here
}

function Component() {
    return (
        <Wrapper heading={heading} snippet={snippet}>
            <NewComponent />
        </Wrapper>
    );
}
export default Component;