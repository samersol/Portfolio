import { useEffect, useState } from "react";

export default function About() {
  const [extraClasses2,setExtraClasses2] = useState('');
  return (
    
    <section id="about" >
      <div className={extraClasses2 + "about-container"}>
      <div className="center">
        <h2>About</h2>
        <div className="line"></div>
        <p>Deeply passionate about self-improvement, lover of a good problems. I believe that the
larger the challenge, the more impactful the outcome. Adapting quickly to new situations
is a habit for me. Validating a strong work ethic, valuing social Interactions, and
appreciating the sense of community in the workplace are among of my top priorities.</p>
      </div>
      </div>
    </section>
  );
}