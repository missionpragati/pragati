import Layout from "@/component/layout";
import React from "react";

export default function Blog() {
  return (
    <Layout>
      <div className="page-title blog-landing">
        <div className="wrap">
          <div className="flex">
            <h1>Blog</h1>
            <form
              data-url="https://www.shantibhavanchildren.org/blog/"
              method="get"
              className="blog-filter"
            >
              <ul className="flex">
                <li>
                  <label for="blog-category">
                    Category Filter (content on page will change automatically
                    when selecting)
                  </label>
                  <select id="blog-category" name="blog-category">
                    <option value="">Show All Categories</option>
                    <option value="featured-posts">Featured Posts</option>
                    <option value="general">General</option>
                    <option value="information-center">
                      Information Center
                    </option>
                    <option value="newsletters">Newsletters</option>
                  </select>
                </li>
                <li>
                  <label for="search">
                    Search (content on page will change automatically when
                    searching)
                  </label>
                  <input
                    type="text"
                    name="search"
                    className="search"
                    value=""
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>


      <section className="featured-post-module">
        <div className="wrap">
          <article className="featured-post flex">
            <div className="blog-post-image">
              <a href="https://www.shantibhavanchildren.org/blog-post/the-history-of-shanti-bhavan/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2021/08/History1-810x460.jpg"
                  alt="Dr. George walking outside with students"
                  className="tilt"
                ></img>
              </a>
            </div>
            <div className="blog-post-content">
              <span className="meta">
                <span>August 16, 2021</span> |{" "}
                <span>Featured Posts, Information Center</span>
              </span>
              <h2 className="title3">
                <a href="https://www.shantibhavanchildren.org/blog-post/the-history-of-shanti-bhavan/">
                  The History and Growth of Shanti Bhavan
                </a>
              </h2>
              <p>
                The George Foundation tackles various issues, including poverty,
                gender equality, health, freedom of the press, and lead
                poisoning prevention. However, the most notable accomplishment
                of The George Foundation is Shanti Bhavan.
              </p>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/the-history-of-shanti-bhavan/"
                aria-label="Read more about The History and Growth of Shanti Bhavan"
                class="more"
              >
                Read More
              </a>
            </div>
          </article>
        </div>
      </section>


      <section class="blog-posts">
        <div class="wrap">
          <div class="blog-posts-container post-container" role="feed">
            <article
              class="blog-post post-content"
              aria-labelledby="unleashing-creativity-a-journey-with-design-thinking-at-shanti-bhavan"
              tabindex="0"
              aria-posinset="1"
              aria-setsize="58"
            >
              <a href="https://www.shantibhavanchildren.org/blog-post/unleashing-creativity-a-journey-with-design-thinking-at-shanti-bhavan/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/09/IMG_5332-e1694592860864-810x460.png"
                  alt=""
                  class="tilt"
                ></img>
              </a>
              <span class="meta">
                <span>February 12, 2024</span> | <span>General</span>
              </span>
              <h2 class="title3">
                <a
                  href="https://www.shantibhavanchildren.org/blog-post/unleashing-creativity-a-journey-with-design-thinking-at-shanti-bhavan/"
                  id="unleashing-creativity-a-journey-with-design-thinking-at-shanti-bhavan"
                >
                  Unleashing Creativity: A Journey with Design Thinking at
                  Shanti Bhavan
                </a>
              </h2>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/unleashing-creativity-a-journey-with-design-thinking-at-shanti-bhavan/"
                aria-label="Read more about Unleashing Creativity: A Journey with Design Thinking at Shanti Bhavan"
                class="more"
              >
                Read More
              </a>
            </article>


            <article
              class="blog-post post-content"
              aria-labelledby="journey-to-japan-with-monika-surya"
              tabindex="0"
              aria-posinset="2"
              aria-setsize="58"
            >
              <a href="https://www.shantibhavanchildren.org/blog-post/journey-to-japan-with-monika-surya/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/09/Monika-Surya-August-29th--810x460.jpg"
                  alt=""
                  class="tilt"
                ></img>
              </a>
              <span class="meta">
                <span>February 8, 2024</span> | <span>General</span>
              </span>
              <h2 class="title3">
                <a
                  href="https://www.shantibhavanchildren.org/blog-post/journey-to-japan-with-monika-surya/"
                  id="journey-to-japan-with-monika-surya"
                >
                  Journey to Japan with Monika &#038; Surya
                </a>
              </h2>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/journey-to-japan-with-monika-surya/"
                aria-label="Read more about Journey to Japan with Monika &#038; Surya"
                class="more"
              >
                Read More
              </a>
            </article>


            <article
              class="blog-post post-content"
              aria-labelledby="hemants-journey-to-princeton"
              tabindex="0"
              aria-posinset="3"
              aria-setsize="58"
            >
              <a href="https://www.shantibhavanchildren.org/blog-post/hemants-journey-to-princeton/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2024/01/Hemant-Newsletter-810x460.jpg"
                  alt=""
                  class="tilt"
                ></img>
              </a>
              <span class="meta">
                <span>January 25, 2024</span> |{" "}
                <span>Featured Posts, Newsletters</span>
              </span>
              <h2 class="title3">
                <a
                  href="https://www.shantibhavanchildren.org/blog-post/hemants-journey-to-princeton/"
                  id="hemants-journey-to-princeton"
                >
                  Hemant&#8217;s Journey to Princeton
                </a>
              </h2>
              <p>
                I am writing this very special message to all the supporters of
                Shanti Bhavan with my deepest gratitude.
              </p>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/hemants-journey-to-princeton/"
                aria-label="Read more about Hemant&#8217;s Journey to Princeton"
                class="more"
              >
                Read More
              </a>
            </article>


            <article
              class="blog-post post-content"
              aria-labelledby="monishas-biryani-connection"
              tabindex="0"
              aria-posinset="4"
              aria-setsize="58"
            >
              <a href="https://www.shantibhavanchildren.org/blog-post/monishas-biryani-connection/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/08/Monisha-Chinnasamy-810x460.png"
                  alt=""
                  class="tilt"
                ></img>
              </a>
              <span class="meta">
                <span>January 12, 2024</span> | <span>General</span>
              </span>
              <h2 class="title3">
                <a
                  href="https://www.shantibhavanchildren.org/blog-post/monishas-biryani-connection/"
                  id="monishas-biryani-connection"
                >
                  Monisha’s Biryani Connection
                </a>
              </h2>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/monishas-biryani-connection/"
                aria-label="Read more about Monisha’s Biryani Connection"
                class="more"
              >
                Read More
              </a>
            </article>


            <article
              class="blog-post post-content"
              aria-labelledby="a-letter-from-the-founder_2023"
              tabindex="0"
              aria-posinset="5"
              aria-setsize="58"
            >
              <a href="https://www.shantibhavanchildren.org/blog-post/a-letter-from-the-founder_2023/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/12/20230603_DrGeorgeSpeech2-810x460.png"
                  alt=""
                  class="tilt"
                ></img>
              </a>
              <span class="meta">
                <span>December 14, 2023</span> |{" "}
                <span>Featured Posts, Newsletters</span>
              </span>
              <h2 class="title3">
                <a
                  href="https://www.shantibhavanchildren.org/blog-post/a-letter-from-the-founder_2023/"
                  id="a-letter-from-the-founder_2023"
                >
                  A Letter from the Founder
                </a>
              </h2>
              <p>
                As the year comes to a close, I wish to share the many successes
                Shanti Bhavan has had in 2023.{" "}
              </p>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/a-letter-from-the-founder_2023/"
                aria-label="Read more about A Letter from the Founder"
                class="more"
              >
                Read More
              </a>
            </article>


            <article
              class="blog-post post-content"
              aria-labelledby="the-majoritys-minority"
              tabindex="0"
              aria-posinset="6"
              aria-setsize="58"
            >
              <a href="https://www.shantibhavanchildren.org/blog-post/the-majoritys-minority/">
                <img
                  src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/09/pexels-thirdman-5684382-810x460.jpg"
                  alt=""
                  class="tilt"
                ></img>
              </a>
              <span class="meta">
                <span>October 6, 2023</span> | <span></span>
              </span>
              <h2 class="title3">
                <a
                  href="https://www.shantibhavanchildren.org/blog-post/the-majoritys-minority/"
                  id="the-majoritys-minority"
                >
                  The Majority’s Minority
                </a>
              </h2>
              <a
                href="https://www.shantibhavanchildren.org/blog-post/the-majoritys-minority/"
                aria-label="Read more about The Majority’s Minority"
                class="more"
              >
                Read More
              </a>
            </article>
          </div>


          <div class="loader-container">
            <a href="https://www.shantibhavanchildren.org/blog/page/2/">
              Load More
            </a>{" "}
            <div class="loading">
              <div class="loading-animation"></div>
              <span class="meta">Loading More</span>
            </div>
          </div>
        </div>
      </section>
      </Layout>
  );
}



