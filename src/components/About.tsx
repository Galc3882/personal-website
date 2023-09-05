import DownloadIcon from "./icons/Download";

export default function About() {
  return (
    <section className="grid min-h-screen w-full grid-cols-2 justify-items-center gap-5 tablet:grid-cols-[10fr_9fr] stablet:min-h-[96vh] stablet:grid-cols-1 stablet:gap-0">
      <div className="ml-10 place-self-center tablet:ml-2 stablet:mx-5">
        <div className="bg-dark">
          <div className="mb-5 tablet:mt-20 stablet:my-1">
            <h1 className="m-0 inline text-left text-6xl tablet:text-5xl stablet:block stablet:text-center">
              Gal Cohen
            </h1>
            <h3 className="m-0 text-left text-4xl tablet:text-2xl stablet:text-center">
              Robotics Engineer & Developer
            </h3>
            <h4 className="m-0 text-left text-3xl tablet:text-xl stablet:text-center stablet:text-lg">
              Interested In Robotics Internships
            </h4>
          </div>
          <div className="hidden h-fit max-w-xs place-self-center rounded-3xl bg-darker shadow-3xl-inner stablet:mx-auto stablet:block ">
            <img
              className="rounded-3xl"
              src="images/cropped.png"
              alt="Portrait of Gal"
            />
          </div>
          <p className="block max-w-lg text-justify text-base stablet:my-3">
            My name is Gal and I am studying Engineering Science at the
            university of Toronto and will graduate in 2025 with a specialty in
            Robotics and a minor in Business and AI.
            <a className="stablet:hidden">
              &nbsp;For as long as I can remember I’ve been fascinated with
              technology and I intend to continuously learn about new
              technological developments.
            </a>
          </p>
        </div>
        <a
          className="mt-6 inline-flex gap-4 rounded-xl bg-button p-3 py-5 text-lg shadow-2xl hover:bg-buttonHover stablet:mx-auto stablet:mt-5 stablet:block stablet:w-fit stablet:py-3 phone:mt-0 phone:py-2 phone:text-base"
          href="Resume-Gal-Cohen.pdf"
        >
          Open Resume
          <div className="stablet:ml-3 stablet:inline-block phone:hidden">
            <DownloadIcon />
          </div>
        </a>
      </div>
      <div className="h-fit max-w-md place-self-center rounded-3xl bg-darker shadow-3xl-inner stablet:hidden ">
        <img
          className="rounded-3xl"
          src="images/cropped.png"
          alt="Portrait of Gal"
        />
      </div>
    </section>
  );
}
