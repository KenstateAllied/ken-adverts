import React from "react";
import "./Home.css";
import { SliderItems } from './SliderItems';
import { WelcomeText } from './WelcomeText';
import GitHub from "../../assets/images/github.png";
import npm from "../../assets/images/npm.png";
import Yarn from "../../assets/images/yarn.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="Home">
      <div className="introduction">
        <Marquee gradient speed={40} gradientColor={[248, 251, 253]} gradientWidth="10%" style={{marginTop: 100}}>
          {WelcomeText.map((item, index) => {
            if(index % 2 === 0)
              return <h1 className="welcome-text" style={{color: "#444d54"}} key={index}>{item.text}</h1>;
            else
              return <h1 className="welcome-text" style={{color: "#89939c"}} key={index}>{item.text}</h1>;
          })}
        </Marquee>
        <h1 className="title">Digital <span style={{fontStyle: "italic"}}>@</span> Your Service</h1>
        <p className="subtitle">Full Stack Software Development using cutting edge technologies.</p>
        <div className="button-container">
          <a className="button" href="https://kenstate.co.ke" target="_blank" rel="noopener noreferrer">
            <img height={40} src={GitHub} alt="GitHub" />
          </a>
          <a className="button" href="http://graphics.kenstate.co.ke" target="_blank" rel="noopener noreferrer">
            <img height={40} src={npm} alt="npm" />
          </a>
          <a className="button" href="https://freelance.kenstate.co.ke" target="_blank" rel="noopener noreferrer">
            <img height={40} src={Yarn} alt="Yarn" />
          </a>
        </div>
        <p className="sponsor-text">Adverts & Promotions:</p>
        <Marquee gradient speed={40} gradientColor={[248, 251, 253]} gradientWidth="10%" style={{marginTop: 20}}>
          {SliderItems.map((item, index) => {
            return (
            <img src={require(`../../assets/images/${item.src}`)}
              height={200}
              style={{margin: "0 40px"}}
              alt={item.alt} key={index} />
            );
          })}
        </Marquee>
      </div>

      <div className="examples">
        <h1 className="header">Examples</h1>
        <Marquee speed={20} gradient={false} style={{marginTop: 50}}>
          <div className="card">
            <img alt="" src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Sell a product now	Search Ads (SEM/PPC), Shopping Ads, Remarketing
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://www.pngarts.com/files/5/Avatar-Face-Transparent.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Generate leads	Search Ads, Social Media Ads (Lead Gen objective), LinkedIn Ads
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Build brand awareness	Video Ads (YouTube), Display Ads, Social Media Ads (Awareness)
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Drive website traffic	Search Ads, Social Media Ads (Traffic objective), Native Ads
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
             Re-engage past visitors	Remarketing/Retargeting Ads (Display & Social)
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
             Promote content	Native Ads, Social Media Ads (Engagement objective)
            </p>
          </div>
        </Marquee>
        <Marquee direction="right" gradient={false} style={{marginTop: 80}}>
            <p style={{width: 700, fontSize: 20}}>
              Marketing Funnel: See an Ad, Search the Product/ Service, Conversion & Sale
            </p>
        </Marquee>
        <Marquee speed={300} gradient={false} style={{marginTop: 80}}>
            <h1 style={{width: 700, fontStyle: "italic", fontSize: 40, margin: 0}}>CALL US NOW</h1>
            <h1 style={{width: 700, fontStyle: "italic", fontSize: 40, margin: 0}}>Tel / WhatsApp</h1>
            <h1 style={{width: 700, fontStyle: "italic", fontSize: 40, margin: 0}}>+ 254 724 052 417</h1>
        </Marquee>
        <Marquee speed={50} gradient={false} pauseOnHover={true} style={{marginTop: 80}}>
            <h1 style={{width: 700, fontSize: 30, margin: 0}}>We will work with you to improve product sales</h1>
        </Marquee>
        <Marquee speed={70} gradient={false} pauseOnClick={true} style={{marginTop: 80}}>
            <h1 style={{width: 700, fontSize: 30, margin: 0}}>We will work with you to improve service sales</h1>
        </Marquee>
        <Marquee speed={70} gradient gradientColor={[255, 0, 0]} gradientWidth="40%" style={{marginTop: 80}}>
            <h1 style={{width: 700, fontSize: 30, margin: 0}}>Marketing Experts</h1>
        </Marquee>
      </div>
      <div className="conclusion">
        <h1 className="header">Interested? Become our valued Client</h1>
        <p className="conclusion-text">View the{" "}
          <Link to="/documentation" className="conclusion-link">Works</Link>{" "}
          Call us at contacts above{" "}
          <Link to="/demo" className="conclusion-link">Products</Link>!
        </p>
      </div>
    </div>
  )
}

export default Home;