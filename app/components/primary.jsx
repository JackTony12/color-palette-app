"use client"
import React from "react"
import Maper from "./maper"
import chroma from "chroma-js"
import "./styles.css"
const Primary = ({ color }) => {
  const color1 = chroma(color).darken(1).hex()
  const color2 = chroma(color).darken(2).hex()
  const squares = [
    {
      letters: "Aa",
      text: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "System ui font",
      weight: "Regular",
      color: color,
    },
    {
      letters: "Bb",
      text: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Times new roman font",
      weight: "Regular",
      color: color1,
    },
    {
      letters: "Cc",
      text: "lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Franklin Gothic font",
      weight: "Medium",
      color: color2,
    },
  ]

  return (
    <>
      <section className='header_color'>
        <Maper squares={squares} />
      </section>
    </>
  )
}

export default Primary
