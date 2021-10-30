import Event from "../Event";
import posterGlou from "../../images/poster-glou-headliner.jpg";
import posterComicLeague from "../../images/poster-comic-league.png";
import posterKunming from "../../images/poster-kunming.jpg";
import posterYoneeBar from "../../images/poster-yonee-bar.jpg";
import posterAloha from "../../images/poster-aloha.jpg";
import posterFarewell from "../../images/poster-farewell.png";
import posterFreaks from "../../images/poster-freaks.jpg";
import posterWeirdAndWonderful from "../../images/poster-weird-and-wonderful.jpg";

const EventsCalendar = () => {
  return (
    <div className="events-calendar">
      <div className="section-header-group">
        <h1 className="__header">Event Calendar</h1>
        <p className="__label">Come see me live</p>
      </div>

      <div className="events-group">
        <Event
          date="Oct 27"
          cityName="Beijing"
          eventTimeLocation="8:30pm | Glou Bar & Kitchen"
          eventPoster={posterGlou}
        />
        <Event
          date="Sept 10"
          cityName="Beijing"
          eventTimeLocation="8:30pm | Cosi Cosi"
          eventPoster={posterFarewell}
        />
        <Event
          date="Aug 14"
          cityName="Kunming"
          eventTimeLocation="8:30pm | Vervo Club & Bar"
          eventPoster={posterKunming}
        />
        <Event
          date="Jul 31"
          cityName="Chengdu"
          eventTimeLocation="8:30pm | Aloha Rooftop Cafe"
          eventPoster={posterAloha}
        />
        <Event
          date="Jun 26"
          cityName="Beijing"
          eventTimeLocation="8:30pm | Cavern Club Beijingd"
          eventPoster={posterWeirdAndWonderful}
        />
        <Event
          date="May 14"
          cityName="Beijing"
          eventTimeLocation="9pm | JianJinZhongXin"
          eventPoster={posterComicLeague}
        />
        <Event
          date="Apr 2-4"
          cityName="Beijing"
          eventTimeLocation="See poster | Various locations"
          eventPoster={posterFreaks}
        />
        <Event
          date="Mar 28"
          cityName="Beijing"
          eventTimeLocation="7:30pm | Yonee Bar"
          eventPoster={posterYoneeBar}
        />
      </div>
    </div>
  );
};

export default EventsCalendar;
