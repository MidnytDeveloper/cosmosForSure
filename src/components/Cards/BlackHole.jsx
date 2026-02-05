import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlackHole = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>

      <div
        className="
    max-w-4xl
    mx-4 sm:mx-auto
    mt-20 mb-10
    sm:mt-20 sm:mb-16
    md:mt-24 md:mb-20
    lg:mt-24 lg:mb-12
  "
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Black Holes</h1>

        <p className="text-sm text-gray-600 mb-6">
          Posted on <span className="font-semibold">September 3, 2018</span> by{" "}
          <span className="font-semibold">Ankit Dhar Dubey</span>
        </p>

        <div className="prose prose-gray max-w-none text-gray-800">
          <p>
            As simple as it sounds, more mind-blowing it is. Black hole — what
            is it? A mass, an energy, a place, or a distortion in space-time?
            Popular science fiction shows it as a region of immense gravity
            where time slows down and time travel seems possible, but what
            exactly is a black hole? Let’s find out.
          </p>

          <p>
            In previous posts, we discussed stellar evolution — how giant stars
            emerge from hydrogen clouds and end their lives in different stages
            depending on their mass. Stars with extremely large masses, up to 40
            times the solar mass, eventually collapse into black holes.
          </p>

          <p>
            The term <b>“Black Hole”</b> was coined in 1969 by American
            scientist <b>John Wheeler</b>. However, the idea dates back to 1783
            when <b>John Mitchell</b> from Cambridge University proposed that a
            star with extremely high mass could trap light due to its immense
            gravitational pull, making it invisible to observers.
          </p>

          <p>
            This idea emerged during the era of Newtonian Mechanics, long before
            the concept of space-time curvature was introduced. The scientific
            community still had a long journey ahead to understand gravity at a
            deeper level.
          </p>

          <p>
            In 1939, <b>Robert Oppenheimer</b>, a key figure of the Manhattan
            Project, proposed a theory explaining the behavior of extremely
            massive stars. By then, General Relativity had replaced Newton’s
            laws, establishing that gravity is not a force but a curvature of
            space-time.
          </p>

          <p>
            Oppenheimer explained that massive stars curve space-time so
            intensely that even light rays bend toward them and become trapped.
            Since light cannot escape, these stars become invisible to us,
            giving rise to the concept of a black hole.
          </p>

          <p>
            Due to World War II and advancements in nuclear physics, this
            concept remained dormant for nearly a decade. In the 1960s, the
            theory regained attention when <b>Stephen Hawking</b> and{" "}
            <b>Roger Penrose</b> expanded upon it with groundbreaking
            mathematical insights.
          </p>

          <p>
            From these theories, we conclude that a black hole is the final
            stage of a massive star whose mass exceeds 40 times that of the Sun.
            Its immense mass distorts space-time so severely that light passing
            nearby bends beyond a critical limit and fails to escape.
          </p>

          <p>
            The boundary beyond which nothing can escape is called the{" "}
            <b>Event Horizon</b>. Light originating inside this boundary can
            never reach an external observer, making the black hole invisible.
          </p>

          <p>
            Black holes also introduce the concept of <b>Singularity</b>.
            Stephen Hawking proposed that when a massive star collapses into a
            black hole, it shrinks to a few kilometers while retaining immense
            mass, leading to infinite density — similar to the conditions during
            the Big Bang.
          </p>

          <p>
            Hawking further suggested that reversing the black hole formation
            process could resemble the Big Bang — an infinite mass expanding
            from an extremely small volume to form the universe. This deep
            connection makes black holes one of the most fascinating topics in
            cosmology.
          </p>

          <p>
            The <b>Event Horizon Telescope</b>, a global collaboration of
            observatories across Spain, the Americas, and Antarctica, aims to
            capture images of black holes. It targets the supermassive black
            hole at the center of our galaxy, known as <b>Sagittarius A*</b>.
          </p>

          <p>
            The first image was expected in early 2019, promising to validate
            decades of theoretical physics. Fingers crossed — science continues
            to push the boundaries of the unknown.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlackHole;
