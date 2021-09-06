import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luke Taylor | Web & App developer',
  lang: 'en',
  description: 'Welcome to my site, get to know me.',
};

// HERO DATA
export const heroData = {
  title: "Hey 🤘, my name's",
  name: 'Luke Taylor',
  subtitle: "I'm a web & app developer \nbased out of Derby, UK 🇬🇧",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  title: 'Get to know me',
  paragraphOne:
    "I've been a developer with many titles for around 10 years, working with various modern tech stacks. For the past 6 years, my main focus has been towards mobile apps, using native languages like Swift/Obj-C, Kotlin/Java, JavaScript/React-Native.",
  paragraphTwo:
    "I've developed apps in various industries such as games, utilities, health & wellbeing, and more. I enjoy the challenge of finding the right solutions to enhance the user experience as well as playing with different tools to achieve this outcome.",
  paragraphThree:
    "When I'm not working you'll find me climbing walls like a spider monkey, changing my kids nappies, bingeing the latest series with my wife or either being destroyed by children on some new FPS or relaxing with a sci-fi novel (Ready Player One or Dune).",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  title: 'Get in touch',
  cta: 'Feel free to reach out for any work',
  btn: 'Email me',
  email: 'lmcjt@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/lmcjt',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lukemalcolmtaylor/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lmcjt37',
    },
  ],
};
