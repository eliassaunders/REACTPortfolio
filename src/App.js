import React, { useState } from 'react';
import './App.css';
import Project from './components/Project';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const projects = [
    {
      id: 1,
      name: "Health Wealth",
      image: "./assets/images/healthwealth.PNG",
      link: "https://healthwealth.herokuapp.com/",
      gitHub: "https://github.com/Wsamuell/health-wealth"
    },
    {
      id: 2,
      name: "My Game",
      image: "./assets/images/Project2.PNG",
      link: "https://mygameproject2.herokuapp.com",
      gitHub: "https://github.com/Robert-Schwartz/myGAME"
    },
    {
      id: 3,
      name: "Run Buddy",
      image: "./assets/images/run-buddy.PNG",
      link: "https://eliassaunders.github.io/run-buddy/",
      gitHub: "https://github.com/eliassaunders/run-buddy"
    },
    {
      id: 4,
      name: "Team Manager",
      image: "./assets/images/run-buddy.PNG",
      link: "https://drive.google.com/file/d/1zGPAIPeBQH4eBKB4h6J2nrzD6KCRycE2/view",
      gitHub: "https://github.com/eliassaunders/TeamManager.git"
    },
    {
      id: 5,
      name: "MongoDB API",
      image: "./assets/images/Capture.PNG",
      link: "https://drive.google.com/file/d/1k37NKV0O1mZhZESm7-uxszaQw7G_ft99/view",
      gitHub: "https://github.com/eliassaunders/SocialMediaAPI"
    },
    {
      id: 6,
      name: "Make Me",
      image: "./assets/images/makeMe.PNG",
      link: "https://eliassaunders.github.io/Project-1/",
      gitHub: "www.github.com"
    }
  ]

  const [currentPage, handlePageChange] = useState('Home')

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Project':
        return <Project projects={projects}/>;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }
  return (
    <div className="contactDiv">
      <div className="d-flex align-items-center navBack">
        <div>
          <Header></Header>
        </div>
        <div className="mb-8">
          <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
      </div>
      <main>
        <div>
          {renderPage(currentPage)}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

export default App;
