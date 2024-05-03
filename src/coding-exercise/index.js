import React from 'react';
import { Link } from 'react-router-dom';

const QuestionList = () => {
    const questions = [
        { title: 'Question 1', link: '/question1' },
        { title: 'Question 2', link: '/question2' },
        { title: 'Question 3', link: '/question3' },
        { title: 'Question 4', link: '/question4' },
        { title: 'Question 5', link: '/question5' },
        { title: 'Question 6', link: '/question6' },
        { title: 'Question 7', link: '/question7' },
        { title: 'Question 8', link: '/question8' },
        { title: 'Question 9', link: '/question9' },
        { title: 'Question 10', link: '/question10' },
    ];

    return (
        <div className="container mx-auto mt-10 px-4">
            <h2 className="text-2xl font-semibold mb-4">List of Questions</h2>
            <ul className="list-disc pl-4 space-y-2">
                {questions.map((question) => (
                    <li key={question.title} className="hover:bg-gray-100 cursor-pointer">
                        <Link to={question.link} target="_blank" className="text-blue-500 underline">
                            {question.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;