import React, { useContext } from 'react';
import Wrapper from "../components/Wrapper";
import { ThemeContext } from '../context/context-api';

const heading = ``;
const snippet = ``;

const NewComponent = () => {
};

function Component() {
    return (
        <Wrapper heading={heading} snippet={snippet}>
            <NewComponent />
        </Wrapper>
    );
}

export default Component;