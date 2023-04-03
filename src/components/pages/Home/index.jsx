import styles from "./styles.module.css"
import Carousel  from  "../../../carousel"

const Home = () => (
    <Carousel>
        <div>
        <img className={styles.carouselImage} src="./1.JPG" />
        </div>
        <div>
        <img className={styles.carouselImage} src="./2.JPG" />
        </div>
        <div>
        <img className={styles.carouselImage} src="./3.JPG" />
        </div>
      </Carousel>
)

export default Home;