import React from "react";
import Head from "next/head";
import Image from "next/image";
import { articlesData } from "../data/articlesData";
import { reasonsData } from "../data/reasonsData";
import { fadeInAndScaleUp, fadeInAndMoveUp, moveDown } from "../utils/animations";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import ChooseReasonCard from "../components/ChooseReasonCard";
import AnimatedComponent from "../components/AnimatedComponent";
import * as SC from "./index.styled";

const metaData = (
  <Head>
    <title>Easy Bank</title>
    <meta name="description" content="Easy Bank Landing Page" />
    <link rel="icon" href="/favicon.svg" />
  </Head>
);

export default function Home() {
  return (
    <>
      {metaData}
      <Header />

      <main style={{ position: "relative", overflowX: "hidden" }}>
        <AnimatedComponent Tag={SC.AppIllustrationWrapper} animeParams={moveDown}>
          <Image
            width={1248}
            height={1094}
            src="/phoneIllustration.svg"
            alt="4 phones showing examples of app screens"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </AnimatedComponent>
        <SC.IntroductionSectionWrapper>
          <SC.IntroductionSection>
            <AnimatedComponent Tag={"h1"} animeParams={fadeInAndScaleUp} style={{ opacity: 0 }}>
              Next generation digital banking
            </AnimatedComponent>
            <AnimatedComponent Tag={"p"} animeParams={fadeInAndScaleUp} style={{ opacity: 0 }}>
              Take your financial life online. Your Easybank account will be a one-stop-shop for
              spending, saving, budgeting, investing, and much more.
            </AnimatedComponent>
            <AnimatedComponent Tag={Button} animeParams={fadeInAndMoveUp} initiallyInvisible={true}>
              Request Invite
            </AnimatedComponent>
          </SC.IntroductionSection>
        </SC.IntroductionSectionWrapper>

        <SC.WhyChooseSectionWrapper>
          <SC.WhyChooseSection>
            <SC.WhyChooseSectionHeader>
              <AnimatedComponent Tag={"h2"} animeParams={fadeInAndScaleUp} style={{ opacity: 0 }}>
                Why choose EasyBank?
              </AnimatedComponent>
              <AnimatedComponent Tag={"p"} animeParams={fadeInAndScaleUp} style={{ opacity: 0 }}>
                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.
              </AnimatedComponent>
            </SC.WhyChooseSectionHeader>

            <SC.ChooseReasonListWrapper>
              {reasonsData.map((reason) => (
                <AnimatedComponent
                  key={reason.name}
                  Tag={ChooseReasonCard}
                  animeParams={fadeInAndMoveUp}
                  {...reason}
                />
              ))}
            </SC.ChooseReasonListWrapper>
          </SC.WhyChooseSection>
        </SC.WhyChooseSectionWrapper>

        <SC.ArticlesSectionWrapper>
          <SC.ArticlesSection>
            <AnimatedComponent Tag={"h2"} animeParams={fadeInAndScaleUp} style={{ opacity: 0 }}>
              Latest Articles
            </AnimatedComponent>
            <SC.ArticlesListWrapper>
              {articlesData.map((article) => (
                <AnimatedComponent
                  key={article.name}
                  Tag={ArticleCard}
                  animeParams={fadeInAndMoveUp}
                  {...article}
                />
              ))}
            </SC.ArticlesListWrapper>
          </SC.ArticlesSection>
        </SC.ArticlesSectionWrapper>
      </main>

      <Footer />
    </>
  );
}
