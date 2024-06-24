import Image from "next/image";
import React, { useEffect, useState } from "react";
// import logo from "../../public/images1/logo.jpg";
import Layout from "@/component/layout";

export default function Home() {
  return (
    <Layout>
      <div id="banner" className="rounded">
        <div
          className="slide"
          style={{
            backgroundImage: `url("/education.jpeg")`,
          }}
        ></div>
        <div className="wrap">
          <div className="banner-content">
            <h1>Non-Profit Education Reimagined</h1>
            <p>
              Pragati Mission is to create a nurturing environment where
              children can thrive emotionally,intellectually,and socially
              .Shaping the future by investing the comprenshive develpoment of
              child,empowering them to reach their full potential and contribute
              meaningfully to the world.
            </p>
            <a
              href="#"
              title="Learn How You Can Help"
              target=""
              className="btn ghost"
              id=""
            >
              <span>Learn How You Can Help</span>
            </a>
          </div>
        </div>
      </div>
      <section className="image-text">
        <div className="wrap flex reverse">
          <a
            href="https://www.shantibhavanchildren.org/field-manager-job/"
            target=""
            className="image-text-image tilte"
            // style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg);"
          >
            <img
              src="/image1.jpeg"
              alt="Volunteer Sophy"
            />
          </a>
          <div className="image-text-content">
            <span className="meta">Join Our Team</span>
            <h2>Field Manager</h2>
            <p>
              Are you seeking a unique opportunity to immerse yourself in a
              close-knit community and make a difference in young peoples
              lives? Maybe youre our next Field Manager!
            </p>
            <a
              href="https://www.shantibhavanchildren.org/field-manager-job/"
              target=""
              className="btn "
            >
              Field Manager
            </a>{" "}
          </div>
        </div>
      </section>

      <section className="featured impact">
        <div
          className="featured-image rounded"
          style={{
            backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/Then-Netflix-1-1500x800.png")`,
          }}
        ></div>
        <div className="wrap medium">
          <div className="featured-content rounded tilt">
            <div
              className="featured-image-mobile"
              style={{
                backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/08/student-learning-1500x800.jpeg")`,
              }}
            ></div>
            <div className="tilt-content flex">
              <div className="impact-numbers">
                <div className="impact-numbers-timer">
                  <div className="timer-bar"></div>
                </div>
                <div className="impact-numbers-slider">
                  <div className="slide">
                    <strong>97%</strong>
                    <p>Students who graduate from high school</p>
                  </div>
                  <div className="slide">
                    <strong>98%</strong>
                    <p>Students who complete college/university degrees</p>
                  </div>
                  <div className="slide">
                    <strong>100%</strong>
                    <p>
                      Graduates earn more in 5 years than their parents in a
                      lifetime
                    </p>
                  </div>
                  <div className="slide">
                    <strong>90%</strong>
                    <p>Graduates volunteer in their communities</p>
                  </div>
                  <div className="slide">
                    <strong>100% </strong>
                    <p>
                      Graduates give back 20-60% of their salaries to their
                      families and communities
                    </p>
                  </div>
                </div>
              </div>
              <div className="featured-text">
                <h2 className="title5">Impact</h2>
                <p>
                  We measure our impact based on where our students are five
                  years after they finish the Shanti Bhavan program. Our
                  graduates are authors, computer scientists, engineers,
                  entrepreneurs, teachers, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-text">
        <div className="wrap flex">
          <a
            href="https://www.shantibhavanchildren.org/netflix/"
            target="_blank"
            className="image-text-image tilt"
          >
            <img
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/Then-Netflix-3-810x460.png"
              alt="Little girl studying at desk"
            />
          </a>
          <div className="image-text-content">
            <span className="meta">NETFLIX DOCUSERIES</span>
            <h2>Daughters of Destiny</h2>
            <p>
              See firsthand the impact Shanti Bhavan makes on the lives of our
              children. Academy Award-winning director Vanessa Roth chronicles
              seven years in the lives of five young Shanti Bhavan women.
            </p>
            <a
              href="https://www.shantibhavanchildren.org/netflix/"
              target="_blank"
              className="btn"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="get-involved">
        <div className="wrap">
          <div className="get-involved-buckets flex">
            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("pragatimissiongirl-painting.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Donate</h2>
                <p>Mission Pragati</p>
              </div>
            </a>

            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("/education.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Volunteer</h2>
                <p>Experience Pragati Mission for yourself.</p>
              </div>
            </a>

            <a
              href="https://www.shantibhavanchildren.org/sponsorship/"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/08/student-learning-1500x800.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Sponsor</h2>
                <p>Create a connection with a Pragati Mission.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="recent-updates">
        <div className="wrap flex">
          <div className="blog">
            <div className="blog-header flex">
              <h2>
                <a
                  href="https://www.shantibhavanchildren.org/blog/"
                  className="link-arrow"
                >
                  From the Blog
                </a>
              </h2>
              <div className="blog-pagination"></div>
            </div>
            <div className="blog-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <article className="blog-post">
                    <a href="https://www.shantibhavanchildren.org/blog-post/monishas-biryani-connection/">
                      <img
                        src="images/pragati mission cheers group.jpeg"
                        alt=""
                        className="tilt"
                      />
                    </a>
                    <span className="meta">
                      <span>January 12, 2024</span> |<span>General</span>
                    </span>
                    <h3>
                      <a href="https://www.shantibhavanchildren.org/blog-post/monishas-biryani-connection/">
                        Monisha’s Biryani Connection
                      </a>
                    </h3>
                    <a
                      href="https://www.shantibhavanchildren.org/blog-post/monishas-biryani-connection/"
                      className="more"
                      aria-label="Read more about Monisha’s Biryani Connection"
                    >
                      Read More
                    </a>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="blog-post">
                    <a href="https://www.shantibhavanchildren.org/blog-post/a-letter-from-the-founder_2023/">
                      <img
                        src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/12/20230603_DrGeorgeSpeech2-810x460.png"
                        alt=""
                        className="tilt"
                      />
                    </a>
                    <span className="meta">
                      <span>December 14, 2023</span> |
                      <span>Featured Posts, Newsletters</span>
                    </span>
                    <h3>
                      <a href="https://www.shantibhavanchildren.org/blog-post/a-letter-from-the-founder_2023/">
                        A Letter from the Founder
                      </a>
                    </h3>
                    <p>
                      As the year comes to a close, I wish to share the many
                      successes Shanti Bhavan has had in 2023.
                    </p>
                    <a
                      href="https://www.shantibhavanchildren.org/blog-post/a-letter-from-the-founder_2023/"
                      className="more"
                      aria-label="Read more about A Letter from the Founder"
                    >
                      Read More
                    </a>
                  </article>
                </div>
                <div className="swiper-slide">
                  <article className="blog-post">
                    <a href="https://www.shantibhavanchildren.org/blog-post/the-majoritys-minority/">
                      <img
                        src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/09/pexels-thirdman-5684382-810x460.jpg"
                        alt=""
                        className="tilt"
                      />
                    </a>
                    <span className="meta">
                      <span>October 6, 2023</span> | <span></span>
                    </span>
                    <h3>
                      <a href="https://www.shantibhavanchildren.org/blog-post/the-majoritys-minority/">
                        The Majority’s Minority
                      </a>
                    </h3>
                    <a
                      href="https://www.shantibhavanchildren.org/blog-post/the-majoritys-minority/"
                      className="more"
                      aria-label="Read more about The Majority’s Minority"
                    >
                      Read More
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="news rounded">
            <h2>
              <a
                href="https://www.shantibhavanchildren.org/press/"
                className="link-arrow"
              >
                In the News
              </a>
            </h2>

            <article className="news-article">
              <span className="meta">
                <span>December 21, 2023</span> | <span>Duke Global</span>
              </span>
              <h3>From Shanti Bhavan to Duke</h3>
              <a
                href="https://global.duke.edu/from-shanti-bhavan-to-duke"
                title="https://global.duke.edu/from-shanti-bhavan-to-duke"
                target=""
                className="more"
                id=""
              >
                <span></span>
              </a>
            </article>
            <article className="news-article">
              <span className="meta">
                <span>December 12, 2023</span> | <span>Forbes.com</span>
              </span>
              <h3>
                The importance of long-term perspective for sustainable results
              </h3>
              <a
                href="https://www.forbes.com/sites/forbesnonprofitcouncil/2023/12/11/the-importance-of-long-term-perspective-for-sustainable-results/?sh=536b204424b3"
                title="https://www.forbes.com/sites/forbesnonprofitcouncil/2023/12/11/the-importance-of-long-term-perspective-for-sustainable-results/?sh=536b204424b3"
                target=""
                className="more"
                id=""
              >
                <span></span>
              </a>
            </article>
            <article className="news-article">
              <span className="meta">
                <span>October 4, 2023</span> | <span>Forbes.com</span>
              </span>
              <h3>
                Creating positive systemic change through the Multiplier Effect
              </h3>
              <a
                href="https://www.forbes.com/sites/forbesnonprofitcouncil/2023/10/04/creating-positive-systemic-change-through-the-multiplier-effect/?sh=4c9bda3435db"
                title="https://www.forbes.com/sites/forbesnonprofitcouncil/2023/10/04/creating-positive-systemic-change-through-the-multiplier-effect/?sh=4c9bda3435db"
                target=""
                className="more"
                id=""
              >
                <span></span>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="featured">
        <div
          className="featured-image rounded"
          style={{
            backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/08/student-learning-1500x800.jpeg")`,
          }}
        ></div>
        <div className="wrap small">
          <div className="featured-content rounded tilt">
            <div
              className="featured-image-mobile"
              style={{
                backgroundImage: `url("style="background-image: url(https://www.shantibhavanchildren.org/wp-content/uploads/2022/07/Campus-Building-1500x800.jpeg)"")`,
              }}
            ></div>
            <div className="featured-text tilt-content">
              <h2>Help Us Build Our Second School</h2>
              <p>
                Each year, Pragati MIssion is forced to turn away hundreds of
                children because one school simply cannot take in all of them.
                With your help, we will construct a second school that will
                change the lives of hundreds of new children.
              </p>
              <a
                href="https://www.shantibhavanchildren.org/shanti-bhavan-2/"
                className="btn"
                target=""
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>
      <h1>Our Team</h1>
      <section className="get-involved">
        <div className="wrap">
          <div className="get-involved-buckets flex">
            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("pragatimissiongirl-painting.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Donate</h2>
                <p>Mission Pragati</p>
              </div>
            </a>

            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/08/student-learning-1500x800.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Volunteer</h2>
                <p>Experience Pragati Mission for yourself.</p>
              </div>
            </a>

            <a
              href="https://www.shantibhavanchildren.org/sponsorship/"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("Team/image_023.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Sponsor</h2>
                <p>Create a connection with a Pragati Mission.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="get-involved">
        <div className="wrap">
          <div className="get-involved-buckets flex">
            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("pragatimissiongirl-painting.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Donate</h2>
                <p>Mission Pragati</p>
              </div>
            </a>

            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/08/student-learning-1500x800.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Volunteer</h2>
                <p>Experience Pragati Mission for yourself.</p>
              </div>
            </a>

            <a
              href="https://www.shantibhavanchildren.org/sponsorship/"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("Team/image_026.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Om Jayanti (Team Member)</h2>
                <p>Hey i am 0m jayanti & i would describe myself as a cohesive team 
member: I am willing and able to do whatever task is necessary to 
complete the project. </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="get-involved">
        <div className="wrap">
          <div className="get-involved-buckets flex">
            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("Team/image_027.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Ashvini Singh (Sports Head)</h2>
                <p>Hi i am Ashvini Singh and i working as a sports head in mission 
pragati .Being an athlete taught me about hard work and dedication. I've 
learned that to be good at what you do, you cant just sit around and 
expect things to always go your way. I did put in extra work to make the 
team and find out the talented students </p>
              </div>
            </a>

            <a
              href="#"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("Team/image_028.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Yash Raj (Graphic Design)</h2>
                <p>Hii am Yash Raj and i m working here as a graphic designer .'m a creative 
person driven by my passion for design. rm proficient with graphic tools 
and have an artistic approach towards everything I create. I'm also a 
team player of mission PRAGATI. </p>
              </div>
            </a>

            {/* <a
              href="https://www.shantibhavanchildren.org/sponsorship/"
              target=""
              className="bucket rounded tilt"
            >
              <div
                className="bucket-image"
                style={{
                  backgroundImage: `url("https://www.shantibhavanchildren.org/wp-content/uploads/2022/08/student-learning-1500x800.jpeg")`,
                }}
              ></div>
              <div className="bucket-text">
                <h2 className="title3 link-arrow">Sponsor</h2>
                <p>Create a connection with a Pragati Mission.</p>
              </div>
            </a> */}
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="gallery-container flex">
          <div className="gallery-column-1">
            <img
              width="475"
              height="270"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/11-475x270.png"
              className="tilt img-1"
              alt="race"
              loading="lazy"
            />
            <img
              width="475"
              height="407"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/7-e1663199671190-475x407.png"
              className="tilt img-2"
              alt="school seminar"
              loading="lazy"
            />
          </div>
          <div className="gallery-column-2">
            <img
              width="475"
              height="250"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/9-475x270.png"
              className="tilt img-3"
              alt="  mhehndi competition"
              loading="lazy"
            />
            <img
              width="475"
              height="270"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/8-475x270.png"
              className="tilt img-4"
              alt="girls  performing  dance"
              loading="lazy"
            />
          </div>
          <div className="gallery-column-3">
            <img
              width="475"
              height="270"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/6-475x270.png"
              className="tilt img-5"
              alt="painting"
              loading="lazy"
            />
            <img
              width="475"
              height="270"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/09/10-475x270.png"
              className="tilt img-6"
              alt="examination"
              loading="lazy"
            />
          </div>
          <div className="gallery-column-4"></div>
        </div>
      </section>
      <section className="footer"></section>
    </Layout>
  );
}
