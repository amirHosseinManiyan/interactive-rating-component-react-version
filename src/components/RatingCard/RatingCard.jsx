import { useState } from "react";
import RatingSection from "../RatingSection/RatingSection";
import ThankYouSection from "../ThankYouSection/ThankYouSection";

export default function RatingCard() {
   const [rate, setRate] = useState(0);
   const [showScore, setShowScore] = useState(false);

   function handleRatingButton(value) {
      setRate(value);
   }

   function handleShowScore(value) {
      setShowScore(value);
   }

   return (
      <main id="rating-card">
            {
               !showScore 
               ? ( 
                  <RatingSection 
                     rate={rate}
                     handleRate={handleRatingButton} 
                     showScore={handleShowScore}
                  />
               ) : (
                  <ThankYouSection  rate={rate} />
               )
            }
      </main>
   );
}