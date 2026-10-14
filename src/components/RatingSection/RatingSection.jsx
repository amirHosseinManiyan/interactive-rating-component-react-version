import { useState } from "react";
import iconStar from "../../assets/images/icon-star.svg";

export default function RatingSection({ rate, handleRate, showScore }) {
   const [errorRating, setErrorRating] = useState(false);

   function handleErrorRating(hasError) {
      setErrorRating(hasError);
   }

   return (
      <section id="rating-section">
         <div id="rating-starlogo">
            <img src={iconStar} />
         </div>

         <div id="rating-title">How did we do?</div>
         <div id="rating-desc">
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
         </div>

         <div id="rating-buttons">
            {
               [1, 2, 3, 4, 5].map(btn => (
                  <button
                     key={btn+10}
                     onClick={() => {
                        handleRate(btn);
                        handleErrorRating(false);
                     }}
                     className={
                        btn <= rate
                        ? "rate active-rate-btn"
                        : "rate"
                     }
                  >
                     {btn}
                  </button>
               ))
            }
         </div>

         <div id="submit-rate">
            <button 
               id="submit-btn"
               onClick={() => {
                  handleErrorRating(rate === 0);
                  if (rate !== 0) {
                     showScore(true)
                  }
               }}
            >
               SUBMIT
            </button>
            {
               errorRating &&
                  <div id="submit-error">Please select a rating! (minimum rate = 1)</div>
            }
         </div>
      </section>
   );
}