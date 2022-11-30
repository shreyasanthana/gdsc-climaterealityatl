import React from "react";
import { Text } from "@chakra-ui/react";
import MiniCalendar from "../components/MiniCalendar";

// Comment: Commenting out temporarily (see below)
// import Calendar from "@ericz1803/react-google-calendar";
// import { css } from "@emotion/react";

// Temporary page to test MiniCalendar component
const TestMiniCalendar = () => {
  return (
    <div>
      <Text fontSize="2xl" mb={5}>TestMiniCalendar</Text>
      < MiniCalendar />
    </div>
  )
}

export default TestMiniCalendar;


// Comment:  Commenting this out for remote repo because not working
//  put your google calendar api key here; also replaced API Key and email
//  with local environment variables accessible at .env.local file NOT
//  to be uploaded to GitHub remote repo.
// const API_KEY = REACT_APP_TEST_HERA_GOOGLE_CALENDAR_API_KEY;

//replace calendar id with one you want to test

// let calendars = [
//   { calendarId: REACT_APP_TEST_HERA_GOOGLE_CALENDAR_EMAIL }
// ];

// let styles = {
//   //you can use object styles
//   calendar: {
//     borderWidth: "3px" //make outer edge of calendar thicker
//   },

//   //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
//   today: css`
//     /* highlight today by making the text red and giving it a red border */
//     color: red;
//     border: 1px solid red;
//   `
// };

// export default function App() {
//   return (
//     <div className="App">
//       <body>
//         <div
//           style={{
//             width: "90%",
//             paddingTop: "50px",
//             paddingBottom: "50px",
//             margin: "auto",
//             maxWidth: "1200px"
//           }}
//         >
//           <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
//         </div>
//       </body>
//     </div>
//   );
// }