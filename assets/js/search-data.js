// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "overview of my research and selected projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-music-tennis",
          title: "music + tennis",
          description: "my hobbies",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "View in browser or click on the right to download.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-the-docks",
          title: 'The Docks',
          description: "EP on Recorded Things",
          section: "Projects",handler: () => {
              window.location.href = "/projects/docks_ep/";
            },},{id: "projects-imitation",
          title: 'Imitation',
          description: "label debut with EP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imitation_ep/";
            },},{id: "projects-sampler-two",
          title: 'Sampler Two',
          description: "Recorded Things 2024 VA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rect2024_sampler_two_va/";
            },},{id: "projects-shallow-mind",
          title: 'Shallow Mind',
          description: "my first album/LP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/shallow_mind_lp/";
            },},{id: "projects-wasp",
          title: 'Wasp',
          description: "my first EP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wasp_ep/";
            },},{id: "projects-tennis",
          title: 'Tennis',
          description: "about my tennis career",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tennis/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/andyruddh", "_blank");
        },
      },{
        id: 'social-linktree_username',
        title: 'Linktree_username',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andyruddh", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6Ava7scAAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/241/0889.html", "_blank");
        },
      },{
        id: 'social-bandcamp_id',
        title: 'Bandcamp_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-soundcloud_id',
        title: 'Soundcloud_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/andyruddh", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@andyruddh", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
