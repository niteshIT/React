import styles from "./Netflixcard.module.css";
import styled from "styled-components";
export const Netflixcard = (props) => {
  const { img, name, description, rating, genre } = props.data;
  // *****************     styled component object way
  // const NiteshButton = styled.button({
  //   fontSize: "2rem",
  //   border: "none",
  //   backgroundColor: "blue",
  //   color: "white",
  //   padding: "0.8rem 2.2rem",
  //   borderRadius: "10px",
  // });

  //********** *       styled component template literal way
  const TemplateButton = styled.button`
    font-size: 2rem;
    border: none;
    background-color: ${(props) =>
      props.rating >= 70 ? "#73a373" : "#eaea92"};
    color: black;
    padding: 0.8rem 2.2rem;
    border-radius: 10px;
  `;
  // const btn_style = {
  //   fontSize: "2rem",
  //   border: "none",
  //   backgroundColor: "blue",
  //   color: "white",
  //   padding: "0.8rem 2.2rem",
  //   borderRadius: "10px",
  // };
  const ratingClass = rating >= 70 ? styles.super_hit : styles.hit;
  return (
    <li className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.cardItem}>
        <h2>{name}</h2>
        {/* <h3>
                  Rating :
                  <span
                    className={`rating ${
                      movie.rating >= 70 ? "super_hit" : "hit"
                    }`}
                  >
                    {movie.rating}
                  </span>
                </h3> */}
        <h3>
          Rating :
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3>
        <h3 className="text-3xl font-bold underline">{description}</h3>
        <p>{genre}</p>
        {/* <button style={btn_style}>watch now</button> */}
        <TemplateButton rating={rating}>watch now</TemplateButton>
      </div>
    </li>
  );
};
