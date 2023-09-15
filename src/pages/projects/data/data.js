import { home, clubreport, graph, devmod } from '../images/datapool';
import { toba1, toba2, toba3, toba4, toba5, toba6 } from '../images/tobatalks'
import { fuser1, fuser2, fuser3, fuser4 } from '../images/fuser'
import { donut1, donut2, donut3, donut4, donut5 } from '../images/donut'
import { bj1, bj2, bj3, bj4 } from '../images/blackjack'
import { wave1, wave2, wave3, wave4, wave5 } from '../images/waveai'



const PROJECTS = [
    {
        url: "datapool",
        name: "DataPool.ca",
        tldr: "I was employed by my former swim club to create an application capable of analyzing group competitive swimming data.",
        images: [home, clubreport, graph, devmod],
        description: "DataPool started as a passion project during my time as a competitive swimmer and coach. After noticing a lack of alternatives, I developed a Django project capable of analyzing swimming data. After my club’s head coach and board of directors had seen my prototype, they employed me to continue development of the app for their use in analyzing our club’s performance. Once employed, I developed a React.js frontend and expanded the app’s functionality by researching, inventing  and automating a greater range of group swimming performance analysis frameworks.",
        technologies: ["Django", "React.js", "SQL", "AWS and DNS", "APIs"],
        links: [<a href="https://data-pool.ca">Project Link</a>],
        dates: "May 2022 - Present"
    }, {
        url: "waveai",
        name: "WaveAI",
        tldr: "To practice a new language, WaveAI lets you talk with an AI in your chosen language in a facetime-like format.",
        images: [wave1, wave2, wave3, wave4, wave5],
        description: "One of my good friends had an idea for an app that allowed language learners to practice their conversational skills by talking to an AI. Together with my technical knowledge, we envisioned an iOS app that could realize her idea. Since then, we have begun working on it. My responsibility as the lead developer is to implement her designs in SwiftUI, establish the connection to OpenAI’s ChatGPT via API calls, and ensure the functionality of the app using the MVVM architecture. I’ve successfully developed the primary feature of the app, however it is still a work in progress.",
        technologies: ["iOS", "Swift", "OpenAI API", "ChatGPT"],
        links: [<span>None... yet!</span>],
        dates: "July 2023 - Present"
    }, {
        url: "tobatalks",
        name: "TobaTalks",
        tldr: "Collaborated with classmates to envision and create an iOS application to facilitate communication for non-verbal individuals",
        images: [toba1, toba2, toba3, toba4, toba5, toba6],
        description: "In highschool, my friend had an non-verbal autistic younger brother who depended on text-to-speech apps to communicate. As she was upset with the affordability and capability of the existing apps, she proposed we create our own using what we had learned from iOS development. In our team, I took the role of lead developer, responsible for implementing the MVVM architecture that the app relied on as well as implementing data persistence through the iOS file system. ",
        technologies: ["iOS", "SwiftUI", "MVVM"],
        links: [<a href='https://github.com/OwenWaldron/TobaTalk'>GitHub</a>],
        dates: "Sep 2021 - Present (on pause)"
    }, {
        url: "fuser",
        name: "FUSER",
        tldr: "As part of my computer science class, I constructed an iOS virtual store demo to showcase UI/UX principles, Firebase connectivity, and User objects.",
        images: [fuser1, fuser2, fuser3, fuser4],
        description: "As my Grade 12 Computer Science class final project, we created a virtual store demo for iOS. Using SwiftUI, the demo fetches user and product data from a Firebase online database, updating it through API calls whenever a user adds an item to cart, changes their password, or registers.",
        technologies: ["iOS", "SwiftUI", "Firebase", "XCode"],
        links: [<a href='https://github.com/OwenWaldron/FUSER'>GitHub</a>],
        dates: "June 2021"
    }, {
        url: "donut",
        name: "Donut.py",
        tldr: 'Inspired by the infamous "donut.c", I created a vector graphics engine in python using techniques from calculus and linear algebra.',
        images: [donut1, donut2, donut3, donut4, donut5],
        description: 'In my highschool math class, we had a project to apply what we had learned in a real world setting. Inspired by the infamous "donut.c", I created a vector graphics engine in python using techniques from calculus and linear algebra. I created parameterized equations for different shapes, and rendered them using a z-buffer and specular lighting techniques.',
        technologies: ["Python", "Vector graphics", "Specular lighting"],
        links: [<a href='https://github.com/OwenWaldron/Donut'>GitHub</a>],
        dates: "November 2021"
    }, {
        url: "blackjack",
        name: "BlackJack",
        tldr: 'Using ReactJS, I created blackjack powered by a deck of cards API. This project was done to showcase my grasp of the basics of React and interacting with a web API.',
        images: [bj1, bj2, bj3, bj4],
        description: "Using ReactJS, I created blackjack powered by a deck of cards API. The cards are \"drawn\" from an external server which keeps track of the deck. Currently, there are no stakes to each game, but it's fun nonetheless! This project was done to showcase my grasp of the basics of React and interacting with a web API",
        technologies: ["JavaScript", "React", "API"],
        links: [<a href='https://blackjack-git-master-owenwaldron.vercel.app/'>Project Link</a>, <a href='https://github.com/OwenWaldron/blackjack'>GitHub</a>],
        dates: "November 2021"
    }
]

export default PROJECTS;