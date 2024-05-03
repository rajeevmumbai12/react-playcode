import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionList from './coding-exercise';
import Question1 from './coding-exercise/Question1';
import Question2 from './coding-exercise/Question2';
import Question3 from './coding-exercise/Question3';
import Question4 from './coding-exercise/Question4';
import Question5 from './coding-exercise/Question5';
import Question6 from './coding-exercise/Question6';
import Question7 from './coding-exercise/Question7';
import Question8 from './coding-exercise/Question8';
import Question9 from './coding-exercise/Question9';
import Question10 from './coding-exercise/Question10';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/question5" element={<Question5 />} />
        <Route path="/question6" element={<Question6 />} />
        <Route path="/question7" element={<Question7 />} />
        <Route path="/question8" element={<Question8 />} />
        <Route path="/question9" element={<Question9 />} />
        <Route path="/question10" element={<Question10 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;