// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SlimPuft', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Proyectos de Github',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Proyectos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Restaurante Web – Edo Sushi Bar',
          description:
            'Proyecto basado en una plantilla web de restaurante que fue adaptada y personalizada completamente al español. Se modificó el contenido para representar un restaurante conocido en Perú, ajustando textos, estilos y estructura visual. Además, se integró un chatbot utilizando la API de ChatGPT para permitir interacción básica con los usuarios. Este proyecto fue desarrollado como práctica para mejorar habilidades en HTML, CSS y uso de inteligencia artificial en aplicaciones web.',
          imageUrl: 'sushi_restaurant.png',
          link: 'https://github.com/SlimPuft/Restaurante_proyecto',
        },
        {
          title: 'Sistema de Base de Datos para Biblioteca',
          description:
            'Proyecto enfocado en el diseño de una base de datos para la gestión de una biblioteca. Incluye la estructura de tablas y relaciones entre entidades como libros, usuarios y préstamos. Fue desarrollado como práctica para comprender conceptos básicos de bases de datos y organización de información, con apoyo de inteligencia artificial.',
          imageUrl: 'database_tech.png',
          link: 'https://github.com/SlimPuft/base-datos-biblioteca',
        },
        {
          title: 'Ejercicios de Programación en Python',
          description:
            'Colección de ejercicios prácticos desarrollados en Python como parte del aprendizaje de fundamentos de programación. Incluye lógica básica, estructuras de control, manejo de listas y resolución de problemas. Este proyecto refleja el progreso en el aprendizaje desde cero y la práctica constante.',
          imageUrl: 'python_code.png',
          link: 'https://github.com/SlimPuft/Tarea3-Ejercicios',
        },
      ],
    },
  },
  seo: { title: 'Portafolio de Leandro Caki Valdivieso', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: 'SlimPuft',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'leandrocv',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['HTML', 'CSS', 'Git', 'GitHub', 'Python Básico'],
  experiences: [],
  certifications: [],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: '',

  enablePWA: true,
};

export default CONFIG;
