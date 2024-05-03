import React from 'react';
import Wrapper from "../components/Wrapper";

const heading = `Display a List of Items using below array.`;
const snippet = `
const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
    { id: 4, name: "Item 4", price: 40 },
];
`;

const NewComponent = () => {
    // code here
};

function Component() {
    return (
        <Wrapper heading={heading} snippet={snippet}>
            <NewComponent />
        </Wrapper>
    );
}

export default Component;