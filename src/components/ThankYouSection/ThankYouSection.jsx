import thankYouImg from "../../assets/images/illustration-thank-you.svg"

export default function ThankYouSection( {rate} ) {
   return (
      <section id="thankyou-section">
         <div id="thankyou-img">
            <img src={thankYouImg} />
         </div>
         <div id="selected-rating">You selected {rate} out of 5</div>
         <div id="thankyou-title">Thank you!</div>
         <div id="thankyou-desc">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>
      </section>
   );
}