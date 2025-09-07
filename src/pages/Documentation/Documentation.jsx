import React from "react";
import "./Documentation.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const marqueeProps = {
 
}

const PropListItem = (name) => (
  <li style={{marginBottom: 10, marginLeft: 36}}>
    <a href={`#${name}`} style={{fontWeight: "normal"}} className="menu-link">
      {name}
    </a>
  </li>
)

const PropDetails = ({name, description, type, defaultValue, required}) => (
  <>

  </>
)

function Documentation () {
  return (
    <div style={{display: "flex", marginTop: 30, marginBottom: -60, justifyContent: "center"}}>
      <div className="side-menu">
        <ul style={{display: "flex", flexDirection: "column", paddingTop: 70}}>
          <li style={{marginBottom: 10}}>
            <a href="#installation" className="menu-link">
             
            </a>
          </li>
          <li style={{marginBottom: 10}}>
            <a href="#usage" className="menu-link">
              
            </a>
          </li>
          <li style={{marginBottom: 10}}>
            <a href="#props" className="menu-link">
              Props
            </a>
          </li>
          {Object.keys(marqueeProps).map(PropListItem)}
        </ul>
      </div>

      <div className="content">
        <a className="hash-link" id="installation" href="/documentation/#installation">
          <h1></h1>
        </a>
        <p><code></code></p>
        <SyntaxHighlighter language="shell" style={vs}>
        </SyntaxHighlighter>
        <p> <code></code>, </p>
        <SyntaxHighlighter language="shell" style={vs}>
          
        </SyntaxHighlighter>

        <a className="hash-link" id="usage" href="/documentation/#usage">
          <h1></h1>
        </a>
        <p></p>
        <SyntaxHighlighter language="javascript|html" style={vs}>
          
        </SyntaxHighlighter>
        <p> <code>{"<Marquee>"}</code> </p>
        <SyntaxHighlighter language="htmlbars" style={vs}>
          {`<Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>`}
        </SyntaxHighlighter>
        <p></p>
        <SyntaxHighlighter language="javascript | htmlbars" style={vs}>
          {`import React from "react";
import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const App = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;`}
        </SyntaxHighlighter>
        <a className="hash-link" id="props" href="/documentation/#props">
          <h1>Props</h1>
        </a>
        {Object.entries(marqueeProps).map(([name, props]) => (
          <PropDetails key={name} name={name} {...props} />
        ))}
      </div>
    </div>
  )
}

export default Documentation;
