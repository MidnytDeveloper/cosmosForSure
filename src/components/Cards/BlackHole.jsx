// const BlackHole = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg mt-10">
//       {/* Post Header */}
//       <h1 className="text-3xl font-bold text-gray-900 mb-2">Black Holes</h1>
//       <p className="text-sm text-gray-600 mb-6">
//         Posted on <span className="font-semibold">September 3, 2018</span> by{" "}
//         <span className="font-semibold">Ankit Dhar Dubey</span>
//       </p>

//       {/* Post Content */}
      // <div className="prose prose-gray max-w-none text-gray-800">
      //   <p>
      //     As simple as it sounds, more mind-blowing it is. Black hole, what is it? A mass,
      //     an energy, a place or any kind of distortion in the space-time. Although due to
      //     science fiction, television serials and movies, now we know that it is a place
      //     with immense gravity and being there makes clock go slow and one can time travel
      //     through it but what exactly it is. Lets find out.
      //   </p>

      //   <p>
      //     So, in our previous posts we have discussed about stellar evolution that how a
      //     giant star emerges from hydrogen clouds and finally ends in various stages
      //     depending upon their masses. Stars with largest masses i.e up to 40 times the
      //     solar mass ends up in the black hole.
      //   </p>

      //   <p>
      //     The word “Black hole” was first coined in 1969 by an American scientist John
      //     Wheeler but the concept of black hole dates back to 1783 when John Mitchell of
      //     Cambridge university wrote a paper in which he pointed that a star of very high
      //     mass must have immense value of gravitational force that light particles get
      //     attracted towards the star but could not escape and hence we can not see that
      //     star but due to its gravitational force, we can observe it. But that was the era
      //     of Newtonian Mechanics and there was a long way to go for brilliant minds on
      //     planet to give a thought about this concept.
      //   </p>

      //   <p>
      //     In 1939, Robert Oppenheimer, one of the main man in Manhattan Project gave his
      //     theory about the behavior of stars of large masses. General Relativity had
      //     dethroned Newton’s law at that time and now every body knew that gravity is not a
      //     force but a property of curvature of space-time. So he described that since every
      //     heavenly body curves the space around it, then stars with very high mass would
      //     bend the curve at a very high value and bending of light rays around the sun had
      //     already been shown in 1919. So these heavy stars must bend the space-time in
      //     such a magnitude that light rays bend and get trapped in the gravitational field
      //     of the star and hence can not escape. Thus light from it can not come to us and we
      //     can not see it.
      //   </p>

      //   <p>
      //     But shortly after war broke out and for near a decade, world involved in the blood
      //     shed and advancement in nuclear physics that led to production of atomic bombs.
      //     Oppenheimer’s concept came in limelight in 1960’s when one of the greatest minds,
      //     Stephen Hawking, paid heed to the theory of black holes along with a great mind
      //     at that time, Roger Penrose.
      //   </p>

      //   <p>
      //     Thus from above theories and history, we can conclude that: A black hole is the
      //     last stage of a massive star whose mass is greater than 40 times the solar mass.
      //     Due to its heavy mass, it distorts the space-time in such a way that when light
      //     passes near to it, it gets bent toward it more than a critical value and fails to
      //     escape from it. Light rays from it can not reach us and hence we can not see
      //     them. It is named as Black Hole. Its boundary is called Event Horizon and it
      //     coincides with the paths of light rays that fail to escape from the black hole.
      //   </p>

      //   <p>
      //     Black holes also give rise to the concept of singularity by Stephen Hawking. He
      //     thought that in the process of making a black hole, a star that is so big and
      //     heavy shrinks to a size of few kilometers and have a mass of about 5-10 times
      //     solar mass, thus having an infinite density, showing similarity to the state of
      //     the Big Bang when the whole mass of universe was contained in negligible volume.
      //     General Relativity also predicts that there must be singularity of infinite
      //     density and curvature inside a black hole.
      //   </p>

      //   <p>
      //     So, Hawking proposed the idea that if the very process of formation of black hole
      //     is reversed, then it must satisfy and show the formation of universe due to Big
      //     Bang. An infinite mass from zero volume expanding to release matter and forming a
      //     star and universe in case of Big Bang. That’s why Black holes are one of the most
      //     hot topics in cosmology and scientists believe that studying black holes can
      //     give enough data about singularity and hence the Big Bang.
      //   </p>

      //   <p>
      //     Amidst all this, The Event Horizon Telescope, a joint project of universities all
      //     over the world, has established telescopes at various places from Spain, Americas,
      //     and Antarctica to create a virtual telescope of aperture the size of Earth and
      //     aims at taking the first picture of the black hole present in the center of our
      //     own galaxy in the Sagittarius constellation known as Sagittarius A*. It is expected
      //     to release in early 2019, so finger crossed to be proven yet again for the theories
      //     of such great minds.
      //   </p>
      // </div>
