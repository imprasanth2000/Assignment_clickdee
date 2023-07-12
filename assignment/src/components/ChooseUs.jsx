import "../Styles/ChooseUs.css";
import target from "../Styles/Images/target.jpg";
import quality from "../Styles/Images/quality.jpg";
import support from "../Styles/Images/support.jpg";
import custom from "../Styles/Images/customized.jpg";
import trophies from "../Styles/Images/trophies.jpg";

function ChooseUs() {
  return (
    <div className="chooseUs-container">

      <div className="chooseitem-intro">
        <p id="intro-heading">
          Why The Industry <br /> Chooses Clickdee?
        </p>
        <div>
          <p id="intro-content">
            We understand performance marketing from every angle and <br />
            every stage of the funnel. Our clients trust that we know what
            <br />
            metrics move their business towards growth. Our publisher and <br />
            affiliate partners know that we make maximum revenue and <br />
            ROAS a main focus when growing our partnerships.
          </p>
        </div>
      </div>


      <div className="chooseitem-group1">
        <div class="images" id="images-target">
            
        </div>
        <p className="target-before">
          Choose Your <br />
          Local Targeting
        </p>
        <div className="target-after">Our targeted and tracked calls are <br/>tailored to your business needs,<br/> audience, and geolocation.</div>
      </div>


      <div className="chooseitem-group2">
        <div className="images" id="images-tracking">
        
        </div>
        <p className="track-before">
          Track Your <br />
          Conversion
        </p>
        <div className="track-after">
        We use the most progressive<br/> tracking and analytics technology<br/> to ensure that every call can be<br/> tracked and evaluated
        </div>
      </div>


      <div className="chooseitem"></div>

      <div className="chooseitem-group1">
        <div className="images" id="images-custom">
        
        </div>
        <p className="custom-before">
          Customized
          <br />
          Campaigns
        </p>
        <div className="custom-after">
       <p>Audiences, budgets, and goals: you</p>
       <p>decide the criteria for your digital</p>
       <p>ad campaign, and we’ll do the rest</p>
        </div>
      </div>
      <div className="chooseitem-group2">
        <div className="images" id="images-support">
        
        </div>
        <div className="support-before">
          Get Dedicated
          <br />
          Support Team
        </div>
        <div className="support-after">
          <p>We constantly monitor quality</p>
          <p>control! Our affiliate network of</p>
          <p>publishers are digital ad experts</p>
          <p>that have been vetted.</p>
        </div>
      </div>
      <div className="chooseitem-group1">
        <div className="images" id="images-quality">
       
        </div>
        <p className="quality-before">
          Quality
          <br />
          Assurance
        </p>
        <div className="quality-after">
          <p>We constantly monitor quality</p>
          <p>control! Our affiliate network of</p>
          <p>publishers are digital ad experts</p>
          <p>that have been vetted.</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
