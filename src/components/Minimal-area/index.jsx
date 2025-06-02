/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/fixma.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Tầm nhìn
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Tầm nhìn của Fixma là trở thành một đối tác đáng tin cậy và
                  sáng tạo trong lĩnh vực marketing, mang đến giải pháp toàn
                  diện và hiệu quả cho mọi doanh nghiệp. Chúng tôi mong muốn
                  thúc đẩy sự phát triển bền vững của các thương hiệu, hướng đến
                  tương lai của một cộng đồng doanh nghiệp mạnh mẽ, nơi mọi công
                  ty, từ những doanh nghiệp mới thành lập đến những tập đoàn
                  lớn, đều có cơ hội tiếp cận những giải pháp marketing tiên
                  tiến nhất.
                </p>
              </Split>
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Sứ mệnh
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Chúng tôi không chỉ là một agency marketing thông thường, mà
                  còn là một đối tác đồng hành, hỗ trợ doanh nghiệp xây dựng và
                  phát triển thương hiệu của họ một cách đột phá. Sứ mệnh của
                  chúng tôi là mang lại giá trị thực sự cho khách hàng, từ việc
                  xây dựng chiến lược đến việc triển khai các chiến dịch, giúp
                  khách hàng nâng cao nhận thức thương hiệu và thành công trong
                  một môi trường kinh doanh ngày càng cạnh tranh.
                </p>
              </Split>
              {/* <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
