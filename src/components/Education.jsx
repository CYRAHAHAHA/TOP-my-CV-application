import React from 'react';

export default function EducationInfo({ data, setData, submitted }) {
    if (submitted) {
        return (
            <section>
                <p><strong>School:</strong> {data.school}</p>
                <p><strong>Title of Study:</strong> {data.title}</p>
                <p><strong>Date of Study:</strong> {data.date}</p>   
            </section>
        )
    }

    return (
        <section>
            <input type="text" placeholder="School" value={data.school} onChange={(e) => setData({ ...data, school: e.target.value })} />
            <input type="text" placeholder="Title of Study" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
            <input type="text" placeholder="Date of Study" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} />
        </section>

    )
}