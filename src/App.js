import React, { useState } from 'react';
import './App.css';
import Project from './components/Project';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const projects = [
    {
      id: 1,
      name: "My Game",
      image: "./assets/images/Project2.PNG",
      link: "https://mygameproject2.herokuapp.com",
      gitHub: "www.github.com"
    },
    {
      id: 2,
      name: "Run Buddy",
      image: "./assets/images/run-buddy.PNG",
      link: "https://eliassaunders.github.io/run-buddy/",
      gitHub: "www.github.com"
    },
    {
      id: 3,
      name: "Run Buddy",
      image: "./assets/images/run-buddy.PNG",
      link: "https://eliassaunders.github.io/run-buddy/",
      gitHub: "https://github.com/eliassaunders/TeamManager.git"
    },
    {
      id: 4,
      name: "Run Buddy",
      image: "./assets/images/run-buddy.PNG",
      link: "https://eliassaunders.github.io/run-buddy/",
      gitHub: "www.github.com"
    },
    {
      id: 5,
      name: "Run Buddy",
      image: "./assets/images/run-buddy.PNG",
      link: "https://eliassaunders.github.io/run-buddy/",
      gitHub: "www.github.com"
    },
    {
      id: 6,
      name: "Run Buddy",
      image: "./assets/images/run-buddy.PNG",
      link: "https://eliassaunders.github.io/run-buddy/",
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
        return <Home />;
    }
  }
  return (
    <div>
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
