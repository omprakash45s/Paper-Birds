import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

// images
import newlogo from './../../images/newlogo.png';

// Custom CSS for inline styling
const headerStyles = {
  navbar: {
    padding: '15px 0',      // Increased vertical padding
    minHeight: '110px',     // Increased height to fit the big logo
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: '380px',         // Significantly increased (was 280px)
    maxWidth: '100%',       // Ensures it doesn't overflow on small screens
    height: 'auto',
    transition: 'all 0.3s ease',
    display: 'block'
  },
  mobileLogo: {
    width: '280px',         // Increased for mobile
    height: 'auto'
  },
  navItem: {
    padding: '12px 25px',   // Increased spacing between items
    fontSize: '18px',       // Increased font size
    fontWeight: '700',      // Bold font
    letterSpacing: '0.5px', // Adds a premium feel
    display: 'flex',
    alignItems: 'center'
  },
  // Added a specific style for links to ensure bold applies
  navLink: {
    fontWeight: '700',
    fontSize: '18px',
    textDecoration: 'none'
  }
};

class Header extends Component {
  componentDidMount() {
    // sidebar open/close logic
    const Navicon = document.querySelector('.navicon');
    const sidebarmenu = document.querySelector('.myNavbar');

    function toggleFunc() {
      sidebarmenu.classList.toggle('show');
      Navicon.classList.toggle('open');
    }
    
    if (Navicon) {
      Navicon.addEventListener('click', toggleFunc);
    }

    // Sidenav li open close logic
    const navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
    for (let y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener('click', function () { checkLi(this) });
    }
    
    function checkLi(current) {
      navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
      setTimeout(() => {
        current.classList.toggle('open');
      }, 100);
    }
  }

  render() {
    return (
      <Fragment>
        <header className="site-header header mo-left">
          {/* Main header */}
          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div 
              className="main-bar clearfix"
              style={headerStyles.navbar}
            >
              <div className="container clearfix">
                
                {/* Website logo - Desktop */}
                <div className="logo-header mostion">
                  <Link to={"./"} className="dez-page">
                    <img 
                      src={newlogo} 
                      alt="Logo" 
                      style={headerStyles.logo}
                    />
                  </Link>
                </div>
                
                {/* Nav toggle button */}
                <button 
                  className="navbar-toggler collapsed navicon justify-content-end" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarNavDropdown" 
                  aria-controls="navbarNavDropdown" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                  style={{ marginTop: '25px' }} // Align button with new larger height
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                
                {/* Main nav */}
                <div 
                  className="header-nav navbar-collapse collapse myNavbar justify-content-end" 
                  id="navbarNavDropdown"
                  style={{ padding: '0' }}
                >
                  {/* Website logo - Mobile */}
                  <div className="logo-header mostion d-lg-none">
                    <Link to={"./"} className="dez-page">
                      <img 
                        src={newlogo} 
                        alt="Logo" 
                        style={headerStyles.mobileLogo}
                      />
                    </Link>
                  </div>
                  
                  <ul className="nav navbar-nav">
                    <li style={headerStyles.navItem}>
                      <Link to={"./"} style={{ ...headerStyles.navLink, color: "#ff564b" }}>Home</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/about-1"} style={{ ...headerStyles.navLink, color: "#ffb02d" }}>About Us</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/classes"} style={{ ...headerStyles.navLink, color: "#cfd92f" }}>Classes</Link>
                    </li>
                    {/* Teachers link removed as requested */}
                    <li style={headerStyles.navItem}>
                      <Link to={"/gallery-masonary"} style={{ ...headerStyles.navLink, color: "#ffb02d" }}>Gallery</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/careers"} style={{ ...headerStyles.navLink, color: "#28a745" }}>Careers</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/contact-us"} style={{ ...headerStyles.navLink, color: "#473b79" }}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Main header END */}
        </header>
      </Fragment>
    );
  }
}

export default Header;