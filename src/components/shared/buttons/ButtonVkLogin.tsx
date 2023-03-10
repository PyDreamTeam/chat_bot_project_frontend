import React from "react";
// import bridge from "@vkontakte/vk-bridge";

const ButtonVkLogin = () => {
     const onAuth = async () => {
          console.log(1);
     };

     return (
          <svg
               id="vk_auth"
               onClick={() => onAuth()}
               width="46"
               height="26"
               viewBox="0 0 46 26"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.647 2.02901C44.9624 1.03843 44.647 0.310547 43.1457 0.310547H38.1815C36.9193 0.310547 36.3374 0.939332 36.0218 1.6327C36.0218 1.6327 33.4973 7.42754 29.921 11.1917C28.764 12.2813 28.238 12.6279 27.6069 12.6279C27.2914 12.6279 26.8346 12.2813 26.8346 11.2908V2.02902C26.8346 0.840318 26.4683 0.310547 25.4163 0.310547H17.6154C16.8266 0.310547 16.3522 0.86225 16.3522 1.38512C16.3522 2.51198 18.1403 2.77185 18.3246 5.94171V12.8261C18.3246 14.3355 18.0351 14.6092 17.404 14.6092C15.7211 14.6092 11.6275 8.78846 9.19955 2.12803C8.72374 0.833479 8.24651 0.310547 6.97779 0.310547H2.01356C0.595208 0.310547 0.311523 0.939332 0.311523 1.6327C0.311523 2.87095 1.99451 9.01247 8.14777 17.1351C12.2499 22.6822 18.0296 25.6891 23.2888 25.6891C26.4443 25.6891 26.8347 25.0212 26.8347 23.8708V19.6784C26.8347 18.3427 27.1336 18.0761 28.1329 18.0761C28.8692 18.0761 30.1314 18.4228 33.0766 21.0973C36.4425 24.2671 36.9974 25.6891 38.8907 25.6891H43.8549C45.2733 25.6891 45.9824 25.0212 45.5733 23.7033C45.1256 22.3897 43.5186 20.4839 41.3862 18.2247C40.2291 16.937 38.4936 15.5502 37.9676 14.8567C37.2314 13.9653 37.4417 13.569 37.9676 12.7766C37.9676 12.7766 44.0159 4.75301 44.647 2.02901Z"
                    fill="#2787F5"
               />
          </svg>
     );
};

export default ButtonVkLogin;
