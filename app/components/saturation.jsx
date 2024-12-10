import React from "react"
import Maper from "./maper"
import chroma from "chroma-js"
const Saturation = ({ color }) => {
  const colores = chroma(color).saturate(1).hex()
  const colores1 = chroma(color).saturate(2).hex()
  const colores2 = chroma(color).saturate(3).hex()
  const colores3 = chroma(color).desaturate(1).hex()
  const colores4 = chroma(color).desaturate(2).hex()
  const colores5 = chroma(color).desaturate(3).hex()
  const squares = [
    {
      letters: "Uu",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Gill Sans font",
      weight: "Regular",
      color: colores,
    },
    {
      letters: "Vv",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Century Gothic font",
      weight: "Regular",
      color: colores1,
    },
    {
      letters: "Ww",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Rockwell font",
      weight: "Medium",
      color: colores2,
    },
  ]
  const squares1 = [
    {
      letters: "Xx",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Cambria font",
      weight: "Bold",
      color: colores3,
    },
    {
      letters: "Yy",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Trebuchet MS font",
      weight: "Regular",
      color: colores4,
    },
    {
      letters: "Zz",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut minima provident.",
      name: "Verdana font",
      weight: "Regular",
      color: colores5,
    },
  ]
  return (
    <>
      <section className='saturation'>
        <Maper squares={squares} />
      </section>
      <h2 className='subtitle'>Desaturation</h2>
      <section>
        <Maper squares={squares1} />
      </section>
      <footer>
        <a target='_blank' href='https://antonyleon.com'>
          AntonyLeon.com
        </a>
      </footer>
    </>
  )
}

export default Saturation
