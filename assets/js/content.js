/* =====================================================================
   PORTFOLIO CONTENT FILE  —  EDIT THIS FILE TO UPDATE THE WEBSITE
   ---------------------------------------------------------------------
   This is the ONLY file you normally need to touch. Change the text,
   add images to the /images folder, and reference them by filename.
   Anything written between "quotes" can be edited freely.
   Placeholders are marked TODO — replace them with your real content.
   ===================================================================== */

const SITE = {
  /* --- Basic identity, shown across the whole site --- */
  name: "Suraj Plachikaad Suresh Kumar",
  shortName: "Suraj P. S. Kumar",
  tagline: "From HD-maps that guide self-driving cars to a perfectly-timed risotto — I turn complex problems into elegant, working solutions.",
  email: "TODO@example.com",            // shown in footer; remove if unwanted
  linkedin: "https://www.linkedin.com/in/suraj-plachikaad-suresh-kumar/",
  github: "",                           // optional, e.g. "https://github.com/username"
  location: "Stuttgart, Germany",

  /* =================================================================
     HOME PAGE
     ================================================================= */
  home: {
    photo: "images/Profile.JPG",
    heading: "Hello, I'm Suraj",
    intro:
      "I'm a Product Manager and engineer who has spent a decade turning ambitious ideas into shipped reality — " +
      "architecting cloud map systems for autonomous vehicles, defining V2X concepts, and now steering measurement & " +
      "calibration solutions at Vector. I'm relentlessly curious: I collect knowledge the way some collect stamps, and " +
      "I love untangling messy problems until they click. Off the clock, I chase ridgelines, climb boulders, swim, and " +
      "binge great TV — and in the kitchen I treat every dish like a small engineering project: taste, tweak, plate, repeat.",
    // Quick stats (animated counters). Edit numbers freely.
    stats: [
      { value: 13, suffix: "+", label: "Years in tech" },
      { value: 4,  suffix: "",  label: "Companies" },
      { value: 25, suffix: "+", label: "Skills mastered" },
      { value: 2,  suffix: "",  label: "Degrees" },
    ],
    hobbies: [
      { icon: "🥾", title: "Hiking",      img: "images/Hiking.jpg",  text: "Chasing ridgelines and big views — the longer the trail, the better." },
      { icon: "🧗", title: "Bouldering",  img: "images/boulder.jpg", text: "Reading a route like a puzzle, then solving it move by move." },
      { icon: "👨‍🍳", title: "Cooking",   img: "images/food.jpg",    text: "Reverse-engineering flavours and plating new dishes — tasting and creating is my edible R&D." },
      { icon: "🏊", title: "Swimming",    img: "",                   text: "Laps to reset the mind — my favourite kind of deep focus." },
      { icon: "📺", title: "Watching TV", img: "",                   text: "A devoted binge-watcher with a soft spot for clever storytelling." },
    ],
    gallery: [ "images/travel1.jpg", "images/Travel2.jpg" ],
  },

  /* =================================================================
     PROFESSIONAL EXPERIENCE  (paste roles from LinkedIn here)
     ================================================================= */
  experience: [
    {
      role: "Product Manager — Solution Manager, Measurement & Calibration (MICROSAR Classic)",
      company: "VECTOR Informatik · Full-time",
      logo: "vector.com",
      headline: "Steering the strategy of a flagship measurement & calibration solution",
      period: "Dec 2024 – Present",
      location: "Stuttgart, Germany · On-site",
      bullets: [
        "Strategic development of the product within the Classic Measurement & Calibration Solution",
        "Create marketing material (solution presentations, product information)",
        "Coordinate and clarify customer requirements; support sales and program management",
        "Technical contact for development and deployment",
        "Develop concepts for new customer requirements and product improvements",
        "Coordinate the solution across product lines, Vector subsidiaries and cooperation partners",
        "Maintain the user manual and solution stories for Measurement & Calibration",
      ],
    },
    {
      role: "Development Engineer — Solutions Architect",
      company: "ZF Group · Full-time",
      logo: "zf.com",
      headline: "Architected the cloud brain that streams maps to self-driving cars",
      period: "May 2022 – Nov 2024",
      location: "Friedrichshafen, Germany",
      bullets: [
        "Designed data model, defined protocols, API requirements and cloud map-storage strategy, overseeing delivery of map data to the vehicle connectivity unit",
        "Planned and estimated front-end and back-end effort for cloud-hosted Map-over-the-Air services",
        "Defined V2X concept and interface for vehicle-to-infrastructure communication",
        "Coordinated development of web applications for Map-over-the-Air services",
        "Skills: C, Python3, +7 more",
      ],
    },
    {
      role: "Development Engineer — Component Owner",
      company: "ZF Group · Full-time",
      logo: "zf.com",
      headline: "Owned the map components that help autonomous cars find their way",
      period: "May 2020 – Apr 2022",
      location: "Friedrichshafen, Germany",
      bullets: [
        "Developed architectures and interfaces for map software components for autonomous vehicle localisation and navigation",
        "Built V2X applications on target hardware for vehicle-to-infrastructure communication",
        "Handled deliveries of map-based software for the target system",
        "Evaluated technologies for HD-Map creation",
        "Coordinated cloud-hosted map applications and managed deliveries to the vehicle",
        "Skills: C, C++, +8 more",
      ],
    },
    {
      role: "Development Engineer — Developer (HD-Maps, Autonomous Driving)",
      company: "ZF Group · Full-time",
      logo: "zf.com",
      headline: "Turned raw sensor data into HD-maps for autonomous driving",
      period: "May 2018 – Apr 2020",
      location: "Friedrichshafen, Germany",
      bullets: [
        "Developed software functions (Python & C++) for sensor data in HD-Map generation and usage",
        "Functional implementation on ROS using PCL libraries to handle large sensor data",
        "Skills: Python, C++, +10 more",
      ],
    },
    {
      role: "Master Thesis",
      company: "ABB",
      logo: "abb.com",
      period: "May 2017 – Nov 2017",
      location: "Germany · On-site",
      bullets: [
        "Investigated and implemented an IEC 61131-3 Structured Text parser",
        "Emulated a PLC in ABB RobotStudio using .NET (C#)",
        "Extended an ABB Python library for IEC 61131-3 Structured Text emulation",
        "Prototyped remote control of the simulation environment using voice commands (AWS)",
      ],
    },
    {
      role: "Working Student",
      company: "Darmstadt University of Applied Sciences",
      logo: "h-da.de",
      period: "Dec 2017 – Apr 2018",
      location: "Darmstadt, Germany",
      bullets: [],
    },
    {
      role: "Intern — Interactive Intelligent Data Visualization",
      company: "ABB · Operation Management",
      logo: "abb.com",
      period: "Oct 2016 – Mar 2017",
      location: "Ladenburg, Germany",
      bullets: [
        "Developed modules in HTML5, JavaScript and D3.js on ASP.NET Web API services",
        "Analysed and developed algorithms to find anomalies in industrial data (C#)",
        "Designed sorting mechanisms and a persistence layer for parameter configuration",
      ],
    },
    {
      role: "Test Specialist",
      company: "ABB",
      logo: "abb.com",
      period: "Aug 2014 – Aug 2015",
      location: "Bengaluru, India · On-site",
      bullets: [
        "Wrote and executed test cases for control products",
        "Designed control environments, hardware setup and system integration",
        "Mentored management trainees in testing",
      ],
    },
    {
      role: "Management Trainee",
      company: "ABB",
      logo: "abb.com",
      period: "Aug 2013 – Aug 2014",
      location: "India",
      bullets: [
        "Product type & regression testing in the ABB 800xA system; developed auto-test scripts",
        "Upgraded FPGAs across various controllers in the division",
      ],
    },
    {
      role: "Student Project",
      company: "Honeywell Process Solutions",
      logo: "honeywell.com",
      period: "Jan 2013 – Jun 2013",
      location: "Bengaluru, India",
      bullets: [
        "Building Automation System implementation & integration; graphics development",
        "Integrated and programmed sensors, actuators and controllers",
      ],
    },
  ],

  /* =================================================================
     EDUCATION
     ================================================================= */
  education: [
    {
      degree: "MSc, Electrical Engineering & Information Technology",
      school: "Darmstadt University of Applied Sciences",
      period: "2015 – 2017 · Grade 1.7",
      logo: "h-da.de",
      icon: "🎓",
      image: "",
      details: "Advanced programming, Android/Java development, intelligent automation, task planning for mobile robots, advanced robotics, telemanipulators, feedback control & mechatronics. Led a six-person Augmented Reality project: smart glasses detecting industrial objects and surfacing database info, with text detection, virtual buttons and speech recognition. Focus on Industry 4.0 and IoT.",
    },
    {
      degree: "BE, Instrumentation Technology",
      school: "RNS Institute of Technology, India",
      period: "2009 – 2013 · Grade 82%",
      logo: "rnsit.ac.in",
      icon: "⚙️",
      image: "",
      details: "Core: C, C++, analytical/process/biomedical/aircraft/optical instrumentation, robotics, signals & systems, mobile communication, automation in process control, advanced & process control systems, digital image processing, microcontrollers. Final-year project at Honeywell on Building Management Systems. Coordinated college fests, robotics club member, departmental newsletter editor.",
    },
  ],

  /* =================================================================
     SKILLS  (0–100 = bar fill level)
     ================================================================= */
  skills: [
    { name: "Programming",                 level: 85 },
    { name: "Problem Management",           level: 88 },
    { name: "Planning",                     level: 85 },
    { name: "Organisation",                 level: 85 },
    { name: "Mathematical & Analytical",    level: 85 },
    { name: "Gathering Info & Knowledge",   level: 90 },
  ],

  /* Technical skills shown as tags, grouped by area. Edit freely. */
  techSkills: [
    { group: "Programming",  items: ["C", "C++", "Python3", "Java", "C# .NET", "JavaScript", "CSS", "D3.js"] },
    { group: "Domains",      items: ["HD Maps", "Autonomous Vehicles", "V2X", "LiDAR", "Embedded Software", "ROS", "Robotics"] },
    { group: "Architecture & Cloud", items: ["Enterprise Architecture", "Component Design", "Cloud Applications", "OpenShift", "Web Services", "Protocol Buffers"] },
    { group: "Process & Mgmt", items: ["Project Management", "Planning", "Requirements Management", "Component Testing", "Analytic Problem Solving"] },
    { group: "Automation & Tools", items: ["ABB 800xA", "IEC 61131", "Structured Text", "Robot Studio", "Matlab", "Unity3D", "Visio", "Microsoft Office"] },
  ],
};
