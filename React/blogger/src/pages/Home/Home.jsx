import { Promo, Posts, Sidebar } from "../../components/index";

function Home() {
  return (
    <>
      <Promo />
      <div className="home">
        <div className="container">
          <div className="home__inner">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;