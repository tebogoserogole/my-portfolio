import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import cartoon from "../public/dev-ed-wave.png";

import uniwise from "../public/uniwise.png";
import figout from "../public/figout.png";
import campus_store from "../public/campus_store.png";
import tut_chatbot from "../public/tut_chatbot.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tebogo Serogole</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I am a full stack developer with a keen
              eye for detail and a passion for creating engaging web and mobile
              applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-5">
        <section>
          <nav className=" py-10 px-4 mb-12 flex justify-between">
            <h1 className=" text-xl font-semibold">Tebogo</h1>
            <a
              className="bg-blue-800 px-5 py-2 rounded-lg text-white ml-8"
              href=""
            >
              Resume
            </a>
          </nav>
          <div className="relative mx-auto mt-10 bg-blue-500 rounded-full w-72 h-72 overflow-hidden">
            <Image src={cartoon} fill style={{ objectFit: "cover" }} />
          </div>
          <div className="p-5 text-center">
            <h2 className="text-3xl py-2 text-blue-800 font-medium">
              Tebogo Serogole
            </h2>
            <h3 className="py-2 text-2xl">Full-stack developer</h3>
            <p className="leading-6 ">
              Welcome to my portfolio! I am a full stack developer with a keen
              eye for detail and a passion for creating engaging web and mobile
              applications. I have experience in frameworks such as Flutter,
              Next.js, Node.js, and Native Android development
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-5">
            <a href="">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/tebogoserogole">
              <AiFillGithub />
            </a>
          </div>
        </section>

        <section className="xl:mx-40">
          <div className="mb-5">
            <h3 className="mt-10 text-2xl font-semibold mb-1">My Projects</h3>
            <p className=" leading-6">
              Take a look at my latest projects to see how I can help bring your
              online presence to life!
            </p>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1">
              <div className=" relative rounded-3xl h-72 overflow-hidden mb-2">
                <Image src={uniwise} fill style={{ objectFit: "cover" }} />
              </div>
              <ul className="flex justify-between mt-5">
                <li>
                  <h3 className="text-2xl font-semibold mb-2">UniWise</h3>
                </li>
                <li>
                  <a
                    className="bg-blue-800 px-5 py-2 rounded-lg text-white ml-8"
                    href="https://uniwise.co.za/"
                  >
                    Check it out
                  </a>
                </li>
              </ul>
              <p className="leading-6 ">
                UniWise summarizes different University Prospectuses making it
                easier for students to view courses offered by South African
                universities & courses they qualify for based on their grade
                11/12 results
              </p>
              <h3 className="text-green-900 my-2 font-medium text-lg">
                Tech Specification
              </h3>
              <ul className="mb-5 list-disc p-2">
                <li>
                  {"Frameworks: Flutter, React (Next.js & Tailwind) & Node.js"}
                </li>
                <li>JavaScript, Dart, HTML, WordPress</li>
                <li>Firebase- Auth, Firestore & Cloud Functions</li>
                <li>Google Cloud Run & Docker</li>
                <li>GitHub Actions</li>
                <li>Google Analytics</li>
                <li>Postman - API Testing</li>
              </ul>
            </div>

            <div className="basis-1/3 flex-1">
              <div className="rounded-3xl relative h-72 overflow-hidden mb-2">
                <Image src={figout} fill style={{ objectFit: "cover" }} />
              </div>

              <ul className="flex justify-between mt-5">
                <li>
                  <h3 className="text-2xl font-semibold mb-2">Figout</h3>
                </li>
                <li>
                  <a
                    className="bg-blue-800 px-5 py-2 rounded-lg text-white ml-8"
                    href="https://figout.co.za/"
                  >
                    Check it out
                  </a>
                </li>
              </ul>

              <p className="leading-6 ">
                Figout provides step-by-step solutions for a wide range of
                textbook problems in various subjects
              </p>
              <h3 className="text-green-900 my-2 font-medium text-lg">
                Tech Specifications:
              </h3>
              <div className="md:flex md:gap-5">
                <div>
                  <ul className="mb-5 list-disc p-2">
                    <li>
                      {
                        "Frameworks: Flutter, React (Next.js & Tailwind) & Node.js"
                      }
                    </li>
                    <li>MongoDB Atlas & Firebase</li>
                    <li>JavaScript, Dart, HTML</li>
                    <li>Google Cloud Run & Docker</li>
                    <li>GitHub Actions</li>
                    <li>Postman - API Testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1">
              <div className="rounded-3xl relative border-2 h-72 overflow-hidden mb-2">
                <Image src={tut_chatbot} style={{ objectFit: "cover" }} />
              </div>

              <h3 className="text-2xl mb-2 font-semibold mt-5">
                TUT Application tracker on Whatsapp
              </h3>

              <p className="leading-6">
                {`A ChatBot that enables TUT applicants to check their statuses on
                WhatsApp if they don't have Internet Data Bundles`}
              </p>
              <h3 className="text-green-900 font-medium text-lg">
                Tech Specification
              </h3>
              <ul className="mb-5 list-disc p-2">
                <li>Framework: Node.js</li>
                <li>Twilio - WhatsApp Business API</li>
                <li>Firebase - Firestore & Cloud Functions</li>
                <li>JavaScript</li>
                <li>Postman - API Testing</li>
              </ul>
            </div>

            <div className="basis-1/3 flex-1">
              <div className="rounded-3xl relative h-72 overflow-hidden mb-2">
                <Image src={campus_store} style={{ objectFit: "cover" }} />
              </div>

              <ul className="flex justify-between mt-5">
                <li>
                  <h3 className="text-2xl font-semibold mb-2">Campus Store</h3>
                </li>
                <li>
                  <a
                    className="bg-blue-800 px-5 py-2 rounded-lg text-white ml-8"
                    href="https://play.google.com/store/apps/details?id=za.co.campusstore"
                  >
                    Check it out
                  </a>
                </li>
              </ul>

              <p className="leading-6">
                An app that provides a free medium for buying and selling
                pre-owned books and stationery
              </p>
              <h3 className="text-green-900 font-medium text-lg">
                Tech Specifications
              </h3>
              <ul className="mb-5 list-disc p-2">
                <li>Native Android App Development</li>
                <li>Java</li>
                <li>
                  Firebase - Auth, Firestore, Database, Cloud Storage & Cloud
                  Functions
                </li>
                <li>Android Studio</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
