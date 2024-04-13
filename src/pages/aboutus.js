import Layout from "@/component/layout";
import React from "react";

export default function Aboutus() {
  return (
    <Layout>
      <div className="page-title">
        <div className="wrap">
          <h1>About Us</h1>
        </div>
      </div>
      <section className="featured">
        <div
          className="featured-image rounded"
          //   style="backgroundImage: "url('https://www.shantibhavanchildren.org/wp-content/uploads/2022/07/KP_IMG_0320-1500x800.png')"
          style={{
            backgroundImage: `url(https://www.shantibhavanchildren.org/wp-content/uploads/2022/07/KP_IMG_0320-1500x800.png")`,
          }}
        ></div>
        <div className="wrap small">
          <div className="featured-content rounded tilt">
            <div
              className="featured-image-mobile"
              //   style="background-image: url(https://www.shantibhavanchildren.org/wp-content/uploads/2022/07/KP_IMG_0320-1500x800.png)"
            ></div>
            <div className="featured-text tilt-content">
              <h2>Shanti Bhavan Redefines Nonprofit Education</h2>
              <p>
                By providing 17 years of educational intervention, Shanti
                Bhavan's approach is long-term and unprecedented. From their
                first day of school to their first day of work, and even beyond,
                Shanti Bhavan supports its children in every facet of their
                lives.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Philosophy is Simple</h2>
          <p>
            <p>
              One underserved child, given the same opportunities as other
              children, can break the cycle of systemic, generational poverty
              for themselves and many others. For over 25 years, our nonprofit
              has helped children in India achieve an education, from preschool
              to high school and beyond. With our dedicated international team
              and the support of our family of partners, sponsors, and
              individual donors, hundreds of Shanti Bhavan children have earned
              advanced degrees, built careers, and uplifted their families from
              poverty. More than that, these children give hope to their
              communities and bring change to the world.
            </p>
          </p>
          <a
            href="https://www.shantibhavanchildren.org/impact/"
            title="Learn More"
            target=""
            className="btn"
            id=""
          >
            <span>Learn More</span>
          </a>
        </div>
      </section>

      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our History is Achievement</h2>
          <p>
            <p>
              In 1997, Shanti Bhavan Residential School opened its doors in
              Baliganapalli, India, welcoming its first 48 preschoolers. In the
              25 years since, hundreds of children have graduated from Shanti
              Bhavan, earned college degrees, and gone on to prominent careers
              in finance, technology, medicine, entrepreneurship, and more.
            </p>
          </p>
          <a
            href="https://www.shantibhavanchildren.org/blog-post/the-history-of-shanti-bhavan/"
            title="Learn More"
            target=""
            className="btn"
            id=""
          >
            <span>Learn More</span>
          </a>
        </div>
        <div className="wrap">
          <div className="stats flex">
            <div className="stat rounded tilt">
              <strong>97%</strong>
              <p>High school retention rate</p>
            </div>
            <div className="stat rounded tilt">
              <strong>98%</strong>
              <p>Graduate from college</p>
            </div>
            <div className="stat rounded tilt">
              <strong>97%</strong>
              <p>Employed in full-time jobs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Mission is Dignity</h2>
          <p>
            <p>
              Shanti Bhavan&#8217;s children all come from extreme poverty. At
              our school, they find a safe and welcoming place, one that
              encourages self-exploration and personal growth{" "}
              <a href="https://shantibhavan.wpengine.com/blog-post/the-shanti-bhavan-curriculum/">
                alongside traditional education
              </a>
              . With the support of our educators and volunteers, our students
              face the future with confidence and dignity.
            </p>
          </p>
        </div>
        <div className="wrap">
          <ul className="icon-row flex">
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_food.svg"
                className="attachment- size-"
                alt=""
              />
              <span className="title3">Food</span>
            </li>
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_shelter.svg"
                className="attachment- size-"
                alt=""
              />
              <span className="title3">Housing</span>
            </li>
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_clothing.svg"
                className="attachment- size-"
                alt=""
              />
              <span className="title3">Clothing</span>
            </li>
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_community.svg"
                className="attachment- size-"
                alt=""
                loading="lazy"
              />
              <span className="title3">Community</span>
            </li>
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_medical-care.svg"
                className="attachment- size-"
                alt=""
                loading="lazy"
              />
              <span className="title3">Medical Care</span>
            </li>
          </ul>
          <div className="add-icon-row"></div>
          <ul className="icon-row flex">
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_academics.svg"
                className="attachment- size-"
                alt=""
                loading="lazy"
              />
              <span className="title3">Academics</span>
            </li>
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_leadership.svg"
                className="attachment- size-"
                alt=""
                loading="lazy"
              />
              <span className="title3">Leadership</span>
            </li>
            <li>
              <img
                width="120"
                height="110"
                // src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_values.svg"
                className="attachment- size-"
                alt=""
                loading="lazy"
              />
              <span className="title3">Values</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Educational Model is Unprecedented</h2>
          <p>
            <p>
              <span>
                Shanti Bhavan children live in two worlds: the impoverished
                villages and neighborhoods of their birth, and the{" "}
              </span>
              <a href="https://shantibhavan.wpengine.com/blog-post/the-shanti-bhavan-campus-dorms-classNamerooms-and-food/">
                <span>beautiful Shanti Bhavan campus</span>
              </a>
              <span>
                {" "}
                where they go to school. Even at young ages, they take what they
                learn home and share with others. As graduates, they support
                their families, ensure that their siblings go to school, and
                advocate for the less fortunate.{" "}
              </span>
              <a href="https://shantibhavan.wpengine.com/blog-post/core-values/">
                <span>The Shanti Bhavan approach</span>
              </a>
              <span>
                {" "}
                creates leaders and change-makers for India&#8217;s most
                marginalized communities.
              </span>
            </p>
          </p>
        </div>
      </section>
      <section className="callout model connected">
        <div className="wrap small">
          <h2 className="big">Our Approach is Holistic</h2>
          <p>
            <p>
              <span>
                Shanti Bhavan takes many different approaches to give our
                children the best possible experience and equip them for a
                bright future. In addition to a high-quality education that
                meets the robust India School Certificate (ISC) standards, we
                help our children explore their potential with social
                engagement,{" "}
              </span>
              <a href="https://www.shantibhavanchildren.org/blog-post/extracurricular-activities-at-shanti-bhavan/">
                <span>after-school activities</span>
              </a>
              <span>, and guidance from educators and </span>
              <a href="https://www.shantibhavanchildren.org/blog-post/volunteer-experience/">
                <span>volunteers</span>
              </a>
              <span>
                . We make sure our children are ready to learn by giving them
                the essentials of a safe and happy childhood, including modern
                dormitories, great food, toys and games, and lots of love.
              </span>
            </p>
          </p>
        </div>
        <div className="wrap">
          <div className="model rounded">
            <div className="model-title">
              <h3 className="title2 rounded tilt">Shanti Bhavan Model</h3>
            </div>
            <ul className="flex">
              <li>
                <img
                  width="120"
                  height="110"
                  //   src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_education.svg"
                  className="attachment- size-"
                  alt=""
                  loading="lazy"
                />
                <span className="title3">High Quality Education</span>
              </li>
              <li>
                <img
                  width="120"
                  height="110"
                  //   src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_happy-childhood.svg"
                  className="attachment- size-"
                  alt=""
                  loading="lazy"
                />
                <span className="title3">
                  Essentials of a Safe & Happy Education
                </span>
              </li>
              <li>
                <img
                  width="120"
                  height="110"
                  //   src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_humanitarian-values.svg"
                  className="attachment- size-"
                  alt=""
                  loading="lazy"
                />
                <span className="title3">Humanitarian Values</span>
              </li>
              <li>
                <img
                  width="120"
                  height="110"
                  //   src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_social.svg"
                  className="attachment- size-"
                  alt=""
                  loading="lazy"
                />
                <span className="title3">Social Skills</span>
              </li>
              <li>
                <img
                  width="120"
                  height="110"
                  //   src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_activities.svg"
                  className="attachment- size-"
                  alt=""
                  loading="lazy"
                />
                <span className="title3">Extracurricular Activities</span>
              </li>
              <li>
                <img
                  width="120"
                  height="110"
                  //   src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/icon_guidance.svg"
                  className="attachment- size-"
                  alt=""
                  loading="lazy"
                />
                <span className="title3">Guidance Beyond Shanti Bhavan</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Work is Global</h2>
          <p>
            <p>
              Shanti Bhavan is a global team of educators, advisors,
              professionals, and volunteers united by Shanti Bhavan&#8217;s
              mission of ending poverty. In India, our teachers, faculty,
              caregivers, and administrators oversee operation of the Shanti
              Bhavan Residential School. In the United States and abroad, the
              Shanti Bhavan Children&#8217;s Project manages fundraising,
              partnerships, sponsorships, overseas education, and special
              projects. Our chapters in Canada, the United Kingdom, Australia,
              Germany, and Italy fundraise in their respective countries.
            </p>
          </p>
        </div>
        <div className="wrap medium">
          <img
            width="760"
            height="500"
            // src="https://www.shantibhavanchildren.org/wp-content/uploads/2021/08/History1-760x500.jpg"
            className="rounded tilt"
            alt="Dr. George walking outside with students"
            loading="lazy"
          />
        </div>
      </section>
      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Strength is Our Team</h2>
          <p>
            <p>
              The team at Shanti Bhavan is committed to creating change and
              breaking the cycle of poverty. They give tirelessly of their time,
              working around the clock and around the globe to provide our
              children with their best opportunities in life.
            </p>
          </p>
          <a
            href="https://www.shantibhavanchildren.org/team/"
            title="Our Team"
            target=""
            className="btn"
            id=""
          >
            <span>Our Team</span>
          </a>
        </div>
      </section>
      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Partners are Essential</h2>
          <p>
            <p>
              <span>
                We are proud to share our mission with many corporate and
                nonprofit partners from around the world. These companies and
                organizations help strengthen the commitment to giving our
                children the best opportunities through new classNameroom
                technology, mentorship programs, and exposure to new people and
                ideas.
              </span>
            </p>
          </p>
          <a
            href="https://www.shantibhavanchildren.org/partners/"
            title="Our Partners"
            target=""
            className="btn"
            id=""
          >
            <span>Our Partners</span>
          </a>
        </div>
      </section>

      <section className="callout connected">
        <div className="wrap small">
          <h2 className="big">Our Success Depends on You</h2>
          <p>
            <p>
              Shanti Bhavan is funded by individual and corporate donors. Your
              donation helps lift a child out of generational poverty, attain a
              quality education, and go on to a career that supports their
              family and community.
            </p>
          </p>
          <a
            href="https://www.shantibhavanchildren.org/donate/"
            title="Donate Now"
            target=""
            className="btn"
            id=""
          >
            <span>Donate Now</span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
