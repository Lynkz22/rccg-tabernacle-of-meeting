import React from "react";
import "../Styles/InfoCalendar.css";
import CalendarImage from "../Components/Assets/LandingPage/Calendar.webp";
import HomePictureImage5 from "../Components/Assets/Camp/Camp1.webp";
import HomePictureImage2 from "../Components/Assets/Camp/camp4.jpg";
import HomePictureImage3 from "../Components/Assets/Camp/Camp2.jpg";
import HomePictureImage4 from "../Components/Assets/Camp/LGAF.jpg";
import HomePictureImage from "../Components/Assets/Camp/LGAF.jpg";
import { motion } from "framer-motion";
import "../Styles/InfoEvents.css";

const InfoCalendar = () => {
  return (
    <>
      <section className="sectionCalendarServices">
        <section className="textCalendarMeetings">
          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">SUNDAY</h2>
            <p className="calendarText">
              Join us each Sunday at 9 AM for our weekly service at RCCG
              Tabernacle of Meeting, Highlight Community Centre Barry, Stirling
              Rd, Barry CF62 8NS.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">SUNDAY</h2>
            <p className="calendarText">
              House fellowship holds from 5pm to 6pm every Sundays.
              <br />
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">MONDAY</h2>
            <p className="calendarText">
              Join us on Mondays for our departmental meetings where men, women,
              teens, youth, elders all meet for prayers on zoom.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">TUESDAY</h2>
            <p className="calendarText">
              Join us each Tuesday from 7pm to 8:30pm for digging deep and
              communion service at RCCG Tabernacle of Meeting, Highlight
              Community Centre Barry, Stirling Rd, Barry CF62 8NS.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">WEDNESDAY</h2>
            <p className="calendarText">
              Join us each Wednesday for intercession prayers for Barry/Vale
              Souls from 7pm to 8pm on Zoom.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">THURSDAY</h2>
            <p className="calendarText">
              Join us each Thursday from 7pm to 9pm for faith clinic on Zoom.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">FRIDAY</h2>
            <p className="calendarText">
              Join us on Fridays at 6:30pm to 7:30pm for Children time: bible
              study, prayers, bible recitation, and learning a special song.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">FRIDAY</h2>
            <p className="calendarText">
              Join us every Fridays at 11pm to 2am for Vigil except first Friday
              of the month.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">SATURDAY</h2>
            <p className="calendarText">
              Join us every Saturdays at 10am for Evangelism
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">SATURDAY</h2>
            <p className="calendarText">
              Join us every Saturdays at 9pm to 10pm for Ministers prayers:
              9pm-10pm
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">ANNUAL CONVENTION</h2>
            <p className="calendarText">
              Holds annually in August at Redemption Camp, located at Kilometer
              46 on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">HOLY GHOST CONGRESS</h2>
            <p className="calendarText">
              Holds annually in December at Redemption Camp, located at
              Kilometer 46 on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">HOLY GHOST SERVICE</h2>
            <p className="calendarText">
              Holds every first Friday of the month at Redemption Camp, located
              at Kilometer 46 on the Lagos-Ibadan Expressway, Ogun State,
              Nigeria.
            </p>
          </div>

          <div className="divCalendarMeetings">
            <h2 className="headingCalendarText">LET'S GO A FISHING</h2>
            <p className="calendarText">
              Holds annually in April & December at Redemption Camp, located at
              Kilometer 46 on the Lagos-Ibadan Expressway, Ogun State, Nigeria.
              Nigeria.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default InfoCalendar;
