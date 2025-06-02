import React from "react";
import Split from "../Split";
import Link from "next/link";

const Services1 = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Best Features
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Our Services.
            </h3>
          </Split>
          <span className="tbg">Our Services</span>
        </div>
        <div className="row">
          <div
            className="col-lg-2 col-md-6 item-box bg-img wow fadeInLeft"
            data-wow-delay=".3s"
            style={{ backgroundImage: "url(/img/1.jpg)" }}
          >
            <h4 className="custom-font">Our Features</h4>
            <Link href="/about/about-light">
              <a className="btn-curve btn-bord btn-lit mt-40">
                <span>See All Services</span>
              </a>
            </Link>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <span className="icon pe-7s-paint-bucket"></span>
            <h6>
              Tư vấn chiến lược <br /> &amp; Định vị thương hiệu
            </h6>
            <p>
              Nhằm giúp doanh nghiệp tạo ra sự khác biệt và thu hút khách hàng
              mục tiêu hiệu quả hơn.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>
              Truyền thông <br /> &amp; Quảng cáo sáng tạo
            </h6>
            <p>
              Nhằm tăng cường nhận diện và giá trị của thương hiệu, tạo ra hiệu
              quả cho chiến dịch và thúc đẩy doanh số.
            </p>
          </div>
          <div
            className="col-lg-2 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".9s"
          >
            <span className="icon pe-7s-display1"></span>
            <h6>Digital Marketing</h6>
            <p>
              Tiếp cận và tương tác với khách hàng mục tiêu thông qua các nền
              tảng trực tuyến.
            </p>
          </div>
          <div
            className="col-lg-2 col-md-6 item-box wow fadeInLeft"
            data-wow-delay=".7s"
          >
            <span className="icon pe-7s-phone"></span>
            <h6>Software Solution</h6>
            <p>Xây dựng và phát triển giải pháp Ứng Dụng</p>
          </div>
        </div>
      </div>
      <div className="half-bg bottom"></div>
    </section>
  );
};

export default Services1;
