document.addEventListener("alpine:init", () => {
  Alpine.data("site", () => ({
    openedPage: "about-me",
    navigationOpened: false,
    startPage: "about-me",
    menus: [
      {
        id: "about-me",
        label: "About me",
        page: "about-me",
      },
      {
        id: "projects",
        label: "Projects",
        page: "projects",
      },
      {
        id: "competences",
        label: "Competences",
        page: "competences",
      },
      {
        id: "contact-me",
        label: "Contact me",
        page: "contact-me",
      },
      {
        id: "attributions",
        label: "Attributions",
        page: "attributions",
      },
    ],
    pages: [
      {
        id: "about-me",
        title: "About me",
        content: ``,
      },
      {
        id: "projects",
        title: "Projects",
        content: [
          {
            id: "mm",
            title: "Modules manager",
            github: "",
            image: "./mm.jpg",
            description: `
            Developed collaboratively with a colleague, the Modules Manager is a web-based tool that efficiently manages modules. It provides students with a well-structured table, enabling them to quickly find the starting dates of each module in their curriculum. It simplifies the process of building and publishing a comprehensive module schedule.
            `,
          },
          {
            id: "creact",
            title: "Creact",
            github: "https://github.com/juliush-dev/creact",
            image:
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            This is a collection of React components that I am diligently building as I learn React JS. If you are also learning React, you have the opportunity to clone the repository and delve into the code, gaining insights into the implementation of each component. It's a great way to explore and understand React's capabilities!
            `,
          },
          {
            id: "labyrinth",
            title: "Labyrinth",
            github: "https://github.com/juliush-dev/labyrinth",
            image:
              "https://images.unsplash.com/photo-1636843651345-d59cc9ceef53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
            description: `
            A Python-based console game for two players, where the objective is to escape from a labyrinth. Initially, it was created as a gift for my younger brothers.
            `,
          },
          {
            id: "get-it-for-me",
            title: "Gifme",
            github: "https://github.com/juliush-dev/gifme",
            image:
              "https://images.unsplash.com/photo-1603566234384-f5f5b59168cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            "Or Get It For Me" is an intuitively designed UI-based YouTube video and audio downloader, built on top of the renowned YouTube CLI downloader, youtube-dl.
            `,
          },
          {
            id: "game-of-life",
            title: "Game Of Life",
            github: "https://github.com/juliush-dev/game-of-life",
            image:
              "https://images.unsplash.com/photo-1504838986326-0f4d3ce9cf63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            A Simple command line based game without player. Game of life is a visualisation of cells living or death, that create special kinds of pattern in each generation.
            `,
          },
          {
            id: "fx-bounds",
            title: "FxBounds",
            github: "https://github.com/juliush-dev/fxBounds",
            image:
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            FxBounds helps is a visual representation of Bounding Rectangles in javafx. It was build to help some of my friends understanding this concept to take intantage of it in their personal projects.
            `,
          },
          {
            id: "xolve",
            title: "Xolve",
            github: "https://github.com/juliush-dev/xolve",
            image:
              "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            Yes! This website was a project I created while learning JavaScript in the past. I continue to update it as needed, and soon it will be transformed into a blog page. This platform will allow me to share more stories and provide insights into my day-to-day life. 🙂
            `,
          },

          {
            id: "ritual",
            title: "Ritual",
            github: "",
            image:
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            description: `
            Currently in the conception phase, Ritual is poised to become a captivating web-based gamified learning platform. It aims to empower individuals to create their own personalized flashcards covering a wide array of topics.
            `,
          },
        ],
      },
      {
        id: "competences",
        title: "Competences",
        content: {
          languages: [
            {
              icon: "./flag-cam.png",
              title: "Yemba",
              xp: "pro",
            },
            {
              icon: "./lang-french.png",
              title: "French",
              xp: "pro",
            },
            {
              icon: "./flag-german.png",
              title: "German",
              xp: "int",
            },
            {
              icon: "./flag-uk.png",
              title: "English",
              xp: "int",
            },
          ],
          programming: [
            {
              icon: "./prog-php.png",
              title: "PHP",
              xp: "int",
            },
            {
              icon: "./prog-js.png",
              title: "Javascript",
              xp: "int",
            },
            {
              icon: "./prog-sql.png",
              title: "SQL",
              xp: "int",
            },
            {
              icon: "./prog-java.png",
              title: "Java",
              xp: "mid",
            },
            {
              icon: "./prog-python.png",
              title: "Python",
              xp: "mid",
            },
          ],
          tools: [
            {
              icon: "./tool-linux.png",
              title: "Linux",
              xp: "int",
            },
            {
              icon: "./tool-win.png",
              title: "Windows",
              xp: "int",
            },
            {
              icon: "./tool-apache.png",
              title: "Apche Web Server",
              xp: "int",
            },
            {
              icon: "./tool-git.png",
              title: "Git & GitHub",
              xp: "int",
            },
            {
              icon: "./tool-365.png",
              title: "MS Suite",
              xp: "mid",
            },
          ],
        },
      },
      {
        id: "contact-me",
        title: "Contact me",
        content: "contact me",
      },
      {
        id: "attributions",
        title: "Attributions",
        content: [
          {
            url: "https://unsplash.com/photos/",
            label: "Unsplash",
          },
          {
            url: "https://material.io/resources/icons/?style=baseline",
            label: "Material io icons",
          },
          {
            url: "https://www.iconfinder.com/",
            label: "Iconfinder",
          },
        ],
      },
    ],
  }));
});
