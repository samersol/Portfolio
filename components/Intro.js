import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div class="contactInfo">
        <p>I&apos;m <h1>Samer<br/> Sulaiman</h1><br /></p>
        <div class="typewriter">
       <span></span>    
      </div>
        <a href="#contact">Contact me</a>
      </div>

      

      <div class="container">
      <div class="avatar">
			<img src="/img/me2.png" alt="Skytsunami" />
	    </div>
      </div>

      
    </section>
  );
}