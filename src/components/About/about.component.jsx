import React from "react";
import {
  AboutCard,
  AboutCardSubTitle,
  AboutCardTitle,
  AboutContainer,
  AboutContent,
  AboutSubTitle,
  AboutTitle,
  AboutWrapIcon,
  IconCalendar,
  IconFolder,
  IconPosition,
} from "./about.styles";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Better way to rent a luxury car</AboutTitle>

      <AboutSubTitle>
        Sed dui turpis adipiscing ut scelerisque fringilla sit. Malesuada
        suspendisse at velid <br />
        erat turpis pretium sed.
      </AboutSubTitle>

      <AboutContent>
        <AboutCard>
          <AboutWrapIcon>
            <IconPosition size='90' />
          </AboutWrapIcon>

          <AboutCardTitle>Choose Pickup Location</AboutCardTitle>
          <AboutCardSubTitle>
            Choose the location at the car <br /> to be delivered and the day
          </AboutCardSubTitle>
        </AboutCard>

        <AboutCard>
          <AboutWrapIcon>
            <IconCalendar size='90' />
          </AboutWrapIcon>

          <AboutCardTitle>Choose Your Car</AboutCardTitle>
          <AboutCardSubTitle>
            Select a car using search or <br /> catalog
          </AboutCardSubTitle>
        </AboutCard>

        <AboutCard>
          <AboutWrapIcon>
            <IconFolder size='90' />
          </AboutWrapIcon>

          <AboutCardTitle>Book Your Car</AboutCardTitle>
          <AboutCardSubTitle>
            Here your are! Your car is <br /> booked and waiting for you.
          </AboutCardSubTitle>
        </AboutCard>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
