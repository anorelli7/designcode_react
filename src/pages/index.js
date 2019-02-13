import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeated(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React Apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Watch the video</Link>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />  
      </div>
    </div>

    <div className="Cards">
      <h2> 11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card 
          title="Sound Design"
          text="10 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card 
          title="Design System"
          text="9 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card 
          title="Swift for Designers"
          text="10 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient
      libraries to get your site/product online."
    />

    
    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          key={cell.title}
          title={cell.title} 
          image={cell.image}
        />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage



 