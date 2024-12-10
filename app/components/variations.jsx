"use client"
import React from "react"
import chroma from "chroma-js"
import Maper from "./maper"
const Variations = ({ color }) => {
  const colores = Array.from({ length: 8 }, (_, i) => {
    return chroma(color)
      .darken(0.5 + i * 0.3)
      .hex()
  })

  const squares = [
    {
      letters: "Dd",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Arial font",
      weight: "Bold",
      color: colores[0],
    },
    {
      letters: "Ee",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Verdana font",
      weight: "Light",
      color: colores[1],
    },
    {
      letters: "Ff",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Georgia font",
      weight: "Italic",
      color: colores[2],
    },
    {
      letters: "Gg",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Courier New font",
      weight: "Bold Italic",
      color: colores[3],
    },
    {
      letters: "Hh",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Comic Sans MS font",
      weight: "Regular",
      color: colores[4],
    },
    {
      letters: "Ii",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Impact font",
      weight: "Black",
      color: colores[5],
    },
    {
      letters: "Jj",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Trebuchet MS font",
      weight: "Regular",
      color: colores[6],
    },
    {
      letters: "Kk",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Garamond font",
      weight: "Regular",
      color: colores[7],
    },
  ]
  return (
    <section className='middle_color'>
      <Maper squares={squares} />
    </section>
  )
}

export default Variations
