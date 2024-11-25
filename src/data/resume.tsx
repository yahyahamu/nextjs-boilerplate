import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yahya Hamu",
  initials: "YH",
  url: "https://dillion.io",
  location: "Denver, CO",
  locationLink: "https://www.google.com/maps/place/denver",
  description:
    "Computer Science @ The University of Colorado Denver. I love learning and helping people. Software Engineer SOON TO BE!",
  summary:
    "I started my college education in 2021 and took some time for myself to realize that I want to become a full-time software engineer because of how much I enjoy solving complex problems, building innovative solutions, and the endless potential for growth in the tech industry. Currently, [I am pursuing a degree in Computer Science](/#education), [working at an innovative educational program dedicated to empowering young minds through coding and robotics](https://www.codeadvantage.org/about), and [traveled to many places experiencing many cool events over the years](/#hackathons). I am also a young creative mind cracking at my potential little by little, so feel free to be apart of my journey.",
  avatarUrl: "./hs1.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "Java",
    "C++",
    "3D-Printing",
    "Laser Cutting",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yhamu27@gmail.com",
    tel: "+7202805804",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yahyahamu",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yahya-hamu/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      Resume: {
        name: "View Resume",
        url: "/Yahya_Resume.pdf",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CodeAdvantage",
      href: "",
      badges: [],
      location: "Denver, CO",
      title: "Code Instructor",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVlOJFiwouFlOZ4jNCTr4bnzxpO2P1LzTrw&s",
      start: "June 2024",
      end: "Present",
      description:
        "CodeAdvantage is an innovative educational program dedicated to empowering young minds through coding and robotics. As a Code Instructor, my mission is to inspire creativity and develop problem-solving skills in students. I design and deliver engaging lesson plans, tailor instruction to individual needs, and collaborate closely with the school’s STEM team to ensure a cohesive learning experience. By fostering a supportive environment, I aim to shape the next generation of tech-savvy leaders and innovators.",
    },
    {
      company: "Empower Youth Everywhere",
      badges: [],
      href: "",
      location: "Denver, CO",
      title: "Co-Founder",
      logoUrl: "./eye.jpg",
      start: "November 2023",
      end: "Present",
      description:
        "Empower Youth Everywhere is a nonprofit organization dedicated to elevating the next generation. As a Co-founder and Organizer, my mission is to cultivate well-rounded individuals in academics, sportsmanship, and faith. Our focus is on shaping leaders, champions, and guardians of the future. EST. in Nov 2023.",
    },
    {
      company: "Headstarter AI",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer Fellow",
      logoUrl: "/hsai2.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        "As a Headstarter AI Software Engineering Fellow, I had the incredible opportunity to work on cutting-edge AI projects that push the boundaries of technology. This fellowship has allowed me to collaborate with industry experts, hone my skills in software development, and contribute to innovative solutions that are shaping the future of AI. My experience here not only deepens my technical expertise but also aligns with my passion for impactful, forward-thinking projects.",
    },
    {
      company: "NSBE @ CU Denver",
      href: "",
      badges: [],
      location: "Denver, CO",
      title: "President",
      logoUrl: "/nsbe.jpg",
      start: "May 2023",
      end: "May 2024",
      description:
        "As President of the National Society of Black Engineers (NSBE) at CU Denver, my role involved leading initiatives that support and empower our 90+ members. I coordinated events, overseeing programs, and worked closely with other board members to ensure our activities align with our mission of fostering engineering excellence and professional development. My focus was on driving member engagement, supporting career growth, and advancing our organization’s goals.",
    },
