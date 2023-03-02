import Banner from "./components/Banner";
import WeedingInfo from "./components/WeedingInfo";
import StoryList from "./components/StoryList";
import SlideShow from "./components/SlideShow";
import Address from "./components/Address";
import AccountInfo from "./components/AccountInfo";
import Separate from "./components/Separate";

function App() {
  return (
    <div className="App">
      <Banner />
      <WeedingInfo />
      <Separate />
      <StoryList />
      <Separate />
      <SlideShow />
      <Separate />
      <Address />
      <AccountInfo />
    </div>
  );
}

export default App;
