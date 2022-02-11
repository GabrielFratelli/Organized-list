import React from "react"
import './index.scss'

export default function Footer() {
  const today = new Date() 
  return (
    <div className="Footer">
      <a href="https://github.com/GabrielFratelli/organized-list">{today.getFullYear()}. Gabriel Fratelli.</a>
    </div>
  )
  }