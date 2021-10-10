import FirstCard from "./Components/Card/FirstCard";
import SecondCard from "./Components/CardTwo/SecondCard";
import "./App.css";
import photo from "./assests/certificate.jpeg";

function App() {
  return (
    <div className="app">
      <div className="cat1">
        {" "}
        <FirstCard
          title="F.sc (Pre-Engineering)"
          subtitle="Punjab Group Of College’s"
          job="Engineering"
          date="Sep/2012 - Oct/2021"
          marks="835/1100"
          grade="A-Grade"
          degisnation="Student’s Community head"
          desc="What was the project about and what was my role and where all I contributed. What was the project about and what was my role and where all I contributed."
        />
        <FirstCard
          title="Senior UIUX Designer"
          subtitle="Full-Time Job"
          job="Designer’s Hub"
          date="Sep/2012 - Oct/2021"
          desc="What was the project about and what was my role and where all I contributed. What was the project about and what was my role and where all I contributed."
        />
      </div>
      {/* <div className="cat2">
        <SecondCard
          title="Senior Product Designer"
          subtitle="Full-Stack UIUX Designer"
          job="Designer’s Hub"
          // photo={photo}
          date="Sep/2012 - Oct/2021"
          link="www.xe.com/currency..."
        />
        <SecondCard
          title="Senior Product Designer"
          subtitle="Full-Stack UIUX Designer"
          job="Designer’s Hub"
          photo={photo}
          date="Sep/2012 - Oct/2021"
          // link="www.xe.com/currency..."
        />
      </div> */}
    </div>
  );
}

export default App;
