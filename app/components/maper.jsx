"use client"
import React, { useState } from "react"
import chroma from "chroma-js"
const Maper = ({ squares }) => {
  const [copy, setCopy] = useState(null)
  const handleCopy = (index) => {
    setCopy(index)
    setTimeout(() => {
      setCopy(null)
    }, 2000)
  }
  return (
    <>
      {squares.map((square, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              navigator.clipboard.writeText(square.color)
              handleCopy(index)
            }}
            className={`color_squares_section ${square.letters} ${
              copy === index ? "copy" : ""
            }`}
            style={{ backgroundColor: square.color }}
          >
            <div className='color_lorem'>
              <h2>{square.letters}</h2>
              <p>{square.text}</p>
            </div>
            <div className='color_text'>
              <div>
                <p>{square.name}</p>
                <h3>{square.weight}</h3>
              </div>
              <div className='color_id_container'>
                <span className='color_id'>Color hex</span>
                <p>{square.color}</p>
                <p>{chroma(square.color).css()}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Maper
