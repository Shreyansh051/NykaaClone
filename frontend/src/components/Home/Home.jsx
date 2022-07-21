// import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Stack } from "@chakra-ui/react";

const cardImages = [
  {
    url: "https://images-static.nykaa.com/uploads/96039c37-f304-4b5a-afaf-42da418c7344.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/bcf8e6b6-085e-4790-bb46-bb98d484de50.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/420e5dfe-1e4c-48db-8169-fb677365db43.jpg?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/64ce2e5a-dbca-4065-a90d-f22aff6787a7.jpg?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/8d78575e-72d8-4ad9-943b-50601678d510.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/13f4f223-4928-435c-87ab-1f933b0b0a78.jpg?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/0e92263a-4a47-4006-8bb0-721e4dbe9b8d.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/0e92263a-4a47-4006-8bb0-721e4dbe9b8d.gif?tr=w-2400,cm-pad_resize",
  },
];
const cardImages2 = [
  {
    url: "https://images-static.nykaa.com/uploads/96039c37-f304-4b5a-afaf-42da418c7344.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/bcf8e6b6-085e-4790-bb46-bb98d484de50.gif?tr=w-2400,cm-pad_resize",
  },
];
const cardImages3 = [
  {
    url: "https://images-static.nykaa.com/uploads/96039c37-f304-4b5a-afaf-42da418c7344.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/bcf8e6b6-085e-4790-bb46-bb98d484de50.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/96039c37-f304-4b5a-afaf-42da418c7344.gif?tr=w-2400,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/bcf8e6b6-085e-4790-bb46-bb98d484de50.gif?tr=w-2400,cm-pad_resize",
  },
];
function HomePage() {
  return (
    <>
      {/* <Carousel /> */}
      <div className={styles.banner}>
        <img
          src="https://images-static.nykaa.com/uploads/19367bb9-be89-428e-8892-e6f1ad9718f2.jpg?tr=w-2400,cm-pad_resize"
          alt="banner1"
        />
      </div>
      <div class={styles.banner}>
        <img
          src="https://images-static.nykaa.com/uploads/71c9f516-6626-469e-8173-2723431ed60f.jpg?tr=w-2400,cm-pad_resize"
          alt="banner2"
        />
      </div>
      <h1 className={styles.header}>TOP BRANDS</h1>
      {/* cards 1 */}
      <div className={styles.card}>
        {cardImages.map((card, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            boxShadow={"2xl"}
            padding={4}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div>
                <img
                  className={styles.desimcal}
                  src={`${card.url}`}
                  alt="card"
                />
              </div>
            </div>
          </Stack>
        ))}
      </div>
      {/* card1 end */}
      {/* card 2 start */}
      <h1 className={styles.header}>HOT PINK SALE - COMING SOON!</h1>
      <div className={styles.card}>
        {cardImages2.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            boxShadow={"2xl"}
            padding={4}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
              </div>
            </div>
          </Stack>
        ))}
      </div>
      {/* card 2 end */}
      {/* banner2 */}
      <div>
        <img
          className={styles.banner2}
          src="https://images-static.nykaa.com/uploads/7ffba4f4-c4f3-4744-bd39-2e554625c18d.jpg?tr=w-2400,cm-pad_resize"
          alt="banner2"
        />
      </div>
      {/* card 3 start */}
      <h1 className={styles.header}>ONLY AT NYKAA</h1>
      <div className={styles.card}>
        {cardImages3.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "540px" }}
            height={{ sm: "476px", md: "20rem" }}
            direction={{ base: "column", md: "row" }}
            boxShadow={"2xl"}
            padding={4}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
              </div>
            </div>
          </Stack>
        ))}
      </div>
      {/* card3 end */}
      {/* banner3 */}
      <div>
        <img
          className={styles.banner3}
          src="https://images-static.nykaa.com/uploads/ab1fe425-503f-45c9-9d47-69bdea1d8ad7.png?tr=w-2400,cm-pad_resize"
          alt="banner2"
        />
      </div>
    </>
  );
}

export default HomePage;
