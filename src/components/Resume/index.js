import React from 'react'
import ResumeFile from '../../assets/Developer Resume - Elias Saunders (1).pdf';
import certFile from '../../assets/FullstackCertification.pdf'

function Resume() {
   return (
      <div className='buttonDiv'>
         <a href={ResumeFile} download className='button'>
            <button>Download Resume</button>
         </a>
         <a href={certFile} download>
            <button>Download Certfication</button>
         </a>
      </div>
   )
}

export default Resume;