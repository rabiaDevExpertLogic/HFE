import React from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../section/home/banner";
import ContentSection from "../section/home/contentSection";
import Service from "../section/home/service";
import BannerImg1 from "../assets/home/banner/bannerImg-1.jpeg";
import BannerImg2 from "../assets/home/banner/bannerImg-2.jpeg";
import BannerImg3 from "../assets/home/banner/bannerImg-3.jpeg";
import ContentImg1 from "../assets/home/banner/bannerImg-1.jpeg";
import ContentImg2 from "../assets/home/banner/bannerImg-2.jpeg";
import ContentImg3 from "../assets/home/banner/bannerImg-3.jpeg";
import ServiceImg1 from "../assets/home/service/serviceImg-1.jpg";
import ServiceImg2 from "../assets/home/service/serviceImg-2.jpg";
import ServiceImg3 from "../assets/home/service/serviceImg-3.jpg";
import Faq from "../section/home/faq";

const bannerOption = { loop: true };
const BannerList = [
  {
    title: (
      <>
        Essential <br className="d-none d-sm-block" /> Worker Living
      </>
    ),
    description: (
      <>
        Essential Worker Living is a housing program created to help individuals
        who provide critical services find housing near the neighborhoods where
        they work. To qualify as an Essential Worker, applicants must meet
        specific income guidelines. Please review the checklist below to apply.
      </>
    ),
    buttonText: "Start Now",
    imageUrl: "https://placehold.co/600x400/grey/white", // Dynamic image URL
  },
  {
    title: (
      <>
        Essential <br /> Worker Living
      </>
    ),
    description: (
      <>
        Essential Worker Living is a housing program created to help individuals
        who provide critical services find housing near the neighborhoods where
        they work. To qualify as an Essential Worker, applicants must meet
        specific income guidelines. Please review the checklist below to apply.
      </>
    ),
    buttonText: "Start Now",
    imageUrl: "https://placehold.co/600x400/grey/white", // Dynamic image URL
  },
  {
    title: (
      <>
        Essential <br /> Worker Living
      </>
    ),
    description: (
      <>
        Essential Worker Living is a housing program created to help individuals
        who provide critical services find housing near the neighborhoods where
        they work. To qualify as an Essential Worker, applicants must meet
        specific income guidelines. Please review the checklist below to apply.
      </>
    ),
    buttonText: "Start Now",
    imageUrl: "https://placehold.co/600x400/grey/white", // Dynamic image URL
  },
];

const content1 = {
  title: (
    <>
      About Hope <br /> For EveryBody
    </>
  ),
  subtitle: "Tagline",
  paragraph: (
    <>
      We are building the largest network of individuals, companies and
      organizations (Providers) and connecting them with those in need
      (Clients). We need your help and we will pay you for it! At this stage, we
      are currently hiring for 2 positions:
    </>
  ),
  points: [
    {
      heading: "SubHeading One",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </>
      ),
    },
    {
      heading: "SubHeading Two",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </>
      ),
    },
  ],
  buttonText: "Sign In",
};

const content2 = {
  title: (
    <>
      About Hope <br /> For EveryBody
    </>
  ),
  subtitle: "Tagline",
  paragraph: (
    <>
      We are building the largest network of individuals, companies and
      organizations (Providers) and connecting them with those in need
      (Clients). We need your help and we will pay you for it! At this stage, we
      are currently hiring for 2 positions:
    </>
  ),
  points: [
    {
      heading: "SubHeading One",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </>
      ),
    },
    {
      heading: "SubHeading Two",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </>
      ),
    },
  ],
  buttonText: "Sign In",
};

const content3 = {
  title: (
    <>
      About Hope <br /> For EveryBody
    </>
  ),
  subtitle: "Tagline",
  paragraph: (
    <>
      {" "}
      We are building the largest network of individuals, companies and
      organizations (Providers) and connecting them with those in need
      (Clients). We need your help and we will pay you for it! At this stage, we
      are currently hiring for 2 positions:
    </>
  ),
  points: [
    {
      heading: "SubHeading One",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </>
      ),
    },
    {
      heading: "SubHeading Two",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </>
      ),
    },
  ],
  buttonText: "Sign In",
};

const ServiceOption = { loop: true };

const ServiceData = {
  subtitle: "Most Popular",
  title: "Our Exclusive Cakes",
};

const ServiceList = [
  {
    CardImg: "https://placehold.co/600x400/grey/white",
    title: "Neque volutpat morbi.",
    desc: "Et blandit non sit ac egestas risus non.",
    buttonText: "Order Now",
  },
  {
    CardImg: "https://placehold.co/600x400/grey/white",
    title: "Neque volutpat morbi.",
    desc: "Et blandit non sit ac egestas risus non.",
    buttonText: "Order Now",
  },
  {
    CardImg: "https://placehold.co/600x400/grey/white",
    title: "Neque volutpat morbi.",
    desc: "Et blandit non sit ac egestas risus non.",
    buttonText: "Order Now",
  },
];

const faqs = [
  {
    id: 1,
    header: "What is Lorem Ipsum?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: "Where does it come from?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];

export default function Home() {
  return (
    <section>
      <Container>
        <Row>
          <Banner slides={BannerList} options={bannerOption} />
          <ContentSection
            contentLeft={content1}
            BannerImg="https://placehold.co/600x400/grey/white"
          />
          <ContentSection
            contentRight={content2}
            BannerImg="https://placehold.co/600x400/grey/white"
          />
          <ContentSection
            contentLeft={content3}
            BannerImg="https://placehold.co/600x400/grey/white"
          />
          <Service
            data={ServiceData}
            slides={ServiceList}
            options={ServiceOption}
          />
          <Faq faqs={faqs} />
        </Row>
      </Container>
    </section>
  );
}
