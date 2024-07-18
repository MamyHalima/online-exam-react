import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Exam = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
    });

    const correctAnswers = {
        question1: '4',
        question2: '10',
        question3: '9',
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Calculate score
        let score = 0;
        Object.keys(correctAnswers).forEach((key) => {
            if (answers[key] === correctAnswers[key]) {
                score += 1;
            }
        });
    
        const examData = {
            question1: answers.question1,
            question2: answers.question2,
            question3: answers.question3,
            score: score,
        };
    
        try {
            // POST data to your Spring Boot API endpoint
            const response = await axios.post('http://localhost:8080/api/exams/', examData);
    
            // Redirect to result page with score and answers data
            navigate('/result', { state: { answers, score } });
        } catch (error) {
            console.error('There was an error submitting the exam!', error);
        }
    };
    

    return (
        <div>
            <h2>Exam Questions</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question 1: What is 2 + 2?</label>
                    <input
                        type="text"
                        value={answers.question1}
                        onChange={(e) => setAnswers({ ...answers, question1: e.target.value })}
                    />
                </div>
                <div>
                    <label>Question 2: What is 5 + 5?</label>
                    <input
                        type="text"
                        value={answers.question2}
                        onChange={(e) => setAnswers({ ...answers, question2: e.target.value })}
                    />
                </div>
                <div>
                    <label>Question 3: What is 10 - 1?</label>
                    <input
                        type="text"
                        value={answers.question3}
                        onChange={(e) => setAnswers({ ...answers, question3: e.target.value })}
                    />
                </div>
                <button type="submit">Submit Exam</button>
            </form>
        </div>
    );
};

export default Exam;
