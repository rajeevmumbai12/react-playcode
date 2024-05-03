// Counter.jsx
import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/actions';
import Wrapper from "../components/Wrapper";

const heading = ``;
const snippet = ``;

const NewComponent = ({ count, onIncrement }) => {
    // code here
};

function Component({ count, onIncrement }) {
    return (
        <Wrapper heading={heading} snippet={snippet}>
            <NewComponent count={count} onIncrement={onIncrement} />
        </Wrapper>
    );
}

export default Component;
