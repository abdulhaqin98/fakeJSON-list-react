import React from 'react'
import Rainbow from '../components/hoc/Rainbow'

const About = () => {
   return (
      <div className="container">
         <h2 className="center">About</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur suscipit quaerat quas natus magni delectus quisquam ipsam vitae officia dolorum.</p>
      </div>
   )
}

export default Rainbow(About)
