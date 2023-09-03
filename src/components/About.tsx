import DownloadIcon from "./icons/Download";

export default function About() {
  return (
    <section className="grid min-h-screen w-full grid-cols-1 justify-items-center gap-0 sm:grid-cols-2 sm:gap-5">
      <div className="max-w-md1 sm:ml-10 sm:place-self-center">
        <div className="bg-dark">
          <div className="mb-0 bg-dark sm:mb-5">
            <h1 className="m-0 text-center text-5xl sm:inline sm:text-left sm:text-6xl">
              Gal Cohen
            </h1>
            <br className="sm:show hidden" />
            <h3 className="m-0 text-center text-3xl sm:text-left sm:text-4xl">
              Robotics Engineer & Developer
            </h3>
            <br className="sm:show hidden" />
            <h4 className="m-0 text-center text-2xl sm:text-left sm:text-3xl">
              Interested In Robotics Internships
            </h4>
          </div>
          <p className="text-md hidden max-w-lg bg-dark text-justify sm:block">
            My name is Gal and I am studying Engineering Science at the
            university of Toronto and will graduate in 2025 with a specialty in
            Robotics and a minor in Business and AI. For as long as I can
            remember I’ve been fascinated with technology and I intend to
            continuously learn about new technological developments.
          </p>
          <div className="shadow-3xl m-5 block h-fit max-w-md place-self-center rounded-3xl bg-darker sm:hidden ">
            <img
              className="rounded-3xl"
              src="images/cropped.png"
              alt="Portrait of Gal"
            />
          </div>
        </div>
        <p className="text-md block max-w-prose bg-dark text-justify sm:hidden">
          My name is Gal and I am studying Engineering Science at the university
          of Toronto and will graduate in 2025 with a specialty in robotics and
          a minor in business and AI.
        </p>
        <a
          className="mt-6 inline-flex gap-4 rounded-xl bg-button p-3 py-5 shadow-2xl active:shadow-none"
          href="Resume-Gal-Cohen.pdf"
        >
          Open Resume
          <DownloadIcon />
        </a>
      </div>
      <div className="hidden h-fit max-w-md place-self-center rounded-3xl bg-darker shadow-3xl-inner sm:block ">
        <img
          className="rounded-3xl"
          src="images/cropped.png"
          alt="Portrait of Gal"
        />
      </div>
    </section>
  );
}
