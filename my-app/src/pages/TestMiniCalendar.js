import React from "react";
import { Text } from "@chakra-ui/react";
import MiniCalendar from "../components/MiniCalendar";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

// // Temporary page to test MiniCalendar component
// const TestMiniCalendar = () => {
//   return (
//     <div>
//       <Text fontSize="2xl" mb={5}>TestMiniCalendar</Text>
//       < MiniCalendar />
//     </div>
//   )
// }
//
// export default TestMiniCalendar


//put your google calendar api key here
const API_KEY = "AIzaSyAItT_wrwPisd5873yejXagh7JSuGXyNb4";

//replace calendar id with one you want to test

let calendars = [
  { calendarId: "hchungcollege@gmail.com" }
];

let styles = {
  //you can use object styles
  calendar: {
    borderWidth: "3px" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default function App() {
  return (
    <div className="App">
      <body>
        <div
          style={{
            width: "90%",
            paddingTop: "50px",
            paddingBottom: "50px",
            margin: "auto",
            maxWidth: "1200px"
          }}
        >
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </body>
    </div>
  );
}