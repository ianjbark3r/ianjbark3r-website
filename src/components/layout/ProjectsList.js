import grannyFabThumb1 from '../../images/granny-fab-thumb.jpg';
import grannyFabThumb2 from '../../images/granny-fab-thumb-2.jpg';
import grannyFabThumb3 from '../../images/granny-fab-thumb-3.jpg';
import heroThumb1 from '../../images/whoisthatsuperhero-thumb.png';
import heroThumb2 from '../../images/whoisthatsuperhero-thumb-2.jpg';
import heroThumb3 from '../../images/whoisthatsuperhero-thumb-3.png';
import habitThumb1 from '../../images/thehabitjourney-thumb.png';
import habitThumb2 from '../../images/thehabitjourney-thumb-2.png';
import habitThumb3 from '../../images/thehabitjourney-thumb-3.png';
import websiteThumb1 from '../../images/personal-website-thumb.png';
import websiteThumb2 from '../../images/personal-website-thumb-2.jpg';
import websiteThumb3 from '../../images/personal-website-thumb-3.png';

export const projects = [
  {
    id: "03",
    img1: habitThumb1,
    img2: habitThumb2,
    img3: habitThumb3,
    title: "The Habit Journey",
    concept: "Companion app to James Clear's habit-building book 'Atomic Habits'",
    challenges: 'Building my first API, re-building said API due to tech constraints, auth, and account data storage.',
    solutions: 'After building an initial web app, I discovered that deploying my server file through Firebase Functions prohibited initiating a MongoDB database. In response, I migrated the web app code to Cloud Firestore, which helped reinforce my knowledge of NoSQL databases. Auth handled using Firebase Authentication, while user data is modeled with scalability and future features in mind.',
    repoUrl: 'https://github.com/ianjbark3r/the-habit-journey',
    tech: [
      "AJAX",
      "Bootstrap 4",
      "Express.js/Node.js",
      "Firebase Auth",
      "MongoDB/Firestore",
      "React",
      "Redux"
    ],
    url: "https://the-habit-journey.web.app/"
  },
  {
    id: "04",
    img1: grannyFabThumb1,
    img2: grannyFabThumb2,
    img3: grannyFabThumb3,
    title: "Granny Fab",
    concept: "Visually captivating brochure website for prominent local Austin artisan and accompanying OPA for ordering bespoke COVID masks.",
    challenges: 'Granny Fab makes visually stunning work, so the design needed to get out of the way and showcase that fact. But even while the understated fonts and buttons were designed to defer to the bright, large-format photography, the entire experience had to be sleek and sophisticated to capture the ethos of the brand.',
    solutions: 'By dividing the design into both mobile and large-format components, I was able to tightly control the final look for all devices to maintain the same polish as the brand itself. Furthermore, a simple library called AnchorLink provided a smooth and elegant interface with little fuss.',
    repoUrl: 'https://github.com/ianjbark3r/granny-fab',
    tech: [
      "React",
      "Bootstrap 4",
      "CSS3",
      "HTML5",
      "Sass"
    ],
    url: ""
  },
  {
    id: "02",
    img1: heroThumb1,
    img2: heroThumb2,
    img3: heroThumb3,
    title: "Who Is That Superhero?",
    concept: "Single-page application that helps casual Marvel fans explore the superheroes of The Avengers.",
    challenges: 'Learning Redux, asynchronous state management, understanding the "functional component vs container component" paradigm.',
    solutions: 'After initial trepidation at the amount of boilerplate required by Redux, I quickly became comfortable with its overall flow and structure. This knowledge lead to the discovery of a common design pattern for async data handling that solved several AJAX-related race conditions',
    repoUrl: 'https://github.com/ianjbark3r/whoisthatsuperhero',
    tech: [
      "AJAX",
      "Firebase",
      "Marvel Comics API",
      "React",
      "Redux"
    ],
    url: "https://whoisthatsuperhero.firebaseapp.com/"
  },
  {
    id: "01",
    img1: websiteThumb1,
    img2: websiteThumb2,
    img3: websiteThumb3,
    title: "Professional Website",
    concept: "Portfolio and contact portal for my free-lance web development work.",
    challenges: 'Learning a new front-end framework, styling a JavaScript application.',
    solutions: 'After an initial learning curve–and some heavy reading of documentation–I was able to build a baseline competency with React, leveraging my previous HTML experience. Additionally, Styled-Components helped make the transition from CSS to CSS in JS much easier.',
    repoUrl: 'https://github.com/ianjbark3r/ianjbark3r-website',
    tech: [
      "NPM",
      "React",
      "React Router",
      "Styled-Components",
      "Webpack"
    ],
    url: "https://ianjbaker.com"
  }
]