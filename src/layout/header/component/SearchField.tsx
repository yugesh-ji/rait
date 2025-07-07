import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useContext } from 'react';

const SearchField = () => {
  const { toggleHeaderSerach, headerSerachOpen } = useContext(AppContext) as AppContextType;

  return (
    <>
      <div className={`header__search-3 white-bg transition-3 ${headerSerachOpen ? 'search-opened' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__search-3-inner text-center">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="header__search-3-btn">
                    <button type='button' className="header__search-3-btn-close" onClick={toggleHeaderSerach}>
                      <i className="fal fa-times"></i>
                    </button>
                  </div>
                  <div className="header__search-3-header">
                    <h3>Search Courses</h3>
                    <p style={{ marginTop: '5px', fontSize: '15px' }}>
                      Find your perfect course at Rashm Academy of Information Technology
                    </p>
                  </div>
                  <div className="header__search-3-categories">
                    <ul className="search-category">
                      <li><Link href="/course-grid">All Courses</Link></li>
                      <li><Link href="/course-grid">Diploma in Computer</Link></li>
                      <li><Link href="/course-grid">Tally + GST</Link></li>
                      <li><Link href="/course-grid">CCC</Link></li>
                      <li><Link href="/course-grid">Graphic Design</Link></li>
                      <li><Link href="/course-grid">Spoken English</Link></li>
                      <li><Link href="/course-grid">Typing (Hindi + English)</Link></li>
                    </ul>
                  </div>
                  <div className="header__search-3-input p-relative">
                    <input type="text" placeholder="Search for RAIT courses..." />
                    <button type="submit"><i className="far fa-search"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchField;