//     {
//       company: "Lime",
//       href: "https://li.me/",
//       badges: [],
//       location: "San Francisco, CA",
//       title: "Software Engineer",
//       logoUrl: "/lime.svg",
//       start: "January 2018",
//       end: "April 2018",
//       description:
//         "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
//     },
//     {
//       company: "Mitre Media",
//       href: "https://mitremedia.com/",
//       badges: [],
//       location: "Toronto, ON",
//       title: "Software Engineer",
//       logoUrl: "/mitremedia.png",
//       start: "May 2017",
//       end: "August 2017",
//       description:
//         "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
//     },
  ],
  education: [
      {
      school: "University of Colorado Denver",
      href: "https://www.ucdenver.edu/",
      degree: "Bachelor's Degree of Computer Science (B.A)",
      logoUrl: "/school.jpg",
      start: "Expected Graduation",
      end: "2026",
    },
//     {
//       school: "Buildspace",
//       href: "https://buildspace.so",
//       degree: "s3, s4, sf1, s5",
//       logoUrl: "/buildspace.jpg",
//       start: "2023",
//       end: "2024",
//     },
//     {
//       school: "Overland High School",
//       href: "https://www.cherrycreekschools.org/overland",
//       degree: "",
//       logoUrl: "/laurier.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "International Baccalaureate",
//       href: "https://ibo.org",
//       degree: "IB Diploma",
//       logoUrl: "/ib.png",
//       start: "2012",
//       end: "2016",
//     },
  ],
  projects: [
//     {
//       title: "Chat Collect",
//       href: "https://chatcollect.com",
//       dates: "Jan 2024 - Feb 2024",
//       active: true,
//       description:
//         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://chatcollect.com",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
//     },
//     {
//       title: "Magic UI",
//       href: "https://magicui.design",
//       dates: "June 2023 - Present",
//       active: true,
//       description:
//         "Designed, developed and sold animated UI components for developers.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://magicui.design",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/magicuidesign/magicui",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.magicui.design/bento-grid.mp4",
//     },
//     {
//       title: "llm.report",
//       href: "https://llm.report",
//       dates: "April 2023 - September 2023",
//       active: true,
//       description:
//         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://llm.report",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/dillionverma/llm.report",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.llm.report/openai-demo.mp4",
//     },
//     {
//       title: "Automatic Chat",
//       href: "https://automatic.chat",
//       dates: "April 2023 - March 2024",
//       active: true,
//       description:
//         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://automatic.chat",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
//     },
  ],
  hackathons: [
//     {
//       title: "Hack Western 5",
//       dates: "November 23rd - 25th, 2018",
//       location: "London, Ontario",
//       description:
//         "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 14th - 16th, 2018",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mobile application which delivers university campus wide events in real time to all students.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
//       links: [],
//     },
//     {
//       title: "FirstNet Public Safety Hackathon",
//       dates: "March 23rd - 24th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
//       icon: "public",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
//       links: [],
//     },
//     {
//       title: "DeveloperWeek Hackathon",
//       dates: "February 3rd - 4th, 2018",
//       location: "San Francisco, California",
//       description:
//         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
//       links: [
//         {
//           title: "Github",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/cryptotrends/cryptotrends",
//         },
//       ],
//     },
//     {
//       title: "HackDavis",
//       dates: "January 20th - 21st, 2018",
//       location: "Davis, California",
//       description:
//         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
//       win: "Best Data Hack",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/my6footprint",
//         },
//         {
//           title: "ML",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/my6footprint-machine-learning",
//         },
//         {
//           title: "iOS",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/CarbonWallet",
//         },
//         {
//           title: "Server",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/Wallet6/wallet6-server",
//         },
//       ],
//     },
//     {
//       title: "ETH Waterloo",
//       dates: "October 13th - 15th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
//       links: [
//         {
//           title: "Organization",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ethdocnet",
//         },
//       ],
//     },
//     {
//       title: "Hack The North",
//       dates: "September 15th - 17th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a virtual reality application allowing users to see themselves in third person.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Streamer Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/htn2017",
//         },
//         {
//           title: "Client Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/RTSPClient",
//         },
//       ],
//     },
//     {
//       title: "Hack The 6ix",
//       dates: "August 26th - 27th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ShareShip/ShareShip",
//         },
//         {
//           title: "Site",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://share-ship.herokuapp.com/",
//         },
//       ],
//     },
//     {
//       title: "Stupid Hack Toronto",
//       dates: "July 23rd, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/nsagirlfriend/nsagirlfriend",
//         },
//       ],
//     },
//     {
//       title: "Global AI Hackathon - Toronto",
//       dates: "June 23rd - 25th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/TinySamosas/",
//         },
//       ],
//     },
//     {
//       title: "McGill AI for Social Innovation Hackathon",
//       dates: "June 17th - 18th, 2017",
//       location: "Montreal, Quebec",
//       description:
//         "Developed realtime facial microexpression analyzer using AI",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
//       links: [],
//     },
//     {
//       title: "Open Source Circular Economy Days Hackathon",
//       dates: "June 10th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/genecis",
//         },
//       ],
//     },
//     {
//       title: "Make School's Student App Competition 2017",
//       dates: "May 19th - 21st, 2017",
//       location: "International",
//       description: "Improved PocketDoc and submitted to online competition",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
//       win: "Top 10 Finalist | Honourable Mention",
//       links: [
//         {
//           title: "Medium Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
//         },
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "HackMining",
//       dates: "May 12th - 14th, 2017",
//       location: "Toronto, Ontario",
//       description: "Developed neural network to optimize a mining process",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
//       links: [],
//     },
    {
      title: "2024 CU Denver Symposium",
      dates: "November 1st, 2024",
      location: "Denver, Colorado",
      description: (
  <>
    I participated and attended the CU Denver Data Science and Artificial Intelligence (DSAI) Symposium on November 1st, where my team and I placed 2nd in the Decoy AI Challenge! An amazing team: Luqman Abdurshid, Zahra Abdullahi, and Reem Saidmaeruf.
    <br />
    <strong>Key Takeaways:</strong>
    <ul>
      <li>
        <strong>Importance of Parameter Tuning:</strong> Finding effective adversarial attacks requires a well-tuned grid of hyperparameters to balance attack success and model performance.
      </li>
      <li>
        <strong>Understanding Attack Robustness:</strong> Adversarial robustness isn't just about accuracy but understanding how different attacks impact models with varying intensities.
      </li>
      <li>
        <strong>Value of Automation:</strong> Grid search proved valuable for efficient testing, and automating parameter sweeps saved significant time.
      </li>
    </ul>
  </>
),


      image:
        "https://pbs.twimg.com/media/GXTrh0GWwAAfXKd.jpg",
      links: [
        {
          title: "DECOY",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://cudenver-ai.github.io/",
        },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
      ],
    },
    {
      title: "NSBE 24' Leadership Conference",
      dates: "August 2nd - 4th, 2024",
      location: "Los Angeles, California",
      description:
        "At the NSBE Leadership Conference, I learned the value of honing my leadership abilities through targeted courses on strategic planning, team management, and conflict resolution. The conference provided important networking opportunities, allowing me to meet experienced professionals and fellow leaders who shared best practices for building and maintaining strong chapters. I also learned practical tips for implementing inclusive leadership practices and cultivating a mentorship culture, all of which are critical for making a long-term effect inside NSBE and the larger engineering community.",
      image:
        "https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/National-Society-of-Black-Engineers-featured.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/earthwatch",
//         },
//       ],
    },
    {
      title: "NSBE 24' National Conference",
      dates: "March 20th - 24th, 2024",
      location: "Atlanta, Georgia",
      description:
        "The NSBE National Conference provided me with useful insights into speeding my career progress through specific sessions on resume creation, interview methods, and navigating corporate structures in engineering. The career fair provides direct access to prominent companies, allowed me to network with recruiters and learn about internships, co-ops, and full-time positions designed specifically for Black engineers. Plus, the conference emphasized the value of mentorship and developing a strong professional network, providing me with tools to strategically improve my career and achieve long-term success in the engineering field.",
      image:
        "https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/National-Society-of-Black-Engineers-featured.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/threejs-planes",
//         },
//       ],
    },
    {
      title: "NSBE 23' Fall Regional Conference",
      dates: " November 10th - 12th, 2023",
      location: "San Jose, California",
      description:
        "",
      image:
        "https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/National-Society-of-Black-Engineers-featured.png",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/human-huntr-react-native",
//         },
//         {
//           title: "Source (API)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/human-huntr-rails",
//         },
//       ],
    },
    {
        title: "Zoox Office Tour",
      dates: "November 10th, 2023",
      location: "Foster City, California",
      description:
        "A company tour with Zoox, my first time being exposed to a company who works with autonomous vehicles. ",
      image:
        "./zoox.png",
      links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
//         },
      ],
    },
    {
      title: "NSBE 23' National Conference ",
      dates: "March 22nd - 26th, 2023",
      location: "Kansas City, Missouri",
      description:
        "",
      image:
        "https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/National-Society-of-Black-Engineers-featured.png",
//       win: "1st Place Winner",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-ionic",
//         },
//         {
//           title: "Source (Server)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-rails",
//         },
//       ],
    },
    {
      title: "NSBE 22' Fall Regional Fair",
      dates: "November 17th - 20th, 2022",
      location: "Los Angeles, California",
      description:
        "My first fall regional conference where I was introduced to many of the region 6 chapters.",
      image:
        "https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/National-Society-of-Black-Engineers-featured.png",
      links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/UWPortalSDK/crowmark",
//         },
      ],
    },
  ],
} as const;