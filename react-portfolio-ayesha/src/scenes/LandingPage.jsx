import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import spacehacker from '../assets/home-section/braincomp.png'
import useMediaQuery from '../hooks/useMediaQuery';
import MainCard from '../components/Cards/MainCard';
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
      {/* <div className="z-30 basis-2/5 mt-12 md:mt-16">
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
          <p className="text-6xl font-MajorMonoDisplay z-10 text-center md:text-start">
            AYESHA SIDDIQUA{" "}
            <span className="xs:relative xs:text-orange xs:font-semibold z-20">
              PORTFOLIO
            </span>
          </p>
        </motion.div>
      </div>
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-6 md:mt-4 ">
        {isAboveMediumScreens ? (
          <img
            src={spacehacker}
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[600px]"
            alt=""
          />
        ) : null}
        <div className='flex flex-col gap-y-10'>
          <div class="box-border h-96 w-96 p-4  rounded-bl-large bg-grey shadow-lg drop-shadow-2xl bg-opacity-10   rounded-tl-large">
            <p className="text-white">Hi</p>
            Hi, there
          </div>
          <div class="box-border h-96 w-96 p-4  rounded-bl-large bg-light-orange shadow-lg drop-shadow-2xl bg-opacity-10   rounded-tl-large">
            <p className="text-white">Hi</p>
            Hi, there
          </div>
        </div>
        
      </div> */}
      <div class="grid grid-cols-6 gap-16 z-10 mt-[500px]">
        <div class="col-span-4  grid-rows-4 grid-flow-col flex flex-col ">
          <div class="row-span-2 col-span-2 flex gap-x-2 ">
            <div class="col flex gap-x-2">
              <motion.div
                className=" min-w-[550px] "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-6xl font-MajorMonoDisplay z-10 text-center md:text-start">
                  AYESHA SIDDIQUA{" "}
                  <span className="xs:relative xs:text-orange xs:font-semibold z-10">
                    PORTFOLIO
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore ratione debitis necessitatibus! Exercitationem
                  voluptatem consectetur ea ratione fuga cum laudantium quis!
                  Assumenda iure itaque quo quibusdam architecto! Ea, nemo
                  voluptatum!
                </p>
                <button class="rounded-full">Save Changes</button>
              </motion.div>
            </div>
            {isAboveMediumScreens ? (
              <div className="col flex ">
                <img
                  src={spacehacker}
                  className="hover:filter hover:saturate-200  transition duration-500 z-10 w-full min-w-[450px] min-h-[400px] max-w-[200px] md:max-w-[200px]"
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <div class="row-span-3">
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
              <p className="text-6xl font-Dosis z-10 text-center md:text-start">
                SECOND DIV{" "}
                <span className="xs:relative xs:text-orange xs:font-semibold z-20">
                  PORTFOLIO
                </span>
              </p>
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
              cardTitle="Projects"
              cardDescription="Passion, effort and collaboration with best teams"
              cardBgColor="grey"
            />
            <MainCard
              cardTitle="Experience"
              cardDescription="In which companies, I have contributed "
              cardBgColor="dark-purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage