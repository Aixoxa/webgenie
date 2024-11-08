import React from "react";
import "./Playground.css";

function Playground() {
  return (
    <div className="playground_parent_container">
      <div className="toolbar_parent_container">
        <ul className="toolbar_container">
          <li>
            <img src="./images/logo.png" alt="" />
          </li>
          <li>
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.2893 11.5919L27.6173 10.8372C28.194 9.50219 29.2501 8.43179 30.5773 7.83723L31.5893 7.38523C31.7121 7.32875 31.8161 7.23825 31.889 7.12447C31.9619 7.01068 32.0006 6.87837 32.0006 6.74323C32.0006 6.60809 31.9619 6.47578 31.889 6.36199C31.8161 6.2482 31.7121 6.1577 31.5893 6.10123L30.6333 5.67589C29.2728 5.0644 28.1986 3.9544 27.632 2.57456L27.2946 1.7599C27.2451 1.6337 27.1587 1.52536 27.0466 1.449C26.9346 1.37263 26.8022 1.33179 26.6666 1.33179C26.5311 1.33179 26.3986 1.37263 26.2866 1.449C26.1746 1.52536 26.0882 1.6337 26.0386 1.7599L25.7013 2.57323C25.1353 3.95333 24.0616 5.06381 22.7013 5.67589L21.744 6.10256C21.6216 6.1592 21.5179 6.24968 21.4453 6.36333C21.3727 6.47697 21.3341 6.60902 21.3341 6.7439C21.3341 6.87877 21.3727 7.01082 21.4453 7.12446C21.5179 7.23811 21.6216 7.32859 21.744 7.38523L22.7573 7.83589C24.0842 8.43105 25.1399 9.50193 25.716 10.8372L26.044 11.5919C26.284 12.1439 27.048 12.1439 27.2893 11.5919ZM2.66663 5.33323C2.66663 4.97961 2.8071 4.64047 3.05715 4.39042C3.3072 4.14037 3.64634 3.99989 3.99996 3.99989H18.6666V6.66656H5.33329V25.3332H26.6666V14.6666H29.3333V26.6666C29.3333 27.0202 29.1928 27.3593 28.9428 27.6094C28.6927 27.8594 28.3536 27.9999 28 27.9999H3.99996C3.64634 27.9999 3.3072 27.8594 3.05715 27.6094C2.8071 27.3593 2.66663 27.0202 2.66663 26.6666V5.33323ZM9.33329 10.6666H22.6666V14.6666H20V13.3332H17.3333V18.6666H19.3333V21.3332H12.6666V18.6666H14.6666V13.3332H12V14.6666H9.33329V10.6666Z"
                  fill="#7B7B7B"
                />
              </svg>
            </span>
            <span>Text to code</span>
          </li>
          <li>
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.2893 11.5919L27.6173 10.8372C28.194 9.50219 29.2501 8.43179 30.5773 7.83723L31.5893 7.38523C31.7121 7.32875 31.8161 7.23825 31.889 7.12447C31.9619 7.01068 32.0006 6.87837 32.0006 6.74323C32.0006 6.60809 31.9619 6.47578 31.889 6.36199C31.8161 6.2482 31.7121 6.1577 31.5893 6.10123L30.6333 5.67589C29.2728 5.0644 28.1986 3.9544 27.632 2.57456L27.2946 1.7599C27.2451 1.6337 27.1587 1.52536 27.0466 1.449C26.9346 1.37263 26.8022 1.33179 26.6666 1.33179C26.5311 1.33179 26.3986 1.37263 26.2866 1.449C26.1746 1.52536 26.0882 1.6337 26.0386 1.7599L25.7013 2.57323C25.1353 3.95333 24.0616 5.06381 22.7013 5.67589L21.744 6.10256C21.6216 6.1592 21.5179 6.24968 21.4453 6.36333C21.3727 6.47697 21.3341 6.60902 21.3341 6.7439C21.3341 6.87877 21.3727 7.01082 21.4453 7.12446C21.5179 7.23811 21.6216 7.32859 21.744 7.38523L22.7573 7.83589C24.0842 8.43105 25.1399 9.50193 25.716 10.8372L26.044 11.5919C26.284 12.1439 27.048 12.1439 27.2893 11.5919ZM2.66663 5.33323C2.66663 4.97961 2.8071 4.64047 3.05715 4.39042C3.3072 4.14037 3.64634 3.99989 3.99996 3.99989H18.6666V6.66656H5.33329V25.3332H26.6666V14.6666H29.3333V26.6666C29.3333 27.0202 29.1928 27.3593 28.9428 27.6094C28.6927 27.8594 28.3536 27.9999 28 27.9999H3.99996C3.64634 27.9999 3.3072 27.8594 3.05715 27.6094C2.8071 27.3593 2.66663 27.0202 2.66663 26.6666V5.33323ZM9.33329 10.6666H22.6666V14.6666H20V13.3332H17.3333V18.6666H19.3333V21.3332H12.6666V18.6666H14.6666V13.3332H12V14.6666H9.33329V10.6666Z"
                  fill="#7B7B7B"
                />
              </svg>
            </span>
            <span>Image to code</span>
          </li>
          <li></li>
          <li>
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.2893 11.5919L27.6173 10.8372C28.194 9.50219 29.2501 8.43179 30.5773 7.83723L31.5893 7.38523C31.7121 7.32875 31.8161 7.23825 31.889 7.12447C31.9619 7.01068 32.0006 6.87837 32.0006 6.74323C32.0006 6.60809 31.9619 6.47578 31.889 6.36199C31.8161 6.2482 31.7121 6.1577 31.5893 6.10123L30.6333 5.67589C29.2728 5.0644 28.1986 3.9544 27.632 2.57456L27.2946 1.7599C27.2451 1.6337 27.1587 1.52536 27.0466 1.449C26.9346 1.37263 26.8022 1.33179 26.6666 1.33179C26.5311 1.33179 26.3986 1.37263 26.2866 1.449C26.1746 1.52536 26.0882 1.6337 26.0386 1.7599L25.7013 2.57323C25.1353 3.95333 24.0616 5.06381 22.7013 5.67589L21.744 6.10256C21.6216 6.1592 21.5179 6.24968 21.4453 6.36333C21.3727 6.47697 21.3341 6.60902 21.3341 6.7439C21.3341 6.87877 21.3727 7.01082 21.4453 7.12446C21.5179 7.23811 21.6216 7.32859 21.744 7.38523L22.7573 7.83589C24.0842 8.43105 25.1399 9.50193 25.716 10.8372L26.044 11.5919C26.284 12.1439 27.048 12.1439 27.2893 11.5919ZM2.66663 5.33323C2.66663 4.97961 2.8071 4.64047 3.05715 4.39042C3.3072 4.14037 3.64634 3.99989 3.99996 3.99989H18.6666V6.66656H5.33329V25.3332H26.6666V14.6666H29.3333V26.6666C29.3333 27.0202 29.1928 27.3593 28.9428 27.6094C28.6927 27.8594 28.3536 27.9999 28 27.9999H3.99996C3.64634 27.9999 3.3072 27.8594 3.05715 27.6094C2.8071 27.3593 2.66663 27.0202 2.66663 26.6666V5.33323ZM9.33329 10.6666H22.6666V14.6666H20V13.3332H17.3333V18.6666H19.3333V21.3332H12.6666V18.6666H14.6666V13.3332H12V14.6666H9.33329V10.6666Z"
                  fill="#7B7B7B"
                />
              </svg>
            </span>
            <span>Clear canvas</span>
          </li>
        </ul>

        <div className="upload_image_container">
          <div className="upload_container">
            <div className="header">
              <span>Upload image</span>
              <span>
                <img src="./images/close.png" alt="" />
              </span>
            </div>
            <div className="uploader">
              <input type="file" id="image-file" />
              <label htmlFor="image-file">
                <span>
                  <img src="./images/cloud-plus.png" alt="" />
                </span>
                <span>Click here to upload or drag and drop image here</span>
              </label>
              <div className="upload_btn">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.2893 11.5919L27.6173 10.8372C28.194 9.50219 29.2501 8.43179 30.5773 7.83723L31.5893 7.38523C31.7121 7.32875 31.8161 7.23825 31.889 7.12447C31.9619 7.01068 32.0006 6.87837 32.0006 6.74323C32.0006 6.60809 31.9619 6.47578 31.889 6.36199C31.8161 6.2482 31.7121 6.1577 31.5893 6.10123L30.6333 5.67589C29.2728 5.0644 28.1986 3.9544 27.632 2.57456L27.2946 1.7599C27.2451 1.6337 27.1587 1.52536 27.0466 1.449C26.9346 1.37263 26.8022 1.33179 26.6666 1.33179C26.5311 1.33179 26.3986 1.37263 26.2866 1.449C26.1746 1.52536 26.0882 1.6337 26.0386 1.7599L25.7013 2.57323C25.1353 3.95333 24.0616 5.06381 22.7013 5.67589L21.744 6.10256C21.6216 6.1592 21.5179 6.24968 21.4453 6.36333C21.3727 6.47697 21.3341 6.60902 21.3341 6.7439C21.3341 6.87877 21.3727 7.01082 21.4453 7.12446C21.5179 7.23811 21.6216 7.32859 21.744 7.38523L22.7573 7.83589C24.0842 8.43105 25.1399 9.50193 25.716 10.8372L26.044 11.5919C26.284 12.1439 27.048 12.1439 27.2893 11.5919ZM2.66663 5.33323C2.66663 4.97961 2.8071 4.64047 3.05715 4.39042C3.3072 4.14037 3.64634 3.99989 3.99996 3.99989H18.6666V6.66656H5.33329V25.3332H26.6666V14.6666H29.3333V26.6666C29.3333 27.0202 29.1928 27.3593 28.9428 27.6094C28.6927 27.8594 28.3536 27.9999 28 27.9999H3.99996C3.64634 27.9999 3.3072 27.8594 3.05715 27.6094C2.8071 27.3593 2.66663 27.0202 2.66663 26.6666V5.33323ZM9.33329 10.6666H22.6666V14.6666H20V13.3332H17.3333V18.6666H19.3333V21.3332H12.6666V18.6666H14.6666V13.3332H12V14.6666H9.33329V10.6666Z"
                    fill="#7B7B7B"
                  />
                </svg>
                <input type="submit" value="Upload image" />
              </div>
            </div>

            <p>Maximum size: 1MB</p>
          </div>
        </div>
      </div>

      <div className="playground_hero_container">
        <h3>
          <img src="./images/webgenie-logo.png" alt="" />
        </h3>

        <h1>Your Design-to-Code Genie</h1>
        <p>
          Upload any landing page design and watch WebGenie transform it into
          clean, responsive HTML & CSS in seconds
        </p>

        <form>
          <div className="search_container">
            <span>
              <img src="./images/quill.png" alt="" />
            </span>
            <input type="text" placeholder="Describe your landing page" />
          </div>
          <div className="generate_btn">
            <span>
              <img src="./images/ai-icon.png" alt="" />
            </span>
            <input type="submit" value="Generate" />
          </div>
        </form>
      </div>

      <div className="playground_controls_container">
        <div className="redo_undo_btns">
          <span>
            <img src="./images/undo.png" alt="" />
          </span>
          <span>
            <img src="./images/redo.png" alt="" />
          </span>
        </div>
        <div className="zoom_container">
          <span>
            <img src="./images/add.png" alt="" />
          </span>
          <span>38%</span>
          <span>
            <img src="./images/minus.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Playground;
