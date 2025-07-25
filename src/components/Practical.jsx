import React from 'react';

export default function PracticalInfo({ data, setData, submitted }) {
    if (submitted) {
        return (
            <section>
                <h2>Practical Experience</h2>
                <p><strong>Company:</strong> {data.company}</p>
                <p><strong>Position:</strong> {data.position}</p>
                <p><strong>Responsibilities:</strong> {data.responsibilities}</p>
                <p><strong>Date Start:</strong> {data.dateStart}</p>
                <p><strong>Date End:</strong> {data.dateEnd}</p>
            </section>
        );
    }

    return (
        <section>
            <h2>Practical Experience</h2>
            <input type="text" placeholder="Company" value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} />
            <input type="text" placeholder="Position" value={data.position} onChange={(e) => setData({ ...data, position: e.target.value })} />
            <textarea placeholder="Responsibilities" value={data.responsibilities} onChange={(e) => setData({ ...data, responsibilities: e.target.value })}></textarea>
            <input type="date" placeholder="Date Start" value={data.dateStart} onChange={(e) => setData({ ...data, dateStart: e.target.value })} />
            <input type="date" placeholder="Date End" value={data.dateEnd} onChange={(e) => setData({ ...data, dateEnd: e.target.value })} />
        </section>
    );
}