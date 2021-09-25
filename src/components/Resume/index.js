import React from 'react'
import ResumeFile from '../../assets/Developer Resume - Elias Saunders.pdf';

function Resume() {
   return (
      <div>
         <a href={ResumeFile} download>
            <button>Download Resume</button>
         </a>
      </div>
   )
}

export default Resume;