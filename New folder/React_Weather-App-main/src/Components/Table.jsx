import React from 'react'

export default function Table({ data }) {
    return (
        <div>
            <table style={{ margin: 'auto', borderWidth: '2px', borderColor: 'white', borderStyle: 'solid' }}>
                <thead>
                    <tr>
                        <th style={{ border: '2px solid white' }}>City Name</th>
                        <th style={{ border: '2px solid white' }}>Temperature</th>
                        <th style={{ border: '2px solid white' }}>Date</th>
                        <th style={{ border: '2px solid white' }}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '2px solid white' }}>{item.split(',')[0]}</td>
                            <td style={{ border: '2px solid white' }}>{item.split(',')[1]}</td>
                            <td style={{ border: '2px solid white' }}>{item.split(',')[2]}</td>
                            <td style={{ border: '2px solid white' }}>{item.split(',')[3]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
