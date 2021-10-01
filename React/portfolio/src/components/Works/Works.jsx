import {useState} from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./works.scss";

const sliderData = [
  {
    id: 1,
    title: "Work 1 title",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iste, nemo architecto ipsa necessitatibus magni",
    img: "https://source.unsplash.com/1600x900/?coding",
  },
  {
    id: 2,
    title: "Work 2 title",
    description:
      "Dolor sit amet consectetur adipisicing elit. Aliquid, iste, nemo architecto ipsa necessitatibus magni repudiandae totam nulla voluptas est ratione porro veritatis",
    img: "https://source.unsplash.com/1600x900/?laptop",
  },
  {
    id: 3,
    title: "Work 3 title",
    description:
      "Dolor sit amet consectetur adipisicing elit. Aliquid, iste, nemo architecto ipsa necessitatibus magni repudiandae totam nulla voluptas est ratione porro veritatis",
    img: "https://source.unsplash.com/1600x900/?website",
  },
];

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
    } else if (direction === "next") {
      setCurrentSlide(
        currentSlide < sliderData.length - 1 ? currentSlide + 1 : currentSlide
      );
    }
  };
  return (
    <section className="works" id="works">
      <div 
        className="works__slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
          {sliderData.map((dataItem) => (
          <div
            className="works__slider-inner"
            key={`${dataItem.title}_${dataItem.id}`}
          >
            <div className="works__slider-item">
              <div className="works__slider-left">
                <div className="works__slider-left-container">
                  <h2>{dataItem.title}</h2>
                  <p>{dataItem.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="works__slider-right">
                <img src={dataItem.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="works__slider-btn works__slider-btn-prev">
        <ArrowBackIosIcon className="works__slider-arrow" onClick={() => handleClick("prev")} />
      </button>
      <button className="works__slider-btn works__slider-btn-next">
        <ArrowForwardIosIcon className="works__slider-arrow" onClick={() => handleClick("next")} />
      </button>
    </section>
  )
}

export default Works;
