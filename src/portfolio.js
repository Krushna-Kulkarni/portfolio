const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://krushnakulkarni.com',
  title: 'KK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Krushna Kulkarni',
  role: 'Front End Engineer',
  description:
    'As a passionate Frontend Developer, I bring expertise in JavaScript and a deep understanding of UI libraries to the table. My forte lies in crafting responsive web applications and seamlessly integrating REST APIs. I am dedicated to creating visually stunning and user-friendly interfaces that elevate user experiences.',
  resume:
    'https://drive.google.com/file/d/1MtSeuijq5_cFb_H3DZuolirQZX23nXS-/view',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Range',
    description: 'Instant chat application made using socket.io',
    stack: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Chakra UI'],
    sourceCode: 'https://github.com/Krushna-Kulkarni/range',
    livePreview: 'https://range.up.railway.app',
  },
  {
    name: 'GistNotes',
    description:
      'A comprehensive note taking application with markdown formatting ',
    stack: ['MongoDb', 'Express.js', 'React.js', 'Node.js', 'Redux'],
    sourceCode: 'https://github.com/Krushna-Kulkarni/GistNotes',
    livePreview: 'https://gistnotes.up.railway.app',
  },
  // {
  //   name: 'Scroll',
  //   description: 'A dynamic social media application styled with TailwindCSS',
  //   stack: ['React.js', 'Node.js', 'TailwindCSS'],
  //   sourceCode: 'https://github.com/Krushna-Kulkarni/scroll',
  //   livePreview: 'https://socialscroll.netlify.app',
  // },
  {
    name: 'Bookbugs',
    description: 'A complete E-commerce application for buying books online',
    stack: ['React.js', 'Vanilla CSS'],
    sourceCode: 'https://github.com/Krushna-Kulkarni/BookBugs',
    livePreview: 'https://bookbugs.netlify.app',
  },
  {
    name: 'Momentum',
    description: 'A fitness exercises manual website made with Material UI',
    stack: ['React.js', 'Material UI'],
    sourceCode: 'https://github.com/Krushna-Kulkarni/momentum',
    livePreview: 'https://momentum-fitness.netlify.app',
  },
  {
    name: 'streamr',
    description: 'A video streaming website featuring youtube API',
    stack: ['React.js', 'Material UI'],
    sourceCode: 'https://github.com/Krushna-Kulkarni/streamr',
    livePreview: 'https://ytstreamr.netlify.app',
  },
  {
    name: 'Geektrust - Admin UI',
    description: 'A dynamic fully responsive admin dashboard with pagination',
    stack: ['React.js', 'Node.js', 'TailwindCSS'],
    sourceCode: 'https://github.com/Krushna-Kulkarni/geektrust_admin_ui',
    livePreview: 'https://geektrust-admin-ui-asssignment.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'Redux',
  'TailwindCSS',
  'Material UI',
  'Chakra-UI',
  'Git',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'krushnakulkarni17@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/in/krushna-kulkarni',
    github: 'https://github.com/krushna-kulkarni',
  },
}

export { header, about, projects, skills, contact }
