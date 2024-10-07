import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Meu objetivo é alavancar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e ofereçam experiências excepcionais ao usuário.`;

export const ABOUT_TEXT = `Sou um desenvolvedor front-end, imerso no mundo dinâmico das tecnologias Javascript, dominando ferramentas como ReactJS, NextJS, React Native e NodeJS. Minha jornada se estende para além do front-end, abraçando também o desenvolvimento de aplicativos móveis e back-end para a web. Estou em constante busca por desafios que me permitam aplicar minha expertise de forma criativa, visando impactar positivamente o mercado de tecnologia e contribuir para o avanço da indústria. Com uma paixão pelo aprendizado contínuo e uma sede insaciável por excelência técnica, estou pronto para enfrentar os desafios mais complexos e transformar ideias em realidade.`;

export const EXPERIENCES = [
  {
    year: "2021 - Atual",
    role: "Dev React",
    company: "Ingenium Systems",
    description: `Experiência no desenvolvimento e aprimoramento de recursos internos, realizando melhorias contínuas na plataforma e implementando ajustes conforme as necessidades do cliente. Colaboração ativa com equipes multifuncionais, garantindo a entrega de soluções eficazes e de alta qualidade. Implementação de novas interfaces e telas em plataformas existentes, aplicando as melhores práticas de desenvolvimento para assegurar consistência visual e funcional.`,
    technologies: ["Javascript", "React.js", "Next.js", "Redux.js", "Scss", "Css3", "HTML5", "API REST"],
  },
  {
    year: "2019 - 2021",
    role: "Auxiliar Administrativo",
    company: "Vitalab Medicina Diagnóstica",
    description: ``,
    technologies: [],
  }
];

export const PROJECTS = [
  {
    title: "Nlw-SpaceTime",
    image: project1,
    description:
      "Aplicação de linha do tempo com autenticação Oauth.",
    technologies: ["Node.js, TypeScript, Fastify, ESLint, Prisma + SQLite, React + Next.js, TailwindCSS"],
    link: "https://github.com/TONSANTOS/Nlw-SpaceTime"
  },
  {
    title: "React-Redux-Zustand",
    image: project2,
    description:
      "Este é um projeto que utiliza Redux e Redux Toolkit para gerenciamento de estado em uma aplicação React. A aplicação é um player de cursos online, onde as aulas são puladas automaticamente. Além disso, o projeto explora a criação de hooks personalizados, integração com uma API para carregar os dados dos cursos, uso de async thunks para chamadas assíncronas e migração do Redux para Zustand.",
    technologies: ["Redux, Zustand, React, TypeScript, CSS"],
    link: "https://github.com/TONSANTOS/React-Redux-Zustand"
  },
  {
    title: "FoodShop-ReactRedux",
    image: project3,
    description:
      "App de Compras de Alimentos | Usando Redux + Persist + Hooks",
    technologies: ["React, Redux, Redux Toolkit, CSS"],
    link: "https://github.com/TONSANTOS/FoodShop-ReactRedux"
  },
  {
    title: "Nlw Expert Notes",
    image: project4,
    description:
      "Blocos de Notas é uma aplicação web elegante e altamente funcional, desenvolvida com tecnologias de ponta para oferecer uma experiência de usuário excepcional. Combinando o poder do ReactJS, Typescript, Vite, TailwindCSS e integração de APIs web, este aplicativo oferece uma plataforma intuitiva para tomar notas, organizar ideias e aumentar a produtividade, tudo isso com um design responsivo que se adapta perfeitamente a qualquer dispositivo, seguindo a abordagem Mobile-First.",
    technologies: ["React, Type Script, Vite, TailwindCSS"],
    link: "https://github.com/TONSANTOS/Nlw-Expert-Notes"
  },
];

export const CONTACT = {
  address: "Feira de Santana - BA",
  phoneNo: "+55 (75) 99147-0020",
  email: "tonnsantoss@outlook.com",
};
