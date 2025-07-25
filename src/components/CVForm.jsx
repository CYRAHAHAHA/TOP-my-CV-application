import React, { useState } from 'react';
import GeneralInfo from './General';
import EducationInfo from './Education';
import PracticalInfo from './Practical';

function CVForm() {
    const [general, setGeneral] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [education, setEducation] = useState([
        {
            school: '',
            title: '',
            date: ''
        }
    ]);
    const [practical, setPractical] = useState({
        company: '',
        position: '',
        responsibilities: '',
        dateStart: '',
        dateEnd: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => setSubmitted(true);
    const handleEdit = () => setSubmitted(false); 

    const addEducation = () => {
        setEducation([...education, { school: '', title: '', date: '' }]);
    };

    const updateEducation = (index, updatedEntry) => {
        const updatedEducation = education.map((entry, i) =>
            i === index ? updatedEntry : entry
        );
        setEducation(updatedEducation);
    };
    
    const deleteEducation = (index) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    return (
        <div>
            <GeneralInfo data={general} setData={setGeneral} submitted={submitted} />
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index}>
                    <EducationInfo
                        data={edu}
                        setData={(updatedEntry) => updateEducation(index, updatedEntry)}
                        submitted={submitted}
                    />
                    {!submitted && (
                        <button onClick={() => deleteEducation(index)}>Delete</button>
                    )}
                </div>
            ))}
            {!submitted && <button onClick={addEducation}>Add Education</button>}     
            <PracticalInfo data={practical} setData={setPractical} submitted={submitted} />
            <div className="buttons">
                {submitted ? (
                    <button onClick={handleEdit}>Edit</button>
                ) : (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>
        </div>
    )
}

export default CVForm 