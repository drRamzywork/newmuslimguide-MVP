import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import SearchInput from "@/Utils/SearchInput";
const Hero = ({ dataPreliminaries, dir, dataAllWords, dataFirstTopic }) => {
  const firtsPost = dataPreliminaries?.posts[7] || [];

  return (
    <section id="hero" className={styles.hero} dir={dir}>
      <div className="mobile">
        <div className="container">
          <div className={styles.sec_container}>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              dir="ltr"
              modules={[Navigation, FreeMode, Autoplay]}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              initialSlide={1}
              className={styles.swiper_contain}
              centeredSlides={true}
              style={{ width: "100%" }}
              navigation={{
                prevEl: ".left_arrow",
                nextEl: ".right_arrow",
              }}
            >
              <SwiperSlide>
                <div className={styles.img_container}>
                  <motion.img
                    initial={{ opacity: 0, scale: 1.5, x: 0 }}
                    whileInView={{ opacity: 1, scale: 1.5, x: 20 }}
                    className={`${styles.img_1} `}
                    src="/assets/svgs/img1.png"
                    alt=""
                  />
                  <motion.img
                    initial={{ opacity: 0, x: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, x: -30, scale: 1.2 }}
                    className={`${styles.img_2} `}
                    src="/assets/svgs/img_2.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className={`${styles.img_container} ${styles.img_container2}`}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1, x: 0 }}
                    whileInView={{ opacity: 1, scale: 1.1, x: 20 }}
                    className={`${styles.img_5} `}
                    src="/assets/imgs/img_5.png"
                    alt=""
                  />

                  <motion.img
                    initial={{ opacity: 0, scale: 0.9, x: 0 }}
                    whileInView={{ opacity: 1, scale: 0.9, x: -20 }}
                    className={`${styles.img_6} `}
                    src="/assets/imgs/img_6.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.img_container}>
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1, x: 0 }}
                    whileInView={{ opacity: 1, scale: 1.1, x: 20 }}
                    className={`${styles.img_3} `}
                    src="/assets/imgs/img_3.png"
                    alt=""
                  />

                  <motion.img
                    initial={{ opacity: 0, scale: 0.9, x: 0 }}
                    whileInView={{ opacity: 1, scale: 0.9, x: -20 }}
                    className={`${styles.img_4} `}
                    src="/assets/imgs/img_4.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className={styles.text_container}>
              <Link href={"/preliminaries"} className={styles.title}>
                {/* <h2>{dataAllCategories[0]?.name}</h2> */}
              </Link>
              <Link
                href={`/preliminaries/${firtsPost?.slug}`}
                className={styles.desc}
              >
                <p>{firtsPost?.title}</p>
              </Link>
            </div>

            <Link
              href={`/preliminaries/${firtsPost?.slug}`}
              className={styles.section}
            >
              <div className={styles.box}>
                <div className={styles.text}>
                  <p>{firtsPost?.description}</p>
                </div>

                <div className={styles.img_container2}>
                  <img src={firtsPost?.image} alt={firtsPost?.title} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="desktop">
        <div className={styles.sec_container}>
          <div className={styles.swiper_container}>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              dir="ltr"
              modules={[Navigation, FreeMode, Autoplay]}
              loop={true}
              // autoplay={false}
              autoplay={{
                delay: 5000,
              }}
              initialSlide={0}
              className={styles.swiper_contain}
              centeredSlides={true}
              style={{ width: "100%" }}
              navigation={{
                prevEl: ".left_arrow",
                nextEl: ".right_arrow",
              }}
            >
              <SwiperSlide>
                <div className={styles.img_container}>
                  <div className={styles.trans}>
                    <motion.img
                      initial={{ opacity: 0, scale: 1.5, x: 0 }}
                      whileInView={{ opacity: 1, scale: 1.5, x: 20 }}
                      className={`${styles.img_1} `}
                      src="/assets/svgs/img1.png"
                      alt=""
                    />
                  </div>
                  <motion.img
                    initial={{ opacity: 0, x: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, x: -30, scale: 1.2 }}
                    className={`${styles.img_2} `}
                    src="/assets/svgs/img_2.svg"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className={`${styles.img_container} ${styles.img_container2}`}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1, x: 0 }}
                    whileInView={{ opacity: 1, scale: 1.1, x: 20 }}
                    className={`${styles.img_5} `}
                    src="/assets/imgs/img_5.png"
                    alt=""
                  />

                  <motion.img
                    initial={{ opacity: 0, scale: 0.9, x: 0 }}
                    whileInView={{ opacity: 1, scale: 0.9, x: -20 }}
                    className={`${styles.img_6} `}
                    src="/assets/imgs/img_6.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.img_container}>
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1, x: 0 }}
                    whileInView={{ opacity: 1, scale: 1.1, x: 20 }}
                    className={`${styles.img_3} `}
                    src="/assets/imgs/img_3.png"
                    alt=""
                  />

                  <motion.img
                    initial={{ opacity: 0, scale: 0.9, x: 0 }}
                    whileInView={{ opacity: 1, scale: 0.9, x: -20 }}
                    className={`${styles.img_4} `}
                    src="/assets/imgs/img_4.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={styles.text_container2}>
            <div className={styles.desc}>
              <p>{dataAllWords?.h_title1}</p>
            </div>

            <SearchInput />
          </div>
        </div>

        <div className={styles.desc}>
          <p>{dataAllWords?.h_title2}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
