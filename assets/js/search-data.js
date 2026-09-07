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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of our group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-two-papers-are-accepted-by-neurips-2024",
          title: 'Two papers are accepted by NeurIPS 2024!',
          description: "",
          section: "News",},{id: "news-i-will-be-joining-the-computer-science-department-at-the-university-of-kentucky-as-an-assistant-professor-in-fall-2025-feel-free-to-reach-out-to-me",
          title: 'I will be joining the Computer Science Department at the University of Kentucky...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-icml-2025",
          title: 'One paper is accepted by ICML 2025!',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-uai-2025",
          title: 'One paper is accepted by UAI 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-breaking-the-computational-barrier-provably-efficient-actor-critic-for-low-rank-mdps-is-accepted-by-icml-2026",
          title: 'Our paper: “Breaking the Computational Barrier: Provably Efficient Actor-Critic for Low-Rank MDPs” is...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%52%75%69%71%75%61%6E%48%75%61%6E%67@%75%6B%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0eo3JGgAAAAJ", "_blank");
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
