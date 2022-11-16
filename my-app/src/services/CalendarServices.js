import { gapi } from "gapi-script";

const APP_ID = process.env.API_KEY;
const CALENDAR_ID = process.env.CALENDAR_ID;

export const getEvents = () => {

    function initiate() {
        gapi.client
            .init({
                apiKey: APP_ID,
            })

            .then(function () {
                return gapi.client.request({
                    path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
                });
            })

            .then(
                (response) => {
                    let events = response.result.items;
                    return events;
                },
                function (err) {
                    return [false, err];
                }
            );
    }

    gapi.load("client", initiate);

};