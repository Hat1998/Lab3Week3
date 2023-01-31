import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Programmers from './components/Programmers'
import Companies from './components/Companies'
import Services from './components/Services'


function App() {
 
  return (
    <div className="App">
      <Programmers name='Salem' ProgrammingLanguages= {['Java',', C++']} workingExperienceYears = {4} companyName="Aramco"/>
      <Programmers name='Ali' ProgrammingLanguages= {['Java',', python']} workingExperienceYears = {9} companyName="Cisco"/>
      <Programmers name='Osama' ProgrammingLanguages= {['Kotlin',', php']} workingExperienceYears = {2} companyName="STC"/>

      <Companies companyName='Sabic'  employers={1000} establishedAt ={1990}/>
      <Companies companyName='SDA'  employers={2000} establishedAt ={1980}/>
      <Companies companyName='Alem'  employers={5000} establishedAt ={2000}/>
      


    </div>
  )
}

export default App
