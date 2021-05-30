import {
  AspectRatio,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import Head from "next/head";
import ReactIdSwiper from "react-id-swiper";
import LandingOverlays from "../components/LandingOverlays";
import Navbar from "../components/Navbar";
import { Box, forwardRef } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface SwipeCardDetails {
  imageSrc: string;
  title: string;
  text: string;
  link: string;
}

const swiperItems: SwipeCardDetails[] = [
  {
    imageSrc: "/images/accounting.jpg",
    title: "INSURANCE MANAGEMENT SOLUTIONS",
    text: "Creating one-of-a-kind software for corporate customers is a",
    link: "/something",
  },
  {
    imageSrc: "/images/health.jpg",
    title: "ACCOUNTING MANAGEMENT SOLUTION",
    text: "Introduce data analytics to your business with our superb and",
    link: "/something",
  },
  {
    imageSrc: "/images/insurance.jpg",
    title: "INSURANCE BROKER MANAGEMENT SOLUTION",
    text: "Creating one-of-a-kind software for corporate customers is a cornerstone of our expertise.",
    link: "/something",
  },
  {
    imageSrc: "/images/insurance.jpg",
    title: "HUMAN RESOURCE  MANAGEMENT SOLUTION",
    text: "Introduce data analytics to your business with our superb and customized analytics software to make more informed.",
    link: "/something",
  },
  {
    imageSrc: "/images/health.jpg",
    title: "HEALTH INSURANCE MANAGEMENT SOLUTION",
    text: "Creating one-of-a-kind software for corporate customers is a cornerstone of our expertise.",
    link: "/something",
  },
];

const MotionBox = motion(Box);

const services = (): JSX.Element => {
  return (
    <Box>
      <Head>
        <title>Services | Prognosis Technology</title>
        <meta name="description" content="Services Prognosis Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingOverlays
        bgImage="/images/business.jpg"
        firstText="WHAT WE DO"
        hasSecondText={true}
        secondText="We've developed more than 120 custom software solutions for businesses across Africa. To learn more about how we can help your business, check out our areas of expertise, and don't hesitate to ask us a question!"
        titleText="Transforming businesses & Delivering innovative solutions"
      />
      <Box py="4em">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "60% 40%" }}>
            <GridItem>
              <Box>
                <Heading
                  w={{ base: "100%", md: "60%" }}
                  fontSize={{ base: "25px", md: "4xl" }}
                >
                  Redefining Industries with{" "}
                  <chakra.span color="#0FBF44">Technology</chakra.span>
                </Heading>
                <Text mt={3} w={{ base: "100%", md: "650px" }}>
                  In today’s world of fast paced digitization, every industry
                  requires innovation and novel application of technology.
                  Prognosis technologies, as a 21st century software development
                  company, has over the years built a professional capacity for
                  helping organizations across various verticals with their
                  technology needs. Our technologies and solutions are adaptable
                  for clients across the following verticals:
                </Text>
                <Text mt={4} w={{ base: "100%", md: "650px" }}>
                  Finance - Healthcare - Wholesale and Retail - Education -
                  Construction - Entertainment - Real Estate - Transportation -
                  Energy
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <AspectRatio
                borderRadius="md"
                h="18em"
                maxW="500px"
                ratio={4 / 3}
              >
                <iframe
                  title="Prognosis Site Intro"
                  src="https://www.youtube.com/embed/Qq6LT7lVGM4"
                  allowFullScreen
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box py="3em" textAlign="center" bg="#1A202C">
        <Container maxW="container.xl">
          <Heading mb="2em" fontSize={{ base: "25px", md: "4xl" }} color="#fff">
            OUR DEDICATED <chakra.span color="#0FBF44">SOLUTIONS</chakra.span>
          </Heading>
          <ReactIdSwiper
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={3}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
            lazy={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={40}
          >
            {swiperItems.map(({ text, imageSrc, title, link }, i) => (
              <Box height="300px" cursor="pointer" key={i}>
                <MotionBox
                  height="200px"
                  p={6}
                  bgPos="center"
                  bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageSrc})`}
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  key={i}
                  rounded="xl"
                  whileHover={{ scale: 1.1 }}
                  textAlign="left"
                  color="white"
                >
                  <Heading
                    lineHeight="1.7"
                    as="a"
                    href={link}
                    fontSize={{ base: "25px", md: "lg" }}
                  >
                    {title}
                  </Heading>
                  <Text
                    lineHeight="1.7"
                    fontSize={{ base: "sm", md: "15px" }}
                    mt={4}
                  >
                    {text}
                  </Text>
                </MotionBox>
              </Box>
            ))}
          </ReactIdSwiper>
        </Container>
      </Box>
    </Box>
  );
};

export default services;
