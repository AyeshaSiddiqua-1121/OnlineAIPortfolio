import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import spacehacker from '../assets/home-section/braincomp.png'
import useMediaQuery from '../hooks/useMediaQuery';
import MainCard from '../components/Cards/MainCard';
import ContactForm from './ContactForm';
function LandingPage() {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState("");
  const [boxName, setBoxName] = useState('');
  const [isBoxClicked, setIsBoxClicked] = useState(false)
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-y-16 py-10 "
    >
      <div class="grid grid-cols-6 gap-16 z-10 mt-[900px] max-[1100px]:mt-[3000px] max-[700px]:mt-0 max-[1058px]:mt-[70px] max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:items-center  ">
        <div class="col-span-4  grid-rows-4 grid-flow-col  ">
          <div class="row-span-2 col-span-2 flex gap-x-2 ">
            <div class="col flex gap-x-2">
              <motion.div
                className=" min-w-[550px] max-[700px]:min-w-[300px] max-[1100px]:min-w-[400px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-6xl text-dark-purple font-Aladin z-10 text-center md:text-start mt-10 flex flex-col">
                  FULL STACK DEVELOPER
                  <span className="xs:relative xs:text-purple xs:font-semibold z-10">
                    (MERN)
                  </span>
                </p>
                <p className="mt-4 font-Dosis font-light text-xl">
                  Hi, I'm Ayesha Siddiqua, a full-stack developer, experienced
                  in building and deploying web applications using the MERN
                  stack (MongoDB, Express.js, React, and Node.js).
                </p>
                <p className="mt-4 font-Dosis font-light text-xl">
                  I have a passion for creating intuitive and user-friendly web
                  experiences, and I am constantly looking to improve my skills
                  and stay up-to-date with the latest developments in web
                  development. I have experience in both front-end and back-end
                  technologies and I have a good understanding of web
                  development best practices.
                </p>
                <p className="mt-4 font-Dosis font-light text-xl">
                  Let's connect with each other.
                </p>
                <button class=" mt-4 px-4 py-2 rounded-default bg-orange font-Dosis text-xl text-normal">
                  Contact Me
                </button>
              </motion.div>
            </div>
            {isAboveMediumScreens ? (
              <div className="col flex ">
                <img
                  src={spacehacker}
                  className="hover:filter hover:saturate-200  transition duration-500 z-10 w-full min-w-[500px] min-h-[400px] max-w-[200px] md:max-w-[200px]"
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <div class="row-span-3 max-[1100px]:w-[800px] max-[700px]:w-[600px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="text-5xl text-dark-purple font-Aladin z-10 text-center md:text-start mt-10">
                Services And Collaboration
                {/* <span className="xs:relative xs:text-orange xs:font-semibold z-10">
                  (MERN)
                </span> */}
              </p>
              <p className="mt-4 font-Dosis font-light text-xl">
                Open for individual work as well as industrial project
                collaboration.
              </p>

              <p>
                <ul class="mb-8 space-y-4 text-left text-dark-purple text-semibold mt-4 font-Dosis text-xl">
                  <li class="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-9 h-9 bg-yellow rounded-large  dark:text-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Complete range of full-stack web development services
                      using the MERN stack, including project planning, design,
                      development, testing, and deployment
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-9 h-9 bg-yellow rounded-large dark:text-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      User-friendly interfaces using React and other front-end
                      technologies such as MUI, Tailwind, Framer Motion, Vuexy
                      and event custom themes.
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-9 h-9 bg-yellow rounded-large dark:text-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Building scalable and performant back-end systems using
                      Node.js and Express.js. I can work with SQL and NoSQL
                      databases
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-9 h-9 bg-yellow rounded-large dark:text-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      UI/UX Designing is my passion. Custom UI components and
                      implement responsive design to ensure your web application
                      looks great on any device
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-9 h-9 bg-yellow rounded-large dark:text-purple"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Provide consultation and training services to help your
                      team understand and work with the MERN stack and other web
                      development technologies
                    </span>
                  </li>
                </ul>
              </p>
            </motion.div>
          </div>
          <div class="row-span-3 flex w-[800px] md:w-full md:justify-start  justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="text-5xl text-dark-purple font-Aladin z-10 text-center md:text-start mt-10">
                Any Queries
              </p>
              <p className="mt-4 font-Dosis font-light text-xl">
                Feel free to have any queries
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
        <div class="col-start-5 col-span-2 ">
          <div className="flex flex-col gap-y-6  ">
            <MainCard
              cardTitle="My Skills"
              cardDescription="What i know, is build based on this skillset"
              cardBgColor="grey"
              roundedByBottom="bl-large"
              roundedByTop="tl-large"
            />
            <MainCard
              cardTitle="Experience"
              cardDescription="In which companies, I have contributed "
              cardBgColor="grey"
            />
            <MainCard
              cardTitle="Projects"
              cardDescription="Passion, effort and collaboration with best teams"
              cardBgColor="dark-purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage