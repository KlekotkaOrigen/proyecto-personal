import styles from "./styles.module.css";
import { Carousel as CarouselResponsive } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = (props) => {
        return (
            <CarouselResponsive className={styles.main} showArrows={true} autoPlay={false} infiniteLoop={true} showThumbs={false} {...props} />
        );
};

export default Carousel;