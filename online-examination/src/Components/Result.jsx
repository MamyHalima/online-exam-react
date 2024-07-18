import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const { state } = location;
    const { answers, score } = state || { answers: {}, score: 0 };

    // Function to handle saving result
    const handleSaveResult = async () => {
        const resultData = {
            result: `${score} out of ${Object.keys(answers).length}`,
        };

        try {
            // POST result data to your Spring Boot API endpoint
            const response = await axios.post('http://localhost:8080/api/results/', resultData);
            console.log('Result saved successfully:', response.data);
        } catch (error) {
            console.error('Error saving result:', error);
        }
    };

    return (
        <div>
            <h2>Results</h2>
            <p>Your score: {score} out of {Object.keys(answers).length}</p>
            <button onClick={handleSaveResult}>Save Result</button>
        </div>
    );
};

export default Result;
