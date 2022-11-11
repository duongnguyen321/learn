

const packagesHeading = [
  { id: 1, text: "Ư", className: "" },
  { id: 2, text: "U", className: "" },
  { id: 3, text: "", className: "space" },
  { id: 4, text: "Đ", className: "" },
  { id: 5, text: "Ã", className: "" },
  { id: 6, text: "I", className: "" },
];

const packagesStar = [
  { id: 1, className: "bi bi-star-fill" },
  { id: 2, className: "bi bi-star-fill" },
  { id: 3, className: "bi bi-star-fill" },
  { id: 4, className: "bi bi-star-fill" },
  { id: 5, className: "bi bi-star-half" },
];

const packagesBox = [
  {
    id: 1,
    src: "/images/Home/p-1.jpg",
    h3: " mumbai",
    p1: "Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại",
    p2: "chuyến đi dành cho gia đình 3N/2Đ",
    price: "30.000.000 ",
    spanPrice: "52.845.245",
    href: "/Mumbai",
  },
  {
    id: 2,
    src: "/images/Home/p-2.jpg",
    h3: " hawaii",
    p1: "hawaii-hòn đảo muôn màu và thiên đường của người chơi lướt ván",
    p2: "chuyến đi dành cho gia đình 5N/6Đ",
    price: "50.000.000 ",
    spanPrice: "65.124.756",
    href: "/Hawaii",
  },
  {
    id: 3,
    src: "/images/Home/p-3.jpg",
    h3: " sydney",
    p1: "Sydney-xứ sở chuột túi và nhà hát SYDNEY OPERA HOUSE",
    p2: "chuyến đi dành cho gia đình 2N/3Đ",
    price: "70.000.000 ",
    spanPrice: "43.354.657",
    href: "/Sydney",
  },
  {
    id: 4,
    src: "/images/Home/p-4.jpg",
    h3: " paris",
    p1: "Paris-Kinh đô thời trang và thành phố về đêm",
    p2: "chuyến đi dành cho gia đình 5N/6Đ",
    price: "30.000.000 ",
    spanPrice: "83.534.978",
    href: "/Paris",
  },
  {
    id: 5,
    src: "/images/Home/p-5.jpg",
    h3: " tokyo",
    p1: "tokyo-thủ đô có sư giao thoa hài hoà giữa truyền thống và hiện đại",
    p2: "Chuyến đi tự túc cho 1 người/7Ngày",
    price: "6.500.000 ",
    spanPrice: "10.000.000",
    href: "/Tokyo",
  },
  {
    id: 6,
    src: "/images/Home/p-6.jpg",
    h3: " Egypt",
    p1: "Egypt-vùng đất của Pharaohs và kỳ quan thế giới cổ đại",
    p2: "chuyến đi dành cho đoàn 7-10 người/7Ngày",
    price: "48.000.000 ",
    spanPrice: "54.346.456",
    href: "/Egypt",
  },
];

const PackagesPage = (props) => {
  return (
    <section style={{marginTop:70}} className="packages"  id="packages">
      <h1 className="heading">
        {packagesHeading.map((packagesHeading) => {
          return (
            <span
              key={packagesHeading.id}
              className={packagesHeading.className}
            >
              {packagesHeading.text}
            </span>
          );
        })}
      </h1>
      <div className="box-container">
        {packagesBox.map((packagesBox) => {
          return (
            <div className="box" key={packagesBox.id}>
              <img src={packagesBox.src}  alt={packagesBox.h3}/>
              <div className="content">
                <h3>
                  <i className="fas fa-map-marker-alt"></i>
                  {packagesBox.h3}
                </h3>
                <p>{packagesBox.p1}</p>
                <p>{packagesBox.p2}</p>
                <div className="stars">
                  {packagesStar.map((packagesStar) => {
                    return (
                      <i
                        key={packagesStar.id}
                        className={packagesStar.className}
                      ></i>
                    );
                  })}
                </div>
                <div className="price">
                  {packagesBox.price}
                  <span>{packagesBox.spanPrice}</span>
                </div>
                <a href={packagesBox.href} className="btn">
                  Đặt ngay
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PackagesPage;
