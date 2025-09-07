import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./App.css"
import Drawer from '@material-ui/core/Drawer';
import Home from "./pages/Home/Home"
import Documentation from "./pages/Documentation/Documentation"
import Demo from "./pages/Demo/Demo"
import Menu from "./assets/images/menu.svg"
import Cross from "./assets/images/cross.svg"

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [menu, setMenu] = React.useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div>
        <nav style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 100}}>
          <ul className="nav">
            <li className="logo">
              <Link to="/" className="links">KENSTATE <span style={{fontStyle: "italic"}}>DIGITAL</span> Tel/ WhatsApp +254724052417</Link>
            </li>
            <li>
              <Link to="/documentation" className="links">WHAT WE OFFER</Link>
            </li>
            <li>
              <Link to="/demo" className="links">PRODUCTS</Link>
            </li>
            
            <li style={{float: "right"}}>
              <a className="website-links" href="https://yarnpkg.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
            </li>
            <li style={{float: "right"}}>
              <a className="website-links" href="http://npmjs.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                Company Website
              </a>
            </li>
            <li style={{float: "right"}}>
              <a className="website-links" href="https://github.com/justin-chu/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                Contacts
              </a>
            </li>
          <button style={{marginRight: 10}} className="mobile-button" onClick={() => setMenu(true)}>
            <img alt="" src={Menu} height={22} />
          </button>
          </ul>
          
          <Drawer open={menu} anchor="right" onClose={() => setMenu(false)}>
            <div style={{width: 200, display: "flex", flexDirection: "column", padding: "40px 30px"}}>
              <button style={{marginTop: -20, marginLeft: -7, marginBottom: 20}} className="mobile-button" onClick={() => setMenu(false)}>
                <img alt="" src={Cross} height={20} />
              </button>
              <Link onClick={() => setMenu(false)} style={{fontSize: 20, marginBottom: 10}} to="/" className="links">Home</Link>
              <Link onClick={() => setMenu(false)} style={{fontSize: 20, marginBottom: 10}} to="/documentation" className="links">Documentation</Link>
              <Link onClick={() => setMenu(false)} style={{fontSize: 20}} to="/demo" className="links">Demo</Link>
              
              <div style={{borderTop: "1.5px solid #2e353b", margin: "20px 0"}} />
              <a onClick={() => setMenu(false)} style={{fontSize: 20, marginBottom: 10}} className="website-links" href="https://github.com/justin-chu/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                About Us
              </a>
              <a onClick={() => setMenu(false)} style={{fontSize: 20, marginBottom: 10}} className="website-links" href="http://npmjs.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                Company Website
              </a>
              <a onClick={() => setMenu(false)} style={{fontSize: 20, marginBottom: 10}} className="website-links" href="https://yarnpkg.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
                Contacts
              </a>
            </div>
          </Drawer>
        </nav>

        <Switch>
          <Route path="/documentation">
            <Documentation />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          <p className="footer-text">© 2025 Kenstate Allied. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}