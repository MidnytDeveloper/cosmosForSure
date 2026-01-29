import React from 'react'

const Roadtobigbang = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 
                    bg-white/20 backdrop-blur-md 
                    rounded-xl shadow-lg">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        The Expanding Universe & Cosmic Microwave Background
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        Posted on <span className="font-semibold">August 2018</span> by{" "}
        <span className="font-semibold">Ankit Dhar Dubey</span>
      </p>

      {/* Content */}
      <div className="prose prose-gray max-w-none text-gray-800">
        <p>
          Until 1927, no one had ever thought of the idea of an expanding universe.
          Even Albert Einstein made what he later called his biggest blunder —
          the cosmological constant, better known as <b>Lambda (Λ)</b>, when he
          formulated the General Theory of Relativity. At that time, Einstein
          believed the universe to be static.
        </p>

        <p>
          A static universe, however, leads to collapse. According to Newton’s
          law of gravitation, every body attracts every other body. In a static
          universe, all heavenly objects would eventually fall into each other,
          causing the universe to collapse.
        </p>

        <p>
          To avoid this collapse, Einstein introduced the cosmological constant,
          Lambda, which acted as a repulsive force or vacuum pressure to keep the
          universe stable.
        </p>

        <p>
          In 1927, a Belgian astronomer and Catholic priest, <b>Georges Lemaître</b>,
          proposed that the early universe was contained in a “cosmic egg” which
          later exploded, initiating expansion. He also developed the
          mathematical framework for an expanding universe. This was the first
          major step toward the establishment of the <b>Big Bang Theory</b>.
        </p>

        <p>
          Two years later, in 1929, <b>Edwin Hubble</b> observed galaxies and
          concluded that they were moving away from each other, as evidenced by
          their red shift. He also discovered that the farther a galaxy is, the
          faster it moves away.
        </p>

        <p>
          Hubble derived a mathematical relation now known as <b>Hubble’s Law</b>:
        </p>

        <p className="text-center font-semibold">
          V = H × D
        </p>

        <p>
          where <b>V</b> is the recession velocity, <b>D</b> is the distance of
          the galaxy, and <b>H</b> is the Hubble constant. The value of the Hubble
          constant is approximately the inverse of the age of the universe.
        </p>

        <p>
          From Hubble’s observations, scientists concluded that if all galaxies
          are moving away from each other, then there must have been a time in
          the past when all matter was concentrated at a single point. A cosmic
          expansion was then initiated — giving rise to the Big Bang Theory.
        </p>

        <p>
          The first major observational proof of the Big Bang was the discovery
          of the <b>Cosmic Microwave Background (CMB)</b>. It is the leftover
          radiation from the early universe, spread uniformly throughout space
          in the form of microwave radiation.
        </p>

        <p>
          The first complete atoms were formed about <b>380,000 years</b> after
          the Big Bang, when the universe cooled to approximately <b>3000K</b>.
          At this point, electrons combined with nuclei, allowing photons to
          travel freely. This moment made the universe transparent.
        </p>

        <p>
          As the universe expanded, this light lost energy and shifted into the
          microwave region of the spectrum, which we now observe as the Cosmic
          Microwave Background.
        </p>

        <p>
          CMB was first theoretically studied in the 1940s by <b>Georges Gamow</b>.
          In 1948, <b>Robert Herman</b> calculated its temperature to be about
          5 Kelvin, remarkably close to the currently accepted value of
          <b> 2.7K</b>.
        </p>

        <p>
          In 1964, <b>Robert Wilson</b>, while working on satellite communication
          at AT&T Labs, detected unexplained noise in antenna signals. After
          eliminating all possible sources, the noise persisted.
        </p>

        <p>
          At the same time, <b>Robert Dicke</b> at Princeton University was
          researching the Cosmic Microwave Background. When they compared notes,
          it became clear that the mysterious noise was actually the microwave
          background radiation.
        </p>

        <p>
          Interestingly, the static noise heard during radio tuning is nothing
          but the leftover radiation from the early universe.
        </p>

        <p>
          Later discoveries of <b>dark matter</b> and the reintroduction of the
          cosmological constant in 1998 led to the most accepted model of the
          universe today:
        </p>

        <p className="font-semibold text-center">
          Lambda Cold Dark Matter (ΛCDM) Model
        </p>

        <p>
          The concepts of Lambda and dark matter will be discussed in the next
          blog.
        </p>
      </div>
    </div>
  );
};

export default Roadtobigbang