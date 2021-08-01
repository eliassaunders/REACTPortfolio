import React from 'react'
import ResumeFile from '../../assets/Resume (1).pdf';

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