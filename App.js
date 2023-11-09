
import React from 'react';
import './App.css'; 

// Functional component for CircleContainer
const CircleContainer = ({ heading, text }) => {
  return (
    <div className="circle-container">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

// Functional component for ContentContainer
const ContentContainer = ({ heading, text }) => {
  return (
    <div className="content-container">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

// Functional component for the main App
const App = () => {
  return (
    <div className="app">
      <div className="container-row">
        <CircleContainer heading="Q1" text="2024"/>
        <ContentContainer heading="Platform enhancements" 
        text="Continuously improve and enhance our
platform, adding new features and
functionality based on user feedback and
emerging trends in the crypto and NFT
markets." />
        <CircleContainer heading="Q2" text="2024"/>
        <ContentContainer heading="Regulatory compiance" text="Stay up-to-date on the latest regulations
and compliance requirements in the crypto
and NFT industries, and implement strict
measures to ensure compliance with all
relevant laws and regulations." />
      </div>
      <div className="centered-container">
      <CircleContainer heading="Q3" text="2024"/>

        <ContentContainer heading="Global expansion" text="Expand our operations and user base
globally, with a focus on emerging markets
and strategic partnerships with local players
in key regions around the world." />
      </div>
    </div>
  );
};

export default App;
