// gitprofile.config.js

const config = {
  github: {
    username: 'serignedia', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['serignedia.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'serigne-saliou-dia',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'https://serignedia.github.io',
    phone: '',
    email: 'pro.serigne.dia@outlook.fr',
  },
  resume: {
    fileUrl:
      'https://path_to_my_cv/file.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Linux',
    'Centreon',
    'Zabbix',
    'Splunk',
    'E.O.N',
    'Nagios',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Ansible',
    'PHP',
    'Bash',
    'Snort',
    'Security',
  ],
  experiences: [
    {
      company: 'Energy sector client',
      position: 'Infrastructure Consultant',
      from: 'October 2021',
      to: 'Present',
      companyLink: 'https://www.infogene.fr/',
    },
    {
      company: 'Somone',
      position: 'Monitoring Consultant',
      from: 'August 2020',
      to: 'October 2021',
      companyLink: 'https://somone.fr/',
    },
  ],
   certifications: [
    {
      name: 'Zabbix Certified Specialist 5.0',
      body: '',
      year: 'January 2021',
      link: 'https://www.zabbix.com/certificate/?firstname=Serigne+Saliou&lastname=DIA&certificate=CS-2101-058#.YBxYTI_J6KI.linkedin'
    },
    {
      name: 'Juniper Networks Certified Associate - Junos (JNCIA-Junos)',
      body: '',
      year: 'Mars 2020',
      link: 'https://www.youracclaim.com/badges/c451dbc3-ae15-4e6b-8d2f-cb51e49f82f6/linked_in_profile'
    },
  ], 
  education: [
    {
      institution: 'ESIEE PARIS',
      degree: 'Network and Security Engineer',
      from: '2017',
      to: '2020',
    },
    {
      institution: 'Jean Monnet University',
      degree: 'Network and Telecommunication DUT',
      from: '2014',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-0WLSBJYT48', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
