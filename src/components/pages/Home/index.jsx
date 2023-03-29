import styles from "./styles.module.css"
import Carousel  from  "../../../carousel"

const Home = () => (
    <Carousel>
        <div>
        <img className={styles.carouselImage} src="./1.JPG" />
        <p className="legend">CAMARA MOTO G3</p>
        </div>
        <div>
        <img className={styles.carouselImage} src="./2.JPG" />
        <p className="legend">CARCASA TRASERA LG K4</p>
        </div>
        <div>
        <img className={styles.carouselImage} src="./3.JPG" />
          <p className="legend">CARGADOR DE AUTO KOSMO</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./4.JPG" />
          <p className="legend">MESA NOTEBOOK CON COOLER</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./5.JPG" />
          <p className="legend">HDMI TO MICRO USB</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./6.JPG" />
          <p className="legend">COOLER AMD6</p>
        </div>
      </Carousel>
)

export default Home;