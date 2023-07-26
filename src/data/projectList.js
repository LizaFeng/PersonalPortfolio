const projectList = [
  {
    key: 1,
    projectName: "Animal Mafia",
    solo: false,
    teamSize: 5,
    startDate: "Jan 2023",
    endDate: "May 2023",
    technologies: ["Unity", "React", "HTML/CSS", "Javascript", "Firebase"],
    responsibilities: [],
    problem: "",
    //0th index would have the approach description.
    //1st index would have the results which includes links
    results: ["", ["", ""]],
    visuals: "",
  },
  {
    key: 2,
    projectName: "Hexadecimal Calculator",
    solo: true,
    teamSize: 1,
    startDate: "Dec 2022",
    endDate: "Dec 2022",
    technologies: ["Javascript", "React", "Node.js", "Html/Css"],
    responsibilities: [],
    problem: "",
    //0th index would have the approach description.
    //1st index would have the results which includes links
    results: ["", ["", ""]],
    visuals: "",
  },
  {
    key: 3,
    projectName: "Steal-Tastic",
    solo: false,
    teamSize: 4,
    startDate: "Dec 2021",
    endDate: "April 2022",
    technologies: ["Kotlin"],
    responsibilities: [
      "Made asynchronous HTTP Request with JSON parsing with android async HTTP",
      "Used Glide for image loading and caching",
      "Implemented an open-source parse server using back4app",
      "Worked with Team to set up a login/signup page",
    ],
    problem: `
    Small businesses would have deals but no way for them to share those 
    deals with clients and possible clients around them. There are some owners that 
    do not understand setting up an online platform to show to customers. Big businesses
    on the other hand, will have some things that go on sale in the store but because the 
    quantity of the item is insignificant, they may not post on their websites that the
    item is available in store for others to use. 
    `,
    //0th index would have the approach description.
    //1st index would have the results which includes links
    results: [
      `
      Our steal-tastic app allows users to share steal-tastic deals with other users of
      the platform. It is easy for the non-tech savy business owners to add their deals and 
      promotes people to explore their neighborhoods.
      `[("", "")],
    ],
    visuals: "",
  },
];

export default projectList;
