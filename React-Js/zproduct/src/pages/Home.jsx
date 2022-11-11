import { Link } from "react-router-dom";

const homeContent = [
  { id: 1, text: "Khám phá các vùng đất mới cùng Stravel" },
  { id: 2, text: "Những chuyến đi đang chờ đợi bạn" },
];

function Home(props) {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Mọi chuyến đi đều đáng giá</h3>

        {homeContent.map((homeContent) => {
          return <p key={homeContent.id}>{homeContent.text}</p>;
        })}

        <Link to="/packages" className="btn">
          Khám phá ngay
        </Link>
      </div>

      <div className="video-container">
        <video
          src="./videos/vid-1.mp4"
          id="video-slider"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
}



export default Home;
