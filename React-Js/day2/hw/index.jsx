const root = document.getElementById("root");

function Item(props) {
  return (
    <a href={props.href} className="item">
      <img src={props.src} />
      <p>{props.text}</p>
    </a>
  );
}

class Element extends React.Component {
  render() {
    return (
      <div className="listItem">
        <div className="row">
          <Item
            href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567"
            src="/day2/hw/img/áo.png"
            text="Thời trang nam"
          />
          <Item
            href="https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030"
            src="/day2/hw/img/iphone.png"
            text="Điện thoại & phụ kiện"
          />
          <Item
            href="https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-T%E1%BB%AD-cat.11036132"
            src="/day2/hw/img/tv.png"
            text="Thiết bị điện tử"
          />
          <Item
            href="https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030"
            src="/day2/hw/img/lap.png"
            text="Máy tính & laptop"
          />

          <Item
            href="https://shopee.vn/M%C3%A1y-T%C3%ADnh-Laptop-cat.11035954"
            src="/day2/hw/img/ĐồngHồ.png"
            text="Đồng Hồ"
          />
          <Item
            href="https://shopee.vn/M%C3%A1y-%E1%BA%A2nh-M%C3%A1y-Quay-Phim-cat.11036101"
            src="/day2/hw/img/máyẢnh.png"
            text="Máy ảnh & Máy Quay phim"
          />
          <Item
            href="https://shopee.vn/Gi%C3%A0y-D%C3%A9p-Nam-cat.11035801"
            src="/day2/hw/img/giày.png"
            text="Giày dép nam"
          />
          <Item
            href="https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-Gia-D%E1%BB%A5ng-cat.11036971"
            src="/day2/hw/img/ấm.png"
            text="Thiết bị gia dụng"
          />

          <Item
            href="https://shopee.vn/Th%E1%BB%83-Thao-Du-L%E1%BB%8Bch-cat.11035478"
            src="/day2/hw/img/Bóng.png"
            text="Thể Thao & Du Lịch"
          />
          <Item
            href="https://shopee.vn/%C3%94-T%C3%B4-Xe-M%C3%A1y-Xe-%C4%90%E1%BA%A1p-cat.11036793"
            src="/day2/hw/img/Xe.png"
            text="Ô tô & Xe Máy & Xe Đạp"
          />
        </div>
        <div className="row">
          <Item
            href="https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567"
            src="/day2/hw/img/áo.png"
            text="Thời trang nam"
          />
          <Item
            href="https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030"
            src="/day2/hw/img/iphone.png"
            text="Điện thoại & phụ kiện"
          />
          <Item
            href="https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-T%E1%BB%AD-cat.11036132"
            src="/day2/hw/img/tv.png"
            text="Thiết bị điện tử"
          />
          <Item
            href="https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030"
            src="/day2/hw/img/lap.png"
            text="Máy tính & laptop"
          />

          <Item
            href="https://shopee.vn/M%C3%A1y-T%C3%ADnh-Laptop-cat.11035954"
            src="/day2/hw/img/ĐồngHồ.png"
            text="Đồng Hồ"
          />
          <Item
            href="https://shopee.vn/M%C3%A1y-%E1%BA%A2nh-M%C3%A1y-Quay-Phim-cat.11036101"
            src="/day2/hw/img/máyẢnh.png"
            text="Máy ảnh & Máy Quay phim"
          />
          <Item
            href="https://shopee.vn/Gi%C3%A0y-D%C3%A9p-Nam-cat.11035801"
            src="/day2/hw/img/giày.png"
            text="Giày dép nam"
          />
          <Item
            href="https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-Gia-D%E1%BB%A5ng-cat.11036971"
            src="/day2/hw/img/ấm.png"
            text="Thiết bị gia dụng"
          />

          <Item
            href="https://shopee.vn/Th%E1%BB%83-Thao-Du-L%E1%BB%8Bch-cat.11035478"
            src="/day2/hw/img/Bóng.png"
            text="Thể Thao & Du Lịch"
          />
          <Item
            href="https://shopee.vn/Th%E1%BB%83-Thao-Du-L%E1%BB%8Bch-cat.11035478"
            src="/day2/hw/img/Xe.png"
            text="Ô tô & Xe Máy & Xe Đạp"
          />
        </div>
      </div>
    );
  }
}



function List() {
  return (
    <div className="list">
      <h2>DANH MỤC</h2>
      <Element />
    </div>
  );
}

ReactDOM.render(<List />, root);
