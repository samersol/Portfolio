export default function Portfolio() {
  return (
    <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="imgHandler">


    <div class="image">
		<img class="image__img" src="/img/kinderbunt.jpg" alt="Bricks"/>
		<div class="image__overlay image__overlay--blur">
			<div class="image__title">KinderBunt Teaching Website</div>
			<p class="image__description">
      Tutoring Website for a real Company, based in Dresden, showing all the info and services that the Company provided.</p>
      <h4 className="tech">Languages used:</h4>
      <div className="divBox"><p className="box">HTML</p>
          <p className="box">CSS</p>
          <p className="box">JavaScript</p>
        

          </div>
          <div className="divButton"><a href="https://github.com/samersol/ImageRecognition" target="_blank" rel="noreferrer" className="button">Source Code</a>
          <a href="https://kunterbuntwebsite-samersols-projects.vercel.app/" target="_blank" rel="noreferrer" className="button">Show Website</a>
          </div>
          

		</div>
	</div>


  <div className="line2"></div>
  <div class="image">
		<img class="image__img" src="/img/TechCart.jpg" alt="Bricks"/>
		<div class="image__overlay image__overlay--blur">
			<div class="image__title">TechCart Ecommerce</div>
			<p class="image__description">
      Complete Fullstack Shopping Tech website for all tech and entertainments costumes.</p>
      <h4 className="tech">Tech and Languages used:</h4>
      <div className="divBox"><p className="box">React</p>
          <p className="box">Node.js</p>
          <p className="box">Firebase</p>
          <p className="box">Stripe.js</p>
          <p className="box">TailwindCSS</p>
          <p className="box">TypeScript</p>

          </div>
          <div className="divButton"><a href="https://github.com/samersol/TechCart-EcommerceWebsite" target="_blank" rel="noreferrer" className="button">Source Code</a>
          </div>

		</div>
	</div>


  <div className="line2"></div>
    <div class="image">
		<img class="image__img" src="/img/food30-2.jpg" alt="Bricks"/>
		<div class="image__overlay image__overlay--blur">
			<div class="image__title">Food Recognition and
      Calories Estimation Web App</div>
			<p class="image__description">
      Implemented a deep learning model for food image recognition in Python and Java
      using Transfer Learning, TensorFlow and convolutional neural networks (CNN).</p>
      <h4 className="tech">Tech and Languages used:</h4>
      <div className="divBox"><p className="box">Python</p>
          <p className="box">TensorFlow</p>
          <p className="box">Flask</p>
          <p className="box">Java</p>
          <p className="box">HTML</p>
          <p className="box">CSS</p>

          </div>
          <div className="divButton"><a href="https://github.com/samersol/ImageRecognition" target="_blank" rel="noreferrer" className="button">Source Code</a>
          </div>

		</div>
	</div>
    <div className="line2"></div>
  <div class="image">
		<img class="image__img" src="/img/BookApp-2.jpg" alt="Bricks"/>
		<div class="image__overlay image__overlay--blur">
			<div class="image__title">Booking App</div>
			<p class="image__description">
      Booking App in an Airbnb clone app, you can present your own place for the customers. Also you can choose the place you liked, and booked it. I Used the MERN stack (MongoDB, Express.js,
        React, Node.js) and RESTful API.</p>
      <h4 className="tech">Tech and Languages used:</h4>
      <div className="divBox"><p className="box">Node.js</p>
          <p className="box">React</p>
          <p className="box">MongoDB</p>
          <p className="box">Express.js</p>
          <p className="box">JavaScript</p>
          <p className="box">HTML</p>
          <p className="box">CSS</p>

          </div>
          <div className="divButton"><a href="https://github.com/samersol/BookingApp" target="_blank" rel="noreferrer" className="button">Source Code</a>
          </div>

		</div>
	</div>
    </div>

    </section>
  );
}
