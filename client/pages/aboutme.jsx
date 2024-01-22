// aboutme.jsx
import './aboutme.css'


const AboutMe = () => {
  return (
    <div id="background" className="background-image">
    <div className='text-box'>
    <section className="flex-row about-me-section">
      <h1 id="About-Me">About Me</h1>
      <p className="about-me-text red">
        Hello! I'm a hardworking blue-collar worker who starts the day early.
        One of the biggest challenges I face is finding places that open up
        early enough for me to grab a bite or a cup of coffee before work.
      </p>
      <p className='about-me-text' >
        It's frustrating when many establishments open at 7 AM or later, and
        by that time, I'm already knee-deep in my work. I believe in the
        value of a good, early start to the day, and I'm on a mission to find
        places that share the same philosophy.
      </p>
      <p className='about-me-text blue'>
        Join me on this journey as I explore and discover businesses that
        open their doors early, catering to those of us who start our day
        before the sun comes up. Let's build a community that appreciates
        and supports early risers in the blue-collar workforce!
      </p>
      </section>
    </div>
    </div>
  );
};

export default AboutMe;
