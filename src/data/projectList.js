const projectList = [
  {
    key: 1,
    name: "Animal Mafia",
    solo: false,
    teamSize: 5,
    startDate: "Jan 2023",
    endDate: "Present",
    technologies: ["Unity", "React", "HTML/CSS", "Javascript", "Firebase"],
    responsibilities: [
      "Conducted research and developed prototypes using plain JavaScript code, canvas for graphics, and ultimately adopted Unity for game development.",
      "Oversaw build monitoring and deployment processes to ensure seamless game releases.",
      "Acted as Scrum Master, facilitating effective team communication, planning, and task allocation for weekly progress.",
      "Contributed to the creation of the game's landing page, showcasing the game and attracting potential players.",
      "Proficiently handled issues and bugs identified by peers during the game's testing phase.",
      "Provided support in configuring Firebase for website deployment and game hosting.",
    ],
    problem: `
    Animal Mafia is an exciting web-based Unity game that takes 
    players on a thrilling adventure in the animal kingdom. 
    The game features a dynamic world where animals play the 
    roles of mafia characters, engaging players in farming 
    activities and daring dungeon runs. The game is hosted on 
    Firebase, providing seamless gameplay and interactive 
    experiences for players.
    `,
    //0th index would have the approach description.
    //1st index would have the results which includes links
    results: [
      [
        "Farming & Harvesting: Plant and harvest crops in the Garden using keypress 'P' for progression.",
        "Inventory Management: Access the Barn to trade seeds, track resources, and manage collected items.",
        "Dungeon Adventure: Embark on thrilling dungeon runs, defeat enemies, and face powerful bosses.",
        "Animal Mafia Characters: Meet charismatic characters like 🐮 Cow Capone and 🐏 Carlo Bahbino, who guide the player through the game.",
        "Shop & Trading: Purchase seeds and valuable items in the shop, and sell harvested crops for gold.",
        "Progress Tracking: Keep track of in-game balance and inventory status with keypress 'I'.",
      ],
      ["https://github.com/chloealbright/Unity-Animal-Mafia"],
    ],
    visuals: "https://www.loom.com/share/60eddec2714a4d2182d0af7176454b9e",
  },
  {
    key: 2,
    name: "Hexadecimal Calculator",
    solo: true,
    teamSize: 1,
    startDate: "Dec 2022",
    endDate: "Dec 2022",
    technologies: ["Javascript", "React", "Node.js", "Html/Css"],
    responsibilities: [],
    problem: `
    The objective of this project is to develop a Hexadecimal
     Calculator using React States, aimed at providing a 
     user-friendly interface for performing basic arithmetic 
     operations on hexadecimal numbers. 
      `,
    //0th index would have the approach description.
    //1st index would have the results which includes links
    results: [
      [
        "Initialize Calculator State: Create a React state to store the current hexadecimal value and the selected arithmetic operation. Set the initial state to 0.",
        "Input Handling: Attach event handlers to the hexadecimal input buttons and operation buttons. Update the calculator state accordingly as users input values.",
        "Arithmetic Operation Handling: Implement functions to handle each arithmetic operation (+, -, *, and /) on hexadecimal values. Store the selected operation in the calculator state.",
        "Calculator Screen Display: Update the calculator screen to show the current hexadecimal value input and the selected operation.",
        "Evaluate Expression: Implement a function to evaluate the expression on the calculator screen when the '=' button is pressed. Display the result in hexadecimal format.",
        "Clear Button: Attach an event handler to the clear button to reset the calculator state to its initial value (0).",
        "Error Handling: Implement checks to prevent division by zero and limit the number of characters entered. Display appropriate error messages when necessary.",
        "Input Rules Enforcement: Add validation to disallow entering an operation as the first input and prevent consecutive operations. Display error messages or disable buttons accordingly.",
      ],
      `
      The calculator will allow 
      users to input two hexadecimal numbers, select an arithmetic
       operation (+, -, *, or /), and display the result in 
       hexadecimal format. The primary focus is on utilizing React 
       state management concepts to update and display the 
       calculation results dynamically. Additionally, the project 
       will incorporate error handling to prevent division by zero,
        limit the number of characters entered, and enforce input 
        rules for operations.
        `,
      ["https://github.com/LizaFeng/Hexadecimal-Calculator"],
    ],
    visuals: "",
  },
  {
    key: 3,
    name: "Steal-Tastic",
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
    Our app enables easy deal-sharing for businesses and users, promoting local 
    exploration and fostering community connections. Small businesses can 
    effortlessly share their deals, and customers can discover enticing offers 
    in their neighborhoods. The app bridges the gap between small and large businesses, 
    providing a seamless platform for sharing deals with both existing and potential clients.
    `,
    //0th index would have the approach description.
    //1st index would have the results which includes links
    results: [
      [
        "User Registration: Implement a secure and efficient user registration process to onboard new users onto the platform.",
        "User Login: Provide a reliable and straightforward login mechanism for users to access their accounts.",
        "Post Creation: Allow users to compose and publish posts, including pictures, descriptions, addresses, and categorization, for sharing their experiences with others.",
        "Post Viewing: Enable users to explore and view posts from other users, promoting interaction and engagement within the community.",
        "Category Filtering: Implement a filtering system that allows users to view posts belonging to specific categories, facilitating targeted content discovery.",
      ],
      ["https://github.com/LizaFeng/Steal-tastic0.3"],
    ],
    visuals: "",
  },
];

export default projectList;
