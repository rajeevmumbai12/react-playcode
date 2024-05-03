import React from 'react';
import CodeSnippet from "./CodeSnippet";

const Wrapper = ({ heading, snippet, children }) => {
    return (
        <div className='ml-10  p-4 w-[94%] bg-gray-100'>
            <CodeSnippet heading={heading} code={snippet} />
            {children}
        </div>
    );
};

export default Wrapper;