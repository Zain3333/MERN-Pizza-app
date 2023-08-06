import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  let pizzaDesc = pizza.desc.substring(0, 60);
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image
          src={pizza.img}
          alt=""
          objectFit="contain"
          width="400"
          height="300"
        />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizzaDesc} ...</p>
    </div>
  );
};

export default PizzaCard;
