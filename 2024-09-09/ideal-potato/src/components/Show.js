import React from 'react'

const Show = ({ show, toggleShow }) => {
  return (
    <>
        <h2>Show</h2>
        {show ? <p>Showing</p> : <p>Not showing</p>}
        {show && <p>Showing again</p>}
        <button onClick={toggleShow}>Toggle show</button>
    </>
  )
}

export default Show