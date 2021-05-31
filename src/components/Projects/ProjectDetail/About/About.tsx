import React from "react";
import TechnoCard from "../../../../common/cards/technoCard/TechnoCard";

const About = () => {
  return (
    <div className="projectDetails">
      <h5>
        Demo : <u>https://podcast-app-web.com</u>
      </h5>
      <h5>
        Repository : <u>https://git-lab.com/hmathieutsialonina/podcast-app</u>
      </h5>
      <h5>Application descriptions : </h5>
      <p style={{maxWidth: '800px', textAlign: 'justify'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        illum, asperiores sapiente pariatur incidunt ab ut tempora maiores error
        quam illo soluta expedita dolorem delectus impedit dolorum aliquam
        perspiciatis deserunt?
      </p>
      <h5>Animation : All animation is made with after effect and lottie</h5>
      <h5>
        Functionnality :
        <span className="functionnalityCard purpleBg">Multi Language</span>
        <span className="functionnalityCard blueBg">Toogle thèmes</span>
        <span className="functionnalityCard greenBg">Audio Player</span>
      </h5>
      <h5>Technos : </h5>
      <div className="technoGrid">
        <TechnoCard text="React" />
        <TechnoCard text="NodeJS" />
        <TechnoCard text="Graphql" />
        <TechnoCard text="Apollo" />
        <TechnoCard text="Prisma" />
        <TechnoCard text="Typescript" />
      </div>
    </div>
  );
};

export default About;