//     </div>
//   );
// };

// export default BlackHole;


import { Link, useNavigate } from "react-router-dom";

const BlackHole = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg mt-10">
      {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200 shadow-md"
        >
          ← Back
        </button>

        {/* Home Button */}
        <Link
          to="/"
          className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200 shadow-md"
        >
          Home
        </Link>
      </div>

      {/* Post Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Black Holes</h1>
      <p className="text-sm text-gray-600 mb-6">
        Posted on <span className="font-semibold">September 3, 2018</span> by{" "}
        <span className="font-semibold">Ankit Dhar Dubey</span>
      </p>

      {/* Post Content */}
       <div className="prose prose-gray max-w-none text-gray-800">
        <p>
          As simple as it sounds, more mind-blowing it is. Black hole, what is it? A mass,
          an energy, a place or any kind of distortion in the space-time. Although due to
          science fiction, television serials and movies, now we know that it is a place
          with immense gravity and being there makes clock go slow and one can time travel
          through it but what exactly it is. Lets find out.
        </p>

        <p>
          So, in our previous posts we have discussed about stellar evolution that how a
          giant star emerges from hydrogen clouds and finally ends in various stages
          depending upon their masses. Stars with largest masses i.e up to 40 times the
          solar mass ends up in the black hole.
        </p>

        <p>
          The word “Black hole” was first coined in 1969 by an American scientist John
          Wheeler but the concept of black hole dates back to 1783 when John Mitchell of
          Cambridge university wrote a paper in which he pointed that a star of very high
          mass must have immense value of gravitational force that light particles get
          attracted towards the star but could not escape and hence we can not see that
          star but due to its gravitational force, we can observe it. But that was the era
          of Newtonian Mechanics and there was a long way to go for brilliant minds on
          planet to give a thought about this concept.
        </p>

        <p>
          In 1939, Robert Oppenheimer, one of the main man in Manhattan Project gave his
          theory about the behavior of stars of large masses. General Relativity had
          dethroned Newton’s law at that time and now every body knew that gravity is not a
          force but a property of curvature of space-time. So he described that since every
          heavenly body curves the space around it, then stars with very high mass would
          bend the curve at a very high value and bending of light rays around the sun had
          already been shown in 1919. So these heavy stars must bend the space-time in
          such a magnitude that light rays bend and get trapped in the gravitational field
          of the star and hence can not escape. Thus light from it can not come to us and we
          can not see it.
        </p>

        <p>
          But shortly after war broke out and for near a decade, world involved in the blood
          shed and advancement in nuclear physics that led to production of atomic bombs.
          Oppenheimer’s concept came in limelight in 1960’s when one of the greatest minds,
          Stephen Hawking, paid heed to the theory of black holes along with a great mind
          at that time, Roger Penrose.
        </p>

        <p>
          Thus from above theories and history, we can conclude that: A black hole is the
          last stage of a massive star whose mass is greater than 40 times the solar mass.
          Due to its heavy mass, it distorts the space-time in such a way that when light
          passes near to it, it gets bent toward it more than a critical value and fails to
          escape from it. Light rays from it can not reach us and hence we can not see
          them. It is named as Black Hole. Its boundary is called Event Horizon and it
          coincides with the paths of light rays that fail to escape from the black hole.
        </p>

        <p>
          Black holes also give rise to the concept of singularity by Stephen Hawking. He
          thought that in the process of making a black hole, a star that is so big and
          heavy shrinks to a size of few kilometers and have a mass of about 5-10 times
          solar mass, thus having an infinite density, showing similarity to the state of
          the Big Bang when the whole mass of universe was contained in negligible volume.
          General Relativity also predicts that there must be singularity of infinite
          density and curvature inside a black hole.
        </p>

        <p>
          So, Hawking proposed the idea that if the very process of formation of black hole
          is reversed, then it must satisfy and show the formation of universe due to Big
          Bang. An infinite mass from zero volume expanding to release matter and forming a
          star and universe in case of Big Bang. That’s why Black holes are one of the most
          hot topics in cosmology and scientists believe that studying black holes can
          give enough data about singularity and hence the Big Bang.
        </p>

        <p>
          Amidst all this, The Event Horizon Telescope, a joint project of universities all
          over the world, has established telescopes at various places from Spain, Americas,
          and Antarctica to create a virtual telescope of aperture the size of Earth and
          aims at taking the first picture of the black hole present in the center of our
          own galaxy in the Sagittarius constellation known as Sagittarius A*. It is expected
          to release in early 2019, so finger crossed to be proven yet again for the theories
          of such great minds.
        </p>
      </div>
    </div>
  );
};

export default BlackHole;

