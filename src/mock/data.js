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
  btn: 'Want a little more?',
  paragraphOne:
    "I've been a developer with many titles for around 10 years, working with various modern tech stacks. For the past 6 years my main focus has been towards mobile apps using JavaScript, React Native and other native languages.",
  paragraphTwo:
    "I've developed websites and mobile apps in various industries such as; games, utilities, health & wellbeing, and more. I enjoy the challenge of finding the right solutions to enhance the user experience, as well as playing with different tools to achieve each outcome.",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'elf.jpg',
    title: 'Elf at work',
    info: 'Contract Lead mobile developer for a project aimed at bringing health and wellbeing to users within businesses.',
    info2:
      'Built using React Native, AWS and Firebase. It is a white label, cross platform (iOS & Android), digital solution that can be rolled out to employees with ease globally. Main features of the app included; recipes, workouts, and wellbeing exercises.',
    url: 'https://elfatwork.com/',
  },
  {
    id: nanoid(),
    img: 'l3.jpg',
    title: 'L3 Digital',
    info: 'Co-Director of L3 Digital, a digital agency specialising in all aspects of the digital platform from websites, to mobile apps, to supporting back end services.',
    info2:
      'The team has a wealth of knowledge and experience to help deliver whatever your business requires and is adaptable to meet the needs by using whatever tooling is necessary.',
    url: 'https://l3digital.co.uk/',
  },
  {
    id: nanoid(),
    img: 'curated.jpg',
    title: 'Curated TV and Film',
    info: 'This was a side project created for the purposes of Hacktoberfest (2018) where the idea was to create a list of top picks from iconic moments in Film or TV. It is updated each year for Hacktoberfest to help engage with the open source community whilst helping others.',
    info2:
      "It started out as a simple vanilla JS app, which with contributions from contributors it has grown to use create react app for the boilerplate, themed with Material UI, and has tests and linting to help run through the CI pipeline which pushes to the GitHub page when PR's are merged.",
    url: 'https://lmcjt37.github.io/curated-tv-and-film/',
    repo: 'https://github.com/lmcjt37/curated-tv-and-film',
  },
];

// CONTACT DATA
export const contactData = {
  title: 'Get in touch',
  cta: 'Feel free to reach out for any work via email or my Twitter which can be found at the bottom.',
  btn: 'Email me 📨',
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
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/lmcjt/',
    },
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/user/lukey_taylor',
    },
  ],
};

// ABOUT PAGE DATA
export const aboutPageData = {
  img: 'profile.jpg',
  title: 'Hey 🤘, Luke Taylor here',
  paragraphOne:
    "I'm a developer from Derby in the UK 🇬🇧 and I've been making websites and mobile apps for around 10 years now.\n\nMy main language is JavaScript, so I use whatever the latest tech stack is surrounding that ecosystem. Currently I'm focusing on React and React Native, with all tools and frameworks available to those",
  paragraphTwo:
    "I've developed apps in various industries such as games, utilities, health & wellbeing, and more. I enjoy the challenge of finding the right solutions to enhance the user experience as well as playing with different tools to achieve this outcome.",
  paragraphThree:
    "When I'm not working you'll find me climbing walls like a spider monkey, changing my kids nappies, bingeing the latest series with my wife or either being destroyed by children on some new FPS or relaxing with a sci-fi novel (Ready Player One or Dune).",
};
