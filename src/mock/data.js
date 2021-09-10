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
    "I'm a developer from Derby in the UK 🇬🇧 and I've been making websites and mobile apps for around 10 years now.\n\nMy main language is JavaScript, so I use whatever tends to be the latest tech stack surrounding that ecosystem at the time. Right now I'm focusing on React and React Native, but also use Swift/Objective-C, Java/Kotlin, TypeScript, Apollo GQL, Node, Express, and Gatsby.",
  paragraphTwo:
    "Being in my industry you notice that it's constantly in flux, and this is the reason I enjoy it so much. There's always a new challenge to be solved, or another unique design to tackle with a different approach that keeps the projects fresh and interesting.\n\nI've developed websites and apps in various industries and I enjoy finding the right solutions to enhance the user experience, as well as playing with different tools to achieve the goals along the way.",
  paragraphThree:
    "The cliché that comes with the territory is that I enjoy everything nerdy or geeky 🤓. I recently built a new gaming rig and I have always been an avid gamer. Stemming from my early days playing on the Sega Mega Drive, my uncle's SNES, or helping my dad get through impossible areas of the original Tomb Raider.\n\nThis was one of the original reasons I ended up in this industry as I wanted to become a games developer. I've since helped create some small games for education, and a scrollable game for the Apple watch to pass time in meetings. I recently started writing a new game but as of yet it is all notes and no code.\n\nI watch a lot of tv and film as well as read quite a bit(Currently Dune), where the genres tend to be Sci-Fi, Fantasy, or Superheroes.",
  paragraphFour:
    "Away from the keyboard I enjoy spending time with my wife, son and soon to be daughter. We're big foodies and enjoy hunting down the nearest treats in our area or visiting the street food stalls. Most weekends usually involve finding parks to help tire our son out but that never seems to work.\n\nMost of my hobbies include exercise or sport to some degree which to be fair I need sitting at a desk most days. Currently I'm into bouldering and obstacle runs, so will be doing HIIT training and running to keep fit. I have always had history in sport where I used to play rugby but my biggest achievement (other than my wife and children obviously) is probably Judo for Team GB.",
};
