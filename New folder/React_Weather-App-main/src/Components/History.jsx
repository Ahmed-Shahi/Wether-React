import React from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'
import { useState } from 'react';
export default function History() {
  const [data, setData] = useState(Object.values(localStorage));
  console.log(data)

  const clear = () => {
    alert('Are You Sure!!!')
    localStorage.clear()
    setData([])
  }

  return (
    <div style={{
      backgroundColor: 'black', color: 'white', width: '600px', height: '70vh', margin: 'auto', textAlign: 'center', borderRadius: '20px',
      marginTop: '90px', overflowY: 'auto'
    }}>
      <div>
        <br />

        <Link to={'/'}>
          <button id='searchbtn'>
            HOME
          </button>
        </Link>
        <br />
        <br />
        <Table data={data} />
        <br />
        <button id='searchbtn' onClick={clear} style={{ width: '200px' }}>CLEAR HISTORY</button>
      </div>
    </div>
  )
}
