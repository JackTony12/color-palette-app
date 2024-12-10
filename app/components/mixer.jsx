"use client"
import React from "react"
import chroma from "chroma-js"
import Maper from "./maper"
import { useState } from "react"
const Mixer = ({ color }) => {
  const [mixer, setMixer] = useState(color)
  const colores = Array.from({ length: 9 }, (_, i) => {
    return chroma(color).mix(mixer).hex()
  })
  const darkenMixer = colores.map((col, i) => {
    return chroma(col)
      .darken(i * 0.3)
      .hex()
  })
  const squares = [
    {
      letters: "Ll",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Verdana font",
      weight: "Regular",
      color: darkenMixer[0],
    },
    {
      letters: "Mm",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Tahoma font",
      weight: "Medium",
      color: darkenMixer[1],
    },
    {
      letters: "Nn",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Georgia font",
      weight: "Bold",
      color: darkenMixer[2],
    },
    {
      letters: "Oo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Courier New font",
      weight: "Regular",
      color: darkenMixer[3],
    },
    {
      letters: "Pp",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Palatino font",
      weight: "Regular",
      color: darkenMixer[4],
    },
    {
      letters: "Qq",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Impact font",
      weight: "Regular",
      color: darkenMixer[5],
    },
    {
      letters: "Rr",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Comic Sans font",
      weight: "Medium",
      color: darkenMixer[6],
    },
    {
      letters: "Ss",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Times New Roman font",
      weight: "Bold",
      color: darkenMixer[7],
    },
    {
      letters: "Tt",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      name: "Lucida Sans font",
      weight: "Regular",
      color: darkenMixer[7],
    },
  ]

  return (
    <>
      <div>
        <h2 className='subtitle'>
          Mixer
          <p className='subparagraph'>
            Mix the current color with another color of your choice
          </p>
        </h2>
        <div className='color_input_button'>
          <input
            type='color'
            value={mixer}
            onChange={(e) => {
              setMixer(e.target.value)
            }}
          />
          <button
            onClick={() => {
              setMixer(chroma.random().hex())
            }}
          >
            Ramdom
          </button>
        </div>
      </div>
      <section className='footer_color'>
        <Maper squares={squares} />
      </section>
    </>
  )
}

export default Mixer
