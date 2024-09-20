import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import { GetEstates } from "../queries/GetEstates";
import Loader from "./Loader";
import PropertyCard from "./PropertyCard";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import { ReactComponent as BackArrow } from "../assets/images/BackArrow.svg";
import { ReactComponent as NextArrow } from "../assets/images/NextArrow.svg";

const SwiperComponent = ({ regionId }) => {
  const { data, isLoading, isError } = GetEstates();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (isLoading) return <Loader />;
  if (isError) return <Loader />;

  const filteredData = data.filter(
    (property) => property.city.region.id === regionId
  );

  return (
    <div className="py-[100px] space-y-[52px] relative">
      <h2 className="text-[32px]">ბინები მსგავს ლოკაციაზე</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        <div className="flex justify-between items-center">
          <button ref={prevRef} href="#">
            <BackArrow />
          </button>
          <button ref={nextRef} href="#">
            <NextArrow />
          </button>
        </div>
        {filteredData.map((property) => (
          <SwiperSlide key={property.id}>
            <a href={`/PropertyDetails/${property.id}`}>
              <PropertyCard property={property} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
