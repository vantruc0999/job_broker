import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import PayPalButton from "./PaypalCheckout";
import axios from "axios";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
function Checkout() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [packageall, setPackageall] = useState("");
  

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/recruiter/package").then((res) => {
      setPackageall(res.data);
      console.log(res);
    });
  }, []);
console.log(packageall);
  const renPackage = () => {
    if (Object.keys(packageall).length > 0) {
      return Object.keys(packageall).map((key, item) => {
        return (
          <>
            <SwiperSlide key={item}>
              <div className="package_card" >
                <div className="card_content">
                  <div className="card_image">
                    <h1>{packageall[key]["price"]} USD</h1>
                  </div>
                  <div class="card_name">
                    <h4>{packageall[key]["package_name"]} Plan</h4>
                  </div>
                  <div className="card_title">
                    <p>{packageall[key]["package_description"]}</p>
                  </div>
                  <div className="card_time">
                    <p>{packageall[key]["exp_time"]} month</p>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <PayPalButton
                      product={{
                        id: packageall[key]["package_id"],
                        description: packageall[key]["package_name"],
                        value: packageall[key]["price"],
                      }}
                    />
                    {/* <button type="button" className="btn btn-primary" >
                      Buy Now
                    </button> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      });
    }
  };
  return (
    <>
      <section className="package">
        <div className="container">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={20}
            pagination={{
              clickable: "true",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {renPackage()}
            {/* <SwiperSlide>
              <div className="package_card">
                <div className="card_content">
                  <div className="card_image">
                    <h1>1 USD</h1>
                  </div>
                  <div class="card_name">
                    <h4>Gold Plan</h4>
                  </div>
                  <div className="card_title">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div style={{marginTop:"15px"}}>
                    <button type="button" className="btn btn-primary" >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="package_card">
                <div className="card_content">
                  <div className="card_image">
                    <h1>1 USD</h1>
                  </div>
                  <div class="card_name">
                    <h4>Platinum Plan</h4>
                  </div>
                  <div className="card_title">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div style={{marginTop:"15px"}}>
                    <button type="button" className="btn btn-primary" >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="package_card">
                <div className="card_content">
                  <div className="card_image">
                    <h1>1 USD</h1>
                  </div>
                  <div class="card_name">
                    <h4>Diamond  Plan</h4>
                  </div>
                  <div className="card_title">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div style={{marginTop:"15px"}}>
                    <button type="button" className="btn btn-primary" >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="package_card">
                <div className="card_content">
                  <div className="card_image">
                    <h1>1 USD</h1>
                  </div>
                  <div class="card_name">
                    <h4>Premium  Plan</h4>
                  </div>
                  <div className="card_title">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div style={{marginTop:"15px"}}>
                    <button type="button" className="btn btn-primary" >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Checkout;
