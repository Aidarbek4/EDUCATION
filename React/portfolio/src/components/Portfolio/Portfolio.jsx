import { useState, useEffect} from "react";
import {PortfolioCats} from "../index";
import {featured, webApps, reactApps} from "../../db";
import "./portfolio.scss";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    if(selected === "featured") {
      setData(featured);
    } else if(selected === "web apps") {
      setData(webApps);
    } else if(selected === "react apps") {
      setData(reactApps);
    } else {
      setData(featured)
    }
  }, [selected]);
  const portfolioCats = [
    {
      id: 1,
      title: "Featured",
      category: "featured",
    },
    {
      id: 2,
      title: "WebApps",
      category: "web apps",
    },
    {
      id: 3,
      title: "ReactApps",
      category: "react apps",
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <ul className="portfolio__cats">
        {portfolioCats.map((item) => (
          <PortfolioCats 
            item={item.title}
            key={`${item.title}_${item.id}`}
            active={selected === item.category}
            setSelected={setSelected}
            category={item.category}
          />
        ))}
      </ul>

      <div className="portfolio__list">
        {data.map((dataItem) => (
          <div className="portfolio__item">
            <img src={dataItem.img} alt="" />
            <h3>{dataItem.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
