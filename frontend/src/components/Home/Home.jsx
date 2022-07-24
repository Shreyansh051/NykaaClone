import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Home.module.css";
import Carousel1 from "./Carousel1.1";
import Carousel2 from "./Carousel1.2";
import Horizontal from "./Horizontal";
import {
  Box,
  Text,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const cardImages1 = [
  {
    url: "https://images-static.nykaa.com/uploads/046de71f-4797-44bc-b7d2-1c198e65d050.png?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/57c0cdd9-3cbc-470e-a47b-c08ee7ca0144.png?tr=w-1200,cm-pad_resize",
  },
];

const cardImages2 = [
  {
    url: "https://images-static.nykaa.com/uploads/45e77657-2fba-49f1-b077-437dc02b978c.gif?tr=w-1200,cm-pad_resize",
    tittle: "For Every Skin Type",
    discount: " Upto 35% Off%",
  },
  {
    url: "https://images-static.nykaa.com/uploads/2aaabbf7-64bb-4ec8-b73c-671074554789.jpg?tr=w-1200,cm-pad_resize",
    tittle: "On Entire Range",
    discount: " Upto 25% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/ebbf5f5b-9f8c-4839-9063-d4b3d4fb5656.gif?tr=w-1200,cm-pad_resize",
    tittle: "For Every Skin Type",
    discount: "Upto 35% Off%",
  },
  {
    url: "https://images-static.nykaa.com/uploads/1555b61a-a163-408a-ab3d-3a666832acfb.jpg?tr=w-1200,cm-pad_resize",
    tittle: " Explore Waterproof Makeup +",
    discount: "Exciting Gifts On Orders!",
  },

  {
    url: "https://images-static.nykaa.com/uploads/83247895-0a7e-4141-9b86-ce7b039e7c3a.gif?tr=w-1200,cm-pad_resize",
    tittle: "For Every Skin Type",
    discount: "Exciting Gifts On Orders!",
  },
  {
    url: "https://images-static.nykaa.com/uploads/3856736f-82d6-45c0-a10e-8bc90e891bb2.gif?tr=w-1200,cm-pad_resize",
    tittle: "On Entire Range",
    discount: "Upto 25% Off",
  },
  {
    url: "https://images-static.nykaa.com/uploads/b1189a45-6537-415f-ae55-bdd500d074b0.gif?tr=w-1200,cm-pad_resize",
    tittle: " worth Rs. 525 on Rs. 800",
    discount: "Upto 40% Off + Free lipstick",
  },
  {
    url: "https://images-static.nykaa.com/uploads/64c65727-2d07-41a5-b4a5-6e0dbfee8b98.jpg?tr=w-1200,cm-pad_resize",
    tittle: "SKY HIGH Mascara Has Landed In India !",
    discount: "Upto 30% Off On Maybelline Bestsellers  ",
  },
];
const cardImages3 = [
  {
    url: "https://images-static.nykaa.com/uploads/db316f35-4e1f-49a2-942e-c730599ff776.gif?tr=w-1200,cm-pad_resize",
    tittle: "Moisturizer Worth Rs. 399 On Rs. 1000",
    discount: "Upto 15% Off + Free 5% Niacinamide",
  },
  {
    url: "https://images-static.nykaa.com/uploads/4e85e306-4fcf-463a-ae04-d0066fb010de.gif?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: "Upto 20% Off",
  },
];
const cardImages31 = [
  {
    url: "https://images-static.nykaa.com/uploads/4c447fa5-0de0-4c69-a138-177321485adf.gif?tr=w-1200,cm-pad_resize",
    tittle: "Complimentary Gifts On International Favourites",
    discount: " Upto 30% Off +",
  },
];
const cardImages4 = [
  {
    url: "https://images-static.nykaa.com/uploads/1ca5ddd3-c263-40b7-9713-d8dede28b4be.jpg?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: "Additional 5% Off On Rs. 399",
  },
];
const cardImages5 = [
  {
    url: "https://images-static.nykaa.com/uploads/5c11bb71-1500-477e-9943-491d57a1ec57.gif?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: " Grab SUGAR Favorites On Purchase Of Rs.799",
  },
  {
    url: "https://images-static.nykaa.com/uploads/62eb4f26-ccb1-4a18-82e0-28b99368314b.jpg?tr=w-1200,cm-pad_resize",
    tittle: "Additional 5% Off On Rs. 399",
    discount: "  Upto 30% Off",
  },
];
const cardImages6 = [
  {
    url: "https://images-static.nykaa.com/uploads/3671a728-2665-44e1-8065-f7f75308c3cb.gif?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: "50%-60%",
  },
  {
    url: "https://images-static.nykaa.com/uploads/0767a3b8-61ec-43b0-901b-76ae5563fdb8.png?tr=w-1200,cm-pad_resize",
    tittle: "explore more+",
    discount: "50%-60%",
  },
];
const cardImages7 = [
  {
    url: "https://images-static.nykaa.com/uploads/e6ae051f-56e7-4079-93e4-b844af6e1d49.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    url: "https://images-static.nykaa.com/uploads/39824e2a-d94a-4ddc-8148-3702c67ac2b3.jpg?tr=w-1200,cm-pad_resize",
  },
];

function HomePage() {
  return (
    <div>
      <Carousel1 />

      <div className={styles.banner}>
        <img
          src="https://images-static.nykaa.com/uploads/19367bb9-be89-428e-8892-e6f1ad9718f2.jpg?tr=w-2400,cm-pad_resize"
          alt="banner1"
        />
      </div>
      <h1 className={styles.bigheader}>HOT PINK SALE - COMING SOON!</h1>
      <div>
        <img
          className={styles.banner2}
          src="https://images-static.nykaa.com/uploads/618d58d6-cb47-4c1d-95dd-1abd3a5273b8.gif?tr=w-2400,cm-pad_resize"
          alt="banner2"
        />
      </div>
      <div className={styles.card}>
        {cardImages1.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
            marginTop={"20px"}
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
      <div className={styles.cardsquare}>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/887f5bce-b082-44f7-a5b4-00c7120ee5ba.png?tr=w-800,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/72989133-c367-4986-b66e-5c49c00a0249.png?tr=w-800,cm-pad_resize"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/fd031c0b-bd81-471c-86b2-6395ae0da879.png?tr=w-800,cm-pad_resize"
            alt=""
          />
        </div>
      </div>

      <h1 className={styles.bigheader}>TOP BRANDS</h1>
      {/* cards 1 */}
      <div className={styles.card}>
        {cardImages2.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div className={styles.setcontainer}>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
                <div className={styles.setdiv}>
                  <span className={styles.tittle}>{`${cards.tittle}`} </span>
                  <p className={styles.discount}>{`${cards.discount}`}</p>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </div>
      <h1 className={styles.bigheader}>ONLY AT NYKAA</h1>
      <div className={styles.card}>
        {cardImages3.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div className={styles.setcontainer}>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
                <div className={styles.setdiv}>
                  <span className={styles.tittle}>{`${cards.tittle}`} </span>
                  <p className={styles.discount}>{`${cards.discount}`}</p>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </div>
      <div className={styles.card}>
        {cardImages31.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
            marginLeft={"244px"}
            marginTop={"20px"}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div className={styles.setcontainer}>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
                <div className={styles.setdiv}>
                  <span className={styles.tittle}>{`${cards.tittle}`} </span>
                  <p className={styles.discount}>{`${cards.discount}`}</p>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </div>
      <div>
        <img
          className={styles.banner}
          src="https://images-static.nykaa.com/uploads/ab1fe425-503f-45c9-9d47-69bdea1d8ad7.png?tr=w-2400,cm-pad_resize"
          alt="banner1"
        />
      </div>
      <Carousel2 />
      <h1 className={styles.bigheader}>Bestsellers</h1>
      <Horizontal />
      <h1 className={styles.bigheader}>FEATURED BRANDS</h1>
      <div className={styles.card2}>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"60px"}
          marginBottom={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/d4c50b41-2ddc-47bc-addb-742a447ab8f1.gif?tr=w-600,cm-pad_resize"
            }
            objectFit={"cover"}
            alt=""
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Upto 20% Off + Free Face Scrub
              </Text>
              className={styles.title}
            </Stack>
          </Box>
        </Box>
        {/*  */}
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/76c2f024-13ba-4bc8-8c5a-b745d3ba270a.jpg?tr=w-600,cm-pad_resize"
            }
            objectFit={"cover"}
            alt=""
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Moisturizer Worth Rs. 399 On Rs. 1000
              </Text>
            </Stack>
          </Box>
        </Box>
        {/*  */}
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/7374c63a-d155-49b3-86f0-759cd2b05276.gif?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Free Fab Bullet Lipstick Free On ₹799
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/ea9cd082-828e-43d7-8b18-42aedd4b8012.gif?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Flat 10% Off + Buy 5 Get 5 On Sheet Masks!
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"60px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/98d6ef1e-a48b-4da7-815c-e4fc676682ca.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                Upto 20% Off + Free Face Wash
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/b1c91e40-ec22-499c-b986-baf28f288e5c.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Upto 30% Off + Buy 2, Choose 2 Free Minis
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/0bb591a5-5b7b-4a34-b67f-86b8f293c6c8.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Upto 30% Off + Buy 2, Choose 2 Free Minis
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/3d486377-22f7-4a14-a496-b8f068eb6549.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}> nykaa-naturals-all</Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.cardhovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"310px"}
          marginTop={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/c7e52971-70e8-4a8c-bec6-23f6a232d0bf.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Experience Beauty From Within
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.cardhovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
          marginTop={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/fc49bc73-a146-4a37-83b2-c5d2e7eaa9f4.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}> Worth Rs. 249 On Rs. 800</Text>
            </Stack>
          </Box>
        </Box>
      </div>
      <div className={styles.card}>
        {cardImages4.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
            marginLeft={"244px"}
            marginTop={"20px"}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div className={styles.setcontainer}>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
                <div className={styles.setdiv}>
                  <span className={styles.tittle}>{`${cards.tittle}`}</span>
                  <p className={styles.discount}>{`${cards.discount}`}</p>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </div>
      <div>
        <img
          className={styles.banner2}
          src="https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg?tr=w-2400,cm-pad_resize"
          alt=""
        />
      </div>
      <h1 className={styles.bigheader}>OFFERS YOU CAN'T MISS</h1>
      <div className={styles.card2}>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"60px"}
          marginBottom={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/14e678fe-a398-4637-a72f-b54dfac276ef.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}> Up To 25% Off</Text>
            </Stack>
          </Box>
        </Box>
        {/*  */}
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/bb281cc7-5858-427c-814c-52fe9ee33f75.gif?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}> On Salon Quality Hair Care</Text>
            </Stack>
          </Box>
        </Box>
        {/*  */}
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/37e8f731-e1f8-4ba6-b69e-5ea3b8d30ecd.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>Upto 50% Off</Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/a33ef512-42d3-4500-b307-c47b9ed78d1e.gif?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>Worth Rs. 139 On Rs. 700</Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"60px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/ca9d631c-3741-4ac1-af97-cd58d014f3ae.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>Worth Rs. 139 On Rs. 700</Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/b80b80ee-9981-4c5b-98b8-3f687b7f8baa.jpg?tr=w-600,cm-pad_resize"
            }
            alt=""
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Experience Beauty From Within
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/f6eaee4b-a832-40e3-bd2e-ebe281bfc0b8.jpg?tr=w-600,cm-pad_resize"
            }
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                Experience Beauty From Within
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"270px"}
          h={"370px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          className={styles.card2hovereffect}
          rounded={"md"}
          overflow={"hidden"}
          marginLeft={"20px"}
        >
          <Image
            h={"270px"}
            w={"270px"}
            src={
              "https://images-static.nykaa.com/uploads/f11b1380-9220-4ec3-8442-2afa64235e34.jpg?tr=w-600,cm-pad_resize"
            }
            objectFit={"cover"}
          />
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Text className={styles.tittle}>
                {" "}
                Moisturizer Worth Rs. 399 On Rs. 1000
              </Text>
            </Stack>
          </Box>
        </Box>
      </div>
      <h1 className={styles.bigheader}>POP-UP STORES</h1>
      <div className={styles.card}>
        {cardImages5.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div className={styles.setcontainer}>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
                <div className={styles.setdiv}>
                  <span className={styles.tittle}>{`${cards.tittle}`}</span>
                  <p className={styles.discount}>{`${cards.discount}`}</p>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </div>
      <div>
        <img
          className={styles.banner2}
          src="https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg?tr=w-2400,cm-pad_resize"
          alt=""
        />
      </div>
      <div>
        <img
          alt=""
          className={styles.banner2}
          src="https://images-static.nykaa.com/uploads/6dd86f98-19ac-4e60-8aae-61849054d13a.jpg?tr=w-2400,cm-pad_resize"
        />
      </div>
      <h1 className={styles.bigheader}>SPECIAL CURATIONS</h1>
      <div className={styles.card}>
        {cardImages6.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
          >
            {" "}
            <div className="each-slide" key={index}>
              <div className={styles.setcontainer}>
                <img
                  className={styles.desimcal}
                  src={`${cards.url}`}
                  alt="card"
                />
                <div className={styles.setdiv}>
                  <span className={styles.tittle}>{`${cards.tittle}`}</span>
                  <p className={styles.discount}>{`${cards.discount}`}</p>
                </div>
              </div>
            </div>
          </Stack>
        ))}
      </div>
      <h1 className={styles.bigheader}>GIFT CARDS</h1>
      <div>
        <img
          className={styles.card2hovereffect}
          width="560px"
          height="233.33px"
          src="https://images-static.nykaa.com/uploads/be2ce42f-6986-4a32-a258-8d5278950d99.jpg?tr=w-1200,cm-pad_resize"
          alt=""
        />
      </div>
      <h1 className={styles.bigheader}>BEAUTY ADVICE</h1>
      <div className={styles.card}>
        {cardImages7.map((cards, index) => (
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "560px" }}
            height={{ sm: "476px", md: "18.8rem" }}
            direction={{ base: "column", md: "row" }}
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
      {/* <Carousel3 /> */}
    </div>
  );
}

export default HomePage;
