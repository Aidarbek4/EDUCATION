import "./testimonials.scss";

const data = [
  {
    id: 1,
    name: "Ivanov Ivan",
    title: "Happy Customer",
    img: "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },
  {
    id: 2,
    name: "Kunfu Panda",
    title: "Co-Founder of AWS",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    featured: true,
  },
  {
    id: 3,
    name: "Vsaya Pupkin",
    title: "CEO of Apple",
    img: "https://images.pexels.com/photos/878846/pexels-photo-878846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials__container">
        {data.map((testimonial) => (
          <div
            className={
              testimonial.featured
                ? "testimonials__card testimonials__card--featured"
                : "testimonials__card"
            }
            key={`${testimonial.title}_${testimonial.id}`}
          >
            <div className="testimonials__top">
              <img src={testimonial.img} alt="" />
            </div>
            <div className="testimonials__center">
              <p>{testimonial.desc}</p>
            </div>
            <div className="testimonials__bottom">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;