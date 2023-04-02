import React, {useEffect} from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from './data.js';
import './Faq.css';
import Question from './Question.js';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Faq() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <section id="faq">
      <div className="container faq">
        <div className="faq-title" data-aos="fade-up">
          <MdOutlineLibraryBooks size={30} color='orangered' />
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis totam optio nihil quis id temporibus corrupti maxime blanditiis facilis ea.</p>
        </div>

        <div className="questions">
          {
            questions && questions.map((question) => 
              <Question 
              key={question.id}
              title={question.title}
              answer={question.answer}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Faq;
