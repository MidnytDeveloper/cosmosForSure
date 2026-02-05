import VideoSection from "./VideoSection";
import VideoCardsSection from "./VideoCardsSection";
import { Helmet } from "react-helmet-async";

const Body = () => {
  return (
    <div>
      <Helmet>
        <title>CosmosForSure</title>
        
      </Helmet>
      <VideoSection />
      <VideoCardsSection />
    </div>
  );
};

export default Body;
