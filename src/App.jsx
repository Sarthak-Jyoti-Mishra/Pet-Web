import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Describe from './components/Describe';
import Services from './components/Services';
import Services2 from './components/Services2';
import Team from './components/Team';
import Client from './components/Client';
import Footer from './components/Footer';
// App.jsx
import RecentPost from './components/RecentPost';



export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Describe 
      leftsideHead = 'As a veterinarian and lover of animals'
      leftsidePara= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, earum nihil laudantium quod maiores magnam .'
      rightsideImg = 'src\assets\Image (1).png'
      />


<Services /> 
      <Describe 
        leftsideHead="As a veterinarian and lover of animals" 
        leftsidePara="Lorem ipsum dolor sit amet consectetur dipisicing elit. Veniam, earum nihil laudantium quod maiores magnam . Majority Aleays Wins" 
        rightsideImg="src\assets\Image.png" 
        reverse={true} 
        
        
/>
<Services2 /> 

<Team />
<RecentPost />
<Client />
<Footer />
    </div>
  )
}

export default App;