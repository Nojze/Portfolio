import Image from 'next/image';
import { PageWrapper } from '../components/PageWrapper';

type TechnologyItemProps = {
  value: string;
  color?: string;
};

const TechnologyItem = ({ value, color = 'bg-blue-400' }: TechnologyItemProps) => {
  return (
    <li className="flex flex-col items-center px-4 py-2">
      <div className={`w-16 h-16 ${color} rounded-md mb-2`}></div>
      <span>{value}</span>
    </li>
  );
};

const Landing = () => {
  return (
    <PageWrapper>
      <>
        <h1 className="text-3xl text-center font-normal mb-6">Hey there! I&apos;m Niklas 👋🏼</h1>

        <div className="w-40 md:w-48 h-40 md:h-48 overflow-hidden rounded-full relative">
          <Image
            src="/images/NiklasVaxholm.png"
            alt="Picture of Niklas Rydkvist"
            layout="fill"
            objectFit="cover"
            objectPosition={'0% 5%'}
            priority
          />
        </div>

        <h2 className="text-2xl w-full mt-8 mb-1">Who am I?</h2>
        <p>
          I&apos;m a passionate and driven <span className="font-semibold">Software Engineer</span> from Stockholm,
          Sweden specializing in both <span className="font-semibold">web and app development</span>. I create
          enterprise end-to-end applications by building scalable architectures with{' '}
          <span className="font-semibold">great code quality</span> and{' '}
          <span className="font-semibold">excellent user experience (UX/UI)</span>.
          <br />
          I&apos;m <span className="font-semibold">very product-oriented</span> and like to discuss different business
          perspectives with the team in order to move the product forward in the right direction. Other than
          experimenting with new technologies I also invest some of my time into the stock market, working out,
          travelling and meeting new exciting people!
          <br />
        </p>

        <h2 className="text-1xl text-2xl w-full mt-6 mb-2">My tech stack</h2>

        {/* TODO: Maybe show the technologies with a scrolling carousel? Like when companies show sponsors etc */}
        {/* TODO: Add correct programming languages */}
        <ul className="flex flex-row justify-center flex-wrap text-center">
          <TechnologyItem value="TypeScript" />
          <TechnologyItem value="React" color="bg-cyan-400" />
          <TechnologyItem value="React Native" color="bg-cyan-400" />
          <TechnologyItem value="Swift" color="bg-orange-400" />
          <TechnologyItem value="SwiftUI" color="bg-red-400" />
        </ul>

        <h2 className="text-2xl w-full mt-6 mb-2">More tech I&apos;m experienced with</h2>
        <p className="italic">
          JavaScript, HTML5, CSS3, NextJS, TailwindCSS, Cypress, Jest, End-to-end testing, Unit testing, Storybook, Git,
          CI/CD, TDD, APIs, Redux, Figma, User Accessibility, QA (Quality Assurance), SEO, Copywriting, multi-threading
          programming, SocketIO, WebRTC, Google Cloud, Docker, Test Flight, Azure DevOps, AWS and Netlify.
        </p>
      </>
    </PageWrapper>
  );
};

export default Landing;
