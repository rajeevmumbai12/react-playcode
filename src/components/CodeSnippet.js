import React from 'react'
import Highlight from 'react-highlight'

const CodeSnippet = ({ heading, code }) => (
    <Highlight language="javascript">
        <span>{heading}</span>
        <div className='mt-4'>Code:</div>
        <span>{code}</span>
    </Highlight>
)
export default CodeSnippet; 