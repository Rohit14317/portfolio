import React from 'react'
import '../App.css'
import image from '../assets/image2.jpg'

const About = () => {
  return (
    <div className="container">
      <div>
        <p>I’m a second-year Electrical and Computer Engineering (ECE) student with a passion for exploring the intersection of technology and innovation. As an aspiring engineer, I’m currently diving deep into the core principles of electronics, circuit design, programming, and system architecture.

I'm always eager to learn and apply new concepts in real-world scenarios, whether through hands-on projects, internships, or collaborations. With a keen interest in problem-solving, I aim to contribute to developing cutting-edge solutions that can make a positive impact in fields like automation, communication, or AI.

Outside of academics.</p>
        <p>I’m always looking for opportunities to expand my skills and broaden my understanding of the tech industry, and I enjoy connecting with like-minded individuals who share my enthusiasm for technology and engineering </p>
        <p>I’m constantly looking for ways to apply what I learn in the classroom to real-world projects, whether through personal side projects, collaborations, or internships. I love problem-solving and enjoy the process of turning complex challenges into innovative solutions. Beyond just studying, I’m passionate about staying up to date with emerging trends in tech and connecting with others who share similar interests.

</p>
<p>Outside of academics, you’ll often find me tinkering with new gadgets, attending tech meetups, or exploring coding tutorials. I’m always open to new opportunities and experiences that help me grow as an engineer and individual.</p>
      </div>
      <div className="img2"><img className="img2" src={image} alt="" /></div>
    </div>
  )
}

export default About;