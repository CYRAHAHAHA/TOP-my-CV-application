import React from 'react';

export default function GeneralInfo({data, setData, submitted}) {
    if (submitted) {
        return (
            <section>
                <h2>General Info</h2>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
            </section>
        )
    }

    return (
        <section>
            <h2>General Info</h2>
            <input type="text" placeholder="Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <input type="tel" placeholder="Phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </section>
    )
}