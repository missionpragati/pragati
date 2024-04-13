import Layout from "@/component/layout";
import React from "react";

export default function contactus() {
  return (
    <Layout>
      <div class="page-title">
        <div class="wrap">
          <h1>Contact</h1>
        </div>
      </div>
      <section class="content">
        <div class="wrap flex">
          <div class="content-main contact">
            <h2>Our Locations</h2>
            <div class="address-container flex">
              <address>
                <h3 class="title5">United States</h3>
                <p>
                  Shanti Bhavan Children's Project
                  <br />
                  12819 SE 38th St. #48 <br />
                  Bellevue, WA 98006, USA
                  <br />
                  <a href="/cdn-cgi/l/email-protection#5930373f36192a3138372d303b31382f38373a3130353d2b3c3777362b3e">
                    <span
                      class="__cf_email__"
                      data-cfemail="3e575058517e4d565f504a575c565f485f505d5657525a4c5b5010514c59"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </p>{" "}
              </address>
              <address>
                <h3 class="title5">India</h3>
                <p>
                  Shanti Bhavan Educational Trust – HO
                  <br />
                  # 406, 6th B Main Road
                  <br />
                  2nd Block; HRBR layout
                  <br />
                  Bangalore – 560 043
                </p>{" "}
              </address>
            </div>
            <p>
              We receive an extremely high volume of requests to visit campus.
              Though we love to hear from our supporters, we are unable to
              accommodate most requests, as our school schedule is highly
              structured for the benefit of our students’ learning. In some
              instances, we can accommodate a half-day visit to campus. Please
              note that we require at least 4 weeks notice in order to
              coordinate a visit. If you are interested in visiting campus,
              please contact us at{" "}
              <a href="/cdn-cgi/l/email-protection#2b42454d446b58434a455f4249434a5d4a45484342474f594e450544594c">
                <span
                  class="__cf_email__"
                  data-cfemail="c7aea9a1a887b4afa6a9b3aea5afa6b1a6a9a4afaeaba3b5a2a9e9a8b5a0"
                >
                  [email&#160;protected]
                </span>
              </a>{" "}
              to share your request.
            </p>
          </div>

          <div class="content-sub">
            <aside class="side-bucket side-content-colored rounded tilt">
              <h3>Get Involved</h3>
              <p>
                Check out our Get Involved page to learn how you can support
                Shanti Bhavan children in breaking the cycle of poverty.
              </p>
              <a
                href="https://www.shantibhavanchildren.org/get-involved/"
                title="Get Involved"
                target=""
                class="btn ghost"
                id=""
              >
                <span>Get Involved</span>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
