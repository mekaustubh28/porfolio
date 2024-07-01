import React from 'react'
import "./project.css"
import portfolio from "../../../public/statics/portfolio.png"
import Huego from "../../../public/statics/huego.png"
import eumlet from "../../../public/statics/eumlet.png"
import fake from "../../../public/statics/fake.png"
import Footer from '../components/Footer/footer'
import Image from 'next/image'
import Link from 'next/link'


const Projects = [
  {
    name: 'Huego.ai',
    skills: ['AWS', 'FastAPI', 'Typescript', 'Docker', 'NextJs'],
    code: '',
    website: 'https://huego.ai/',
    image: Huego,
    desc: 'Client Project. an interactive platform that leverage power of LLM  by addressing medical needs of user comprehensively',
  },
  {
    name: 'Eumlet App',
    skills: ['NextJS', 'AWS', 'FastAPI', 'Docker', 'Web3', 'Blockchain'],
    code: '',
    website: 'https://app.eumlet.com/',
    image: eumlet,
    desc: 'Client Project(Eumlet) under Athena Consulting. cutting-edge web3 crypto-sharing platform.',
  },
  {
    name: 'Fake Medication Detection System',
    skills: ['Vite', 'Blockchain', 'Solidity'],
    code: 'https://github.com/mekaustubh28/fake_medication_system',
    website: '',
    image: fake,
    desc: 'Personal Project. Website helps to track medication from manufacturer to patient. This helps to reduce falacy done in medicial fields',
  },
  {
    name: 'Portfolio',
    skills: ['NextJS', 'Tailwind', 'Typescript', 'vercel'],
    code: 'https://github.com/mekaustubh28/portfolio',
    website: 'https://mekaustubh28.github.io/Edification/index.html',
    image: '/statics/portfolio.png',
    desc: 'My Portfolio website.',
  },
]


export default function Project() {

  return (
    <div className="project-container">
      <div className="backgroundProject" style={{ position: "fixed", zIndex: -9 }}></div>
      <div className="title-project-main">
        <div className="title-project">
          <h1>Selected Projects<span>.</span></h1>
        </div>
        <div className="projects">
          {Projects.map((value, index) => {
            return (
              // eslint-disable-next-line
              <div className="project" id={value.name} key={index}>
                <Image src={value.image} className={value.name} alt="projectImage" width={600} height={400}/>
                <div className="details">
                  <div className="projectName">
                    <h1 className='text-2xl'>{value.name}</h1>
                    {
                      value.skills.map((skill, i) => {
                        return (
                          <span key={i}>
                            <span>{skill}</span><span className="nextCircle"></span>
                          </span>)
                      })
                    }
                    <br></br>
                    <p className="desc">{value.desc}</p>
                    {value.code !== '' && <a href={value.code} className="link viewcode" target="_blank" rel="noreferrer">View Code</a>}<span className="extraspace"><br></br><br></br><br></br></span>
                    {value.website !== '' && <a href={value.website} className="link viewwebsite" target="_blank" rel="noreferrer">Visit Website</a>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}