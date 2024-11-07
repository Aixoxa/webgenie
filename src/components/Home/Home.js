import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Step from "./Utils/Steps";
import {
  GenText,
  ImgUpload,
  FigmaDgn,
  ElectronFwrk,
  FileDownload,
  MicPrompt,
} from "./Utils/svgicons";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home_parent_container">
        <div className="hero_container">
          <h4>Your Design-to-code Genie, Just One Wish Away</h4>

          <h1>
            Turn <span>landing page design</span>
            <span>
              <img src="./images/layout.png" alt="" />
            </span>
            images into production-ready code
            <span>
              <img src="./images/code.png" alt="" />
            </span>
            <span>- Like Magic!</span>
            <span>
              <img src="./images/genie.png" alt="" />
            </span>
          </h1>
          <h3>
            Upload any landing page design and watch WebGenie transform it into
            clean, responsive HTML & CSS in seconds
          </h3>

          <h3>
            Use Webgenie - <span>For Free!</span>
          </h3>
        </div>

        <div className="home_mid_section">
          <div className="mid_container">
            <div className="item">
              <div className="icon_holder">
                <img src="./images/nib.png" alt="" />
              </div>

              <h3>Pixel-Perfect Accuracy</h3>
              <p>
                Our AI aligns code with design, minimizing developer-designer
                back-and-forth.
              </p>
            </div>
            <div className="item">
              <div className="icon_holder">
                <img src="./images/nib.png" alt="" />
              </div>

              <h3>Clean, Semantic Code</h3>
              <p>
                Use clean, semantic HTML and optimized CSS. Keep code lean and
                avoid unnecessary divs.
              </p>
            </div>
            <div className="item">
              <div className="icon_holder">
                <img src="./images/thunder.png" alt="" />
              </div>

              <h3>Instant Generation</h3>
              <p>
                Turn designs into production-ready code in seconds. What took
                hours now happens instantly.
              </p>
            </div>
          </div>
        </div>

        <div className="home_bottom_section">
          <h4>The roadmap of magic</h4>
          <h2>
            The Evolution of <span>Webgenie</span>
          </h2>
          <p>
            Discover our plans to continuously expand the power of
            design-to-code automation.
          </p>
          <div className="bottom_container">
            <Step
              icon={<GenText />}
              step="Phase 1"
              desc="Generate HTML/CSS projects from text prompts."
              timeline_end={false}
            />
            <Step
              icon={<ImgUpload />}
              step="Phase 2"
              desc="Generate HTML/CSS projects from image based prompts."
              timeline_end={false}
            />
            <Step
              icon={<MicPrompt />}
              step="Phase 3"
              desc="Enable voice prompts for project generation."
              timeline_end={false}
            />
            <Step
              icon={<FigmaDgn />}
              step="Phase 4"
              desc="Integrate Figma designs as input for project generation."
              timeline_end={false}
            />
            <Step
              icon={<FileDownload />}
              step="Phase 5"
              desc="Automate the downloading of fully functional project folders."
              timeline_end={false}
            />
            <Step
              icon={<ElectronFwrk />}
              step="Phase 6"
              desc="Expand to generate full framework-based projects like React, Angular, etc."
              timeline_end={true}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
