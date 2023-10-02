import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// TODO: find a way to import css
// import "swiper/css";
// import "swiper/css/navigation";

type Props = {
  images: string[] | { image: string; alt: string }[];
  className?: string;
  fit?: number;
  gap?: number;
};

function Carousel({ images, className, fit, gap }: Props) {
  return (
    <Swiper
      className={className}
      navigation={true}
      modules={[Navigation]}
      spaceBetween={gap ?? 0}
      slidesPerView={fit ?? 1}
    >
      {images.map((source) => (
        <SwiperSlide>
          <img
            src={source instanceof Object ? source.image : source}
            alt={source instanceof Object ? source.alt : "Imagen de carrusel"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Carousel };
