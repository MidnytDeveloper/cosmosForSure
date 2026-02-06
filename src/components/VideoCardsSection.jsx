import VideoCard from "./VideoCard.jsx";

// Example data for 10 video cards with categories and routes
const videosData = [
  {
    // videoSrc: "/assets/Big Bang Genesis.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672624/Big_Bang_Genesis_vc872w.mp4",
    title: "Big Bang Genesis",
    category: "THE EXPANSION",
    link: "/theexpansion",
  },
  {
    // videoSrc: "/assets/cosmicGravityTrap.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672624/cosmicGravityTrap_sasyfx.mp4",
    title: "Cosmic Gravity Trap",
    category: "BLACK HOLES",
    link: "/blackhole",
  },
  {
    // videoSrc: "/assets/Einstein's Expansion Error.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672629/Einstein_s_Expansion_Error_hkdvjp.mp4",
    title: "Einstein's Expansion Error",
    category: "ROAD TO BIG BANG",
    link: "/roadtobigbang",
  },
  {
    // videoSrc: "/assets/Elements from Ancient Stars.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672627/Elements_from_Ancient_Stars_dxz4kz.mp4",
    title: "Elements from Ancient Stars",
    category: "STELLAR EVOLUTION",
    link: "/stellarevolution",
  },
  {
    // videoSrc: "/assets/Fundamental Forces Insight.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672636/Fundamental_Forces_Insight_rdys0t.mp4",
    title: "Fundamental Forces Insight",
    category: "THE BOSON AND FUNDAMENTAL FORCES",
    link: "/bosons",
  },
  {
    // videoSrc: "/assets/Lambda Cold Dark Matter.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672625/Lambda_Cold_Dark_Matter_oxxzr3.mp4",
    title: "Lambda Cold Dark Matter",
    category: "THE BIG BANG",
    link: "/thebigbang",
  },
  {
    // videoSrc: "/assets/Mystery of Attraction.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672626/Mystery_of_Attraction_jwrfnj.mp4",
    title: "Mystery of Attraction",
    category: "GRAVITY",
    link: "/gravity",
  },
  {
    // videoSrc: "/assets/Quest for Cosmic Truths.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672630/Quest_for_Cosmic_Truths_w5ovd7.mp4",
    title: "Quest for Cosmic Truths",
    category: "RELIGION AND SCIENCE",
    link: "/religionandscience",
  },
  {
    // videoSrc: "/assets/Stardust Legacy Revealed.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672635/Stardust_Legacy_Revealed_zxqzgy.mp4",
    title: "Stardust Legacy Revealed",
    category: "THE JOURNEY BEGINS",
    link: "/thejourneybegins",
  },
  {
    // videoSrc: "/assets/Thomson’s Breakthrough.mp4",
    videoSrc:
      "https://res.cloudinary.com/dtsp8zzu3/video/upload/v1769672630/Thomson_s_Breakthrough_uiykuu.mp4",
    title: "Thomson’s Breakthrough",
    category: "ELEMENTARY PARTICLES",
    link: "/elementaryparticles",
  },
];

const VideoCardsSection = () => {
  return (
    <div
      className="
        relative w-full py-16 px-4 md:px-10 lg:px-20
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtsp8zzu3/image/upload/v1770395694/jo6zbf6uksoxgki8e4ag.png')",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/90 backdrop-blur-[1px]" />

      {/* Content wrapper (important for overlay layering) */}
      <div className="relative z-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-white">
          Unveiling the Universe
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore breathtaking cosmic phenomena, galaxies, and mysteries of the
          universe through our curated video collection.
        </p>

        {/* Video Cards Grid */}
        <div className="px-2 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData.map((video, index) => (
              <VideoCard
                key={index}
                videoSrc={video.videoSrc}
                title={video.title}
                category={video.category}
                description={video.description}
                link={video.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardsSection;
