import React from 'react';
import Wrapper from "../components/Wrapper";
import { useRecoilState } from 'recoil';
import textState from '../atoms/atom';

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