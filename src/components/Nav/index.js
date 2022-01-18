import React, { useState } from 'react';

const Nav = (props) => {

  const tabs = ['About', 'Project', 'Contact', 'Resume and Certification']
  return (
    <section className="navbar">
    {tabs.map(tab => (
      <h2 className="nav-item navColor text" key={tab}>
        <a
          href={'#' + tab.toLowerCase()}
          // Whenever a tab is clicked on,
          // the current page is set through the handlePageChange props.
          onClick={() => props.handlePageChange(tab)}
          className={
            props.currentPage === tab ? 'nav-link active' : 'nav-link'
          }
        >
          <span className="spans">{tab}</span>
        </a>
      </h2>
    ))}
  </section>
  );
}

export default Nav;