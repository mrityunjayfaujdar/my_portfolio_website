import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Mrityunjay Singh Faujdar <br />
        </SectionTitle>
        <SectionText>
        A Full Stack Developer with 3+ years of experience. Worked in both Front-end and Back-end technologies. Seeking to further improve MERN stack development skills. Skilled in using JavaScript, NodeJS, ReactJS and ExpressJS. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;