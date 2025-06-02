import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4 style={{ fontSize: "44px" }}>
                Câu chuyện <br /> cảm hứng
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  <b>Fixma & Marketing:</b> Bền Bỉ - Sáng Tạo - Dẫn Đầu <br />
                  Fixma Agency là đơn vị tiên phong dẫn đầu trong lĩnh vực
                  marketing, chuyên cung cấp các giải pháp toàn diện về Truyền
                  thông - Quảng cáo sáng tạo - Tư vấn Chiến lược - Định vị
                  thương hiệu - Tổ chức sự kiện.
                  <br /> Tại Fixma, chúng tôi tin rằng sự Linh hoạt
                  (Flexibility) và khả năng Đổi mới (Innovation) là chìa khóa để
                  tạo nên những chiến lược truyền thông Xuất sắc (Excellence).
                  Đội ngũ Fixma Agency luôn làm việc với sự Chuyên nghiệp
                  (Mastery) và tinh thần Trách nhiệm (Accountability), nhằm đảm
                  bảo mang lại kết quả tốt nhất cho mọi dự án.
                  <br /> Với sứ mệnh không ngừng đổi mới và cam kết đem lại hiệu
                  quả cao nhất, Fixma Agency sẵn sàng cùng bạn kiến tạo nên
                  những thành công vượt bậc, giúp thương hiệu của bạn tỏa sáng
                  và phát triển bền vững. Hãy để Fixma là người bạn đồng hành
                  trên hành trình chinh phục những đỉnh cao mới!
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
