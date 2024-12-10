"use client"
import React from "react"
import Primary from "./primary"
import Mixer from "./mixer"
import { useState } from "react"
import Variations from "./variations"
import Saturation from "./saturation"
import chroma from "chroma-js"
const ColorApp = () => {
  const [color, setColor] = useState("#ee8190")
  const handleColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <>
      <div className='input_container'>
        <div>
          <h2 className='subtitle'>
            Color palette App
            <p className='subparagraph'>
              To copy, click on the square of the color you want
            </p>
          </h2>
        </div>
        <div>
          <h2>Set the color here</h2>
          <div className='color_input_button'>
            <input type='color' value={color} onChange={handleColor} />
            <button
              onClick={() => {
                setColor(chroma.random().hex())
              }}
            >
              Ramdom
            </button>
          </div>
        </div>
      </div>
      <Primary color={color} />
      <h2 className='subtitle'>More color variations</h2>
      <Variations color={color} />
      <Mixer color={color} />
      <h2 className='subtitle'>Saturation</h2>
      <Saturation color={color} />
    </>
  )
}

export default ColorApp
