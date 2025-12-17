// jsx : javascript syntax xml/exteatible
// jsx : easy and use
// jsx: html read and write
// jsx vs js : jsx little 0.2s
// return html code : {}


import React from 'react'

function Hello() {

    console.log("hello this jsx file")
    let name = "sujal jadav"
    console.log(name)

    let person = {
        name : "het",
        age : 23
    }

    let htmldata = <ul>
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>Help</li>
    </ul>

  return (
    <div>
      <h1>hello this jsx compoenent</h1>
      <h2>Hello name : {name}</h2>
        {/* 
        {
            console.log("shj")
        } */}

        <h2>Hello name : {person.name}</h2>

        {htmldata}

        <h2>{10+20}</h2>

    </div>
  )
}

export default Hello
