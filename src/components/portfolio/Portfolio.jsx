import React from 'react'
import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  featuredPortfolio,
} from "../../data";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [isMobile] = useState(window.innerWidth <= 768); // Set a threshold for mobile screens

  useEffect(() => {
        setData(featuredPortfolio);
    }
  , []);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <br />
      <h2>Showhub</h2>
      {data.map((d) => (
      <div className="container">
      <div className="title">
      </div>
          <div className="item">
          <h3>{d.title}</h3>
          <p>click here to learn more</p>
          <a href={d.url}>
            <img
              src={d.img}
              alt=""
            />
            </a>
          </div>
          <div className="goo">
          <p>{isMobile ? d.desc : d.webDesc}</p><br/>
            <p>{d.tech}</p>
          </div>
      </div>
      ))}
    </div>
  );
}