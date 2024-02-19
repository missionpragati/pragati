// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-top flex">
          <div className="newsletter">
            <h2 className="title3">Stay up to date with Pragati Mission</h2>
            
            <div
              class="gf_browser_unknown gform_wrapper gravity-theme general-form_wrapper"
              id="gform_wrapper_2"
            >
              <div id="gf_2" class="gform_anchor" tabindex="-1"></div>
              <div class="gform_heading">
                <p class="gform_required_legend">
                  &quot;
                  <span class="gfield_required gfield_required_asterisk">
                    *
                  </span>
                  &quot; indicates required fields
                </p>
              </div>


              {/* <form
                method="post"
                enctype="multipart/form-data"
                target="gform_ajax_frame_2"
                id="gform_2"
                class="general-form"
                action="/#gf_2"
                novalidate
              >
                <div class="gform_body gform-body">
                  <div
                    id="gform_fields_2"
                    class="gform_fields top_label form_sublabel_below description_below"
                  >
                    <div
                      id="field_2_1"
                      class="gfield gfield--width-full third gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                      data-js-reload="field_2_1"
                    >
                      <label class="gfield_label" for="input_2_1">
                        First Name
                        <span class="gfield_required">
                          <span class="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div class="ginput_container ginput_container_text">
                        <input
                          name="input_1"
                          id="input_2_1"
                          type="text"
                          value=""
                          class="large"
                          placeholder="First Name"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                    </div>
                    <div
                      id="field_2_4"
                      class="gfield gfield--width-full third gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                      data-js-reload="field_2_4"
                    >
                      <label class="gfield_label" for="input_2_4">
                        Last Name
                        <span class="gfield_required">
                          <span class="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div class="ginput_container ginput_container_text">
                        <input
                          name="input_4"
                          id="input_2_4"
                          type="text"
                          value=""
                          class="large"
                          placeholder="Last Name"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                    </div>
                    <div
                      id="field_2_3"
                      class="gfield third gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible"
                      data-js-reload="field_2_3"
                    >
                      <label class="gfield_label" for="input_2_3">
                        Email Address
                        <span class="gfield_required">
                          <span class="gfield_required gfield_required_asterisk">
                            *
                          </span>
                        </span>
                      </label>
                      <div class="ginput_container ginput_container_email">
                        <input
                          name="input_3"
                          id="input_2_3"
                          type="email"
                          value=""
                          class="large"
                          placeholder="Email Address"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>
                    </div>
                    <div
                      id="field_2_5"
                      class="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"
                      data-js-reload="field_2_5"
                    >
                      <label class="gfield_label" for="input_2_5">
                        Comments
                      </label>
                      <div class="ginput_container">
                        <input
                          name="input_5"
                          id="input_2_5"
                          type="text"
                          value=""
                          autocomplete="new-password"
                        />
                      </div>
                      <div
                        class="gfield_description"
                        id="gfield_description_2_5"
                      >
                        This field is for validation purposes and should be left
                        unchanged.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gform_footer top_label">
                  <input
                    type="submit"
                    id="gform_submit_button_2"
                    class="gform_button button btn"
                    value="Sign Up"
                    onclick='if(window["gf_submitting_2"]){return false;}  if( !jQuery("#gform_2")[0].checkValidity || jQuery("#gform_2")[0].checkValidity()){window["gf_submitting_2"]=true;}  '
                    onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_2"]){return false;} if( !jQuery("#gform_2")[0].checkValidity || jQuery("#gform_2")[0].checkValidity()){window["gf_submitting_2"]=true;}  jQuery("#gform_2").trigger("submit",[true]); }'
                  />
                  <input
                    type="hidden"
                    name="gform_ajax"
                    value="form_id=2&amp;title=&amp;description=&amp;tabindex=0"
                  />
                  <input
                    type="hidden"
                    class="gform_hidden"
                    name="is_submit_2"
                    value="1"
                  />
                  <input
                    type="hidden"
                    class="gform_hidden"
                    name="gform_submit"
                    value="2"
                  />

                  <input
                    type="hidden"
                    class="gform_hidden"
                    name="gform_unique_id"
                    value=""
                  />
                  <input
                    type="hidden"
                    class="gform_hidden"
                    name="state_2"
                    value="WyJbXSIsIjk5NWU5MTlhYjkxZjUzMDQ4ZjljODU3ZjBmYjc5ZjkyIl0="
                  />
                  <input
                    type="hidden"
                    class="gform_hidden"
                    name="gform_target_page_number_2"
                    id="gform_target_page_number_2"
                    value="0"
                  />
                  <input
                    type="hidden"
                    class="gform_hidden"
                    name="gform_source_page_number_2"
                    id="gform_source_page_number_2"
                    value="1"
                  />
                  <input type="hidden" name="gform_field_values" value="" />
                </div>
                <p style="display: none !important">
                  <label>
                    &#916;
                    <textarea
                      name="ak_hp_textarea"
                      cols="45"
                      rows="8"
                      maxlength="100"
                    ></textarea>
                  </label>
                  <input type="hidden" id="ak_js_1" name="ak_js" value="125" />
                 
                </p>
              </form> */}



            </div>
            <iframe
              style={{ backgroundImage:"display: none; width: 0px; height: 0px"}}
              src="about:blank"
              name="gform_ajax_frame_2"
              id="gform_ajax_frame_2"
              title="This iframe contains the logic required to handle Ajax powered Gravity Forms."
            ></iframe>
          </div>
          <div class="footer-contact">
            <div class="logo-social flex">
              <a
                href="https://www.shantibhavanchildren.org"
                class="footer-logo"
              >
                {/* <img
                  src="images/pragati mission logo.jpg"
                  alt="Shanti Bhavan Children&#039;s Project"
                /> */}
              </a>
              <nav class="social">
                <a
                  href="https://www.facebook.com/ShantiBhavan/"
                  target="_blank"
                >
               
                </a>
                <a href="https://twitter.com/ShantiBhavan" target="_blank">
                 
                </a>
                <a
                  href="https://www.youtube.com/user/ShantiBhavanSchool"
                  target="_blank"
                >
                </a>
                <a
                  href="https://www.instagram.com/shanti_bhavan/"
                  target="_blank"
                >
                 
                </a>
                <a
                  href="https://www.linkedin.com/company/shanti-bhavan-children's-project/?viewAsMember=true"
                  target="_blank"
                >
                
                </a>
              </nav>
            </div>
            <div class="footer-addresses flex">
              <address>
                <strong>United States</strong>
                <p>
                  Shanti Bhavan Childrens Project
                  <br />
                  12819 SE 38th St. #48 <br />
                  Bellevue, WA 98006, USA
                  <br />
                  <a href="/cdn-cgi/l/email-protection#8be2e5ede4cbf8e3eae5ffe2e9e3eafdeae5e8e3e2e7eff9eee5a5e4f9ec">
                    <span
                      class="__cf_email__"
                      data-cfemail="c0a9aea6af80b3a8a1aeb4a9a2a8a1b6a1aea3a8a9aca4b2a5aeeeafb2a7"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </p>
              </address>
              <address>
                <strong>India</strong>
                <p>
                  Shanti Bhavan Educational Trust – HO
                  <br />
                  # 406, 6th B Main Road
                  <br />
                  2nd Block; HRBR layout
                  <br />
                  Bangalore – 560 043
                </p>
              </address>
            </div>
          </div>
        </div>
        <div class="footer-bottom flex">
          <div class="footer-awards flex">
            {/* <img
              width="350"
              height="350"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/07/gximage2021-350x350.png"
              class="attachment-logo size-logo"
              alt=""
              loading="lazy"
            /> */}
            {/* <img
              width="300"
              height="225"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2023/10/2023-top-rated-awards-badge-embed.png"
              class="attachment-logo size-logo"
              alt=""
              loading="lazy"
            /> */}
            {/* <img
              width="350"
              height="323"
              src="https://www.shantibhavanchildren.org/wp-content/uploads/2022/06/GG-2019-staffFavorite_large-350x323.png"
              class="attachment-logo size-logo"
              alt=""
              loading="lazy"
            /> */}
          </div>
          <div class="copyright-nav flex">
            <nav class="footer-nav">
              <ul id="menu-footer-menu" class="">
                <li
                  id="menu-item-1181"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1181"
                >
                  <a
                    rel="privacy-policy"
                    href="https://www.shantibhavanchildren.org/privacy-policy/"
                  >
                    Terms and Privacy
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright">
              <span>&copy; 2024 Shanti Bhavan Children&#039;s Project</span>
              <span class="jackrabbit">
                <a
                  href="https://www.jumpingjackrabbit.com"
                  title="Website Design by Jackrabbit"
                  target="_blank"
                >
                  Website Design
                </a>
                by
                <a
                  href="https://www.jumpingjackrabbit.com"
                  title="Website Design by Jackrabbit"
                  target="_blank"
                >
                  Jackrabbit
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
