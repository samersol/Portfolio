import {useEffect, useState} from "react";

export default function Skills() {
  const [extraClasses,setExtraClasses] = useState('');
  return (
    <section id="skills">
      <div className="center">
        <h2>Skills</h2>
        <div className={extraClasses + "skills-container"}>
          <div className="skill-box"><img src="/img/js.png" alt=""/><span>Javascript</span></div>
          <div className="skill-box"><img src="/img/html-5.png" alt=""/><span>HTML</span></div>
          <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
          <div className="skill-box"><img src="/img/python.png" alt=""/><span>Python</span></div>
          <div className="skill-box"><img src="/img/mongoDB.png" alt=""/><span>MongoDB</span></div>
          <div className="skill-box"><img src="/img/Typescript.png" alt=""/><span>TypeScript</span></div>
          <div className="skill-box"><img src="/img/React.png" alt=""/><span>React</span></div>
          <div className="skill-box"><img src="/img/nodejs.png" alt=""/><span>Node.js</span></div>
          <div className="skill-box"><img src="/img/vuejs.png" alt=""/><span>vue.js</span></div>
          <div className="skill-box"><img src="/img/expressjs.png" alt=""/><span>Express.js</span></div>
          <div className="skill-box"><img src="/img/nextjs.png" alt=""/><span>Next.js</span></div>
          <div className="skill-box"><img src="/img/angular.png" alt=""/><span>Angular</span></div>


        </div>
      </div>
    </section>
  );
}