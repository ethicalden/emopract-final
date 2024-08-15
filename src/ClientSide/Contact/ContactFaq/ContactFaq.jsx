// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ContactFaq = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className="sectionGap">
      <p className="contactFaqHub md:text-center lg:text-left">FAQ</p>
      <h2 className="contactFaqTitle md:text-center lg:text-left">
        frequently asked questions
      </h2>

      {/* ============= contact faq ============ */}

      <div
        className=" 
      "
      >
        <div className=" space-y-[10px] lg:space-y-[20px] 2xl:space-y-[40px]">
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(1)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  How to be a part of the emopract family?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 1 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 1 && (
              <div>
                <p className="faqAccordianTitleText">
                  HELLO! Thank you for your interest in our services. You are
                  just a step away from making one of the best decisions of your
                  life. <br /> <br />
                  If you want to know more about our services for your loved
                  one/s, please call us or WhatsApp at 9230977337 from 9.30am to
                  6pm on weekdays/ Monday to Saturday. You can also visit our
                  website and click on Apply Membership. Please fill up the form
                  and you will receive a call within the next working day.
                </p>
              </div>
            )}
            <hr />
          </div>

          {/* ================= faq item two =============== */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(2)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  Can I speak to an existing member to know more about emopract?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 2 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 2 && (
              <div>
                <p className="faqAccordianTitleText">
                  You can freely talk to our existing members to know about
                  their emopract experience. It will help you to understand how
                  we assist seniors and cater to their holistic comfort in their
                  homes. Please contact us and we will surely assist you. To
                  know more about our vision, mission, beliefs and values, you
                  can also watch the videos and channels linked to our website.
                </p>
              </div>
            )}
            <hr />
          </div>

          {/* ================= faq item three =============== */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(3)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  Who forms the emopract team, and how will they be assigned to
                  members?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 3 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 3 && (
              <div>
                <p className="faqAccordianTitleText">
                  Emopract’s Joys of Living Stars and Wellness Buddies are
                  young, educated and dedicated professionals. We recruit them
                  after a very thorough background check, including meticulous
                  document verification and even a psychometry test. The
                  carefully handpicked candidates undergo rigorous training. We
                  assess the personalities and needs of our member before we
                  assign members of our team for them.
                </p>
              </div>
            )}
            <hr />
          </div>

          {/* ================= faq item four =============== */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(4)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  Emopract services are available in which cities?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 4 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 4 && (
              <div>
                <p className="faqAccordianTitleText">
                  Right now, we are operational in Greater Kolkata, but soon we
                  will expand to other metro, mini metro cities. Watch out for
                  our update
                </p>
              </div>
            )}
            <hr />
          </div>

          {/* ================= faq item five =============== */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(5)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  Can I upgrade to yearly membership anytime?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 5 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 5 && (
              <div>
                <p className="faqAccordianTitleText">
                  Yes, you can choose to upgrade from your quarterly membership
                  to our annual plan and avail of greater benefits. For details
                  please get in touch with us, happy to assist.
                </p>
              </div>
            )}
            <hr />
          </div>
          {/* ================= faq item six =============== */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(6)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  What type of events will emopract organize and what are the
                  charges?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 6 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 6 && (
              <div>
                <p className="faqAccordianTitleText">
                  emopract offers access to a diverse range of events and
                  activities, some paid and the others complimentary. To know
                  more, please visit our website, feel free to contact us, happy
                  to assist.
                </p>
              </div>
            )}
            <hr />
          </div>

          {/* ================= faq item seven =============== */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(7)}
            >
              <h6 className="faqAccordianHeadText relative z-20">
                <span className="z-20">
                  What does emopract do in an emergency?
                </span>
              </h6>
              <span className="transform transition-transform duration-300 ease-linear">
                {openAccordion === 7 ? (
                  <div className="FaqiconsParent">
                    <FaMinus className="text-white" />
                  </div>
                ) : (
                  <div className="FaqiconsParent">
                    <FaPlus className="text-white" />
                  </div>
                )}
              </span>
            </div>
            {openAccordion === 7 && (
              <div>
                <p className="faqAccordianTitleText">
                  If any emergency occurs, our on-ground staff is well informed
                  how to manage this situation through thoughtful action and
                  professional assistance.
                </p>
              </div>
            )}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;
