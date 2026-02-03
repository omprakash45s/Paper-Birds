import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

// images
import newlogo from './../../images/newlogo.png';

// Custom CSS for inline styling
const headerStyles = {
	navbar: {
		padding: '3px 0', // Further reduced padding
		minHeight: '60px' // Reduced navbar height from 70px to 60px
	},
	logo: {
		width: '280px', // Increased from 220px
		height: 'auto',
		transition: 'all 0.3s ease'
	},
	mobileLogo: {
		width: '240px', // Increased from 180px
		height: 'auto'
	},
	navItem: {
		padding: '10px 18px', // Increased padding for nav items
		fontSize: '16px' // Increased font size from 15px to 16px
	}
};

class Header extends Component {
  componentDidMount() {
    // sidebar open/close
    const Navicon = document.querySelector('.navicon');
    const sidebarmenu = document.querySelector('.myNavbar');

    function toggleFunc() {
      sidebarmenu.classList.toggle('show');
      Navicon.classList.toggle('open');
    }
    
    if (Navicon) {
      Navicon.addEventListener('click', toggleFunc);
    }

    // Sidenav li open close
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
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                
                {/* Main nav */}
                <div 
                  className="header-nav navbar-collapse collapse myNavbar justify-content-end" 
                  id="navbarNavDropdown"
                  style={{ padding: '5px 0' }} // Reduced inner padding
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
                      <Link to={"./"} style={{ color: "#ff564b" }}>Home</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/about-1"} style={{ color: "#ffb02d" }}>About Us</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/classes"} style={{ color: "#cfd92f" }}>Classes</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/teachers"} style={{ color: "#00bbc0" }}>Teachers</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/gallery-masonary"} style={{ color: "#ffb02d" }}>Gallery</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/careers"} style={{ color: "#28a745" }}>Careers</Link>
                    </li>
                    <li style={headerStyles.navItem}>
                      <Link to={"/contact-us"} style={{ color: "#473b79" }}>Contact Us</Link>
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