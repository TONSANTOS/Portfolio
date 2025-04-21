import {
  // FaXTwitter,
  // FaFacebook,
  FaGithub,
  FaLinkedin,
  // FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiJavascript, SiCss3, SiHtml5, SiGit, SiNpm, SiYarn } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projetos", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiência de Trabalho", href: "#work" },
  { label: "Educação", href: "#education" },
  { label: "Certificados", href: "#certifications" },
  { label: "Contato", href: "#contact" },
];

export const HERO = {
  name: "TON SANTOS",
  greet: "Olá! 👋🏻",
  description:
    "Sou um desenvolvedor frontend apaixonado com um talento especial para criar interfaces de usuário bonitas e funcionais. Gosto de transformar ideias em experiências web envolventes."
};

export const PROJECTS = [
  {
    id: 1,
    name: "React-Redux-Zustand",
    description:
      "Este é um projeto que utiliza Redux e Redux Toolkit para gerenciamento de estado em uma aplicação React. A aplicação é um player de cursos online, onde as aulas são puladas automaticamente. Além disso, o projeto explora a criação de hooks personalizados, integração com uma API para carregar os dados dos cursos, uso de async thunks para chamadas assíncronas e migração do Redux para Zustand.",
    image: projectImage1,
    githubLink: "https://github.com/TONSANTOS/React-Redux-Zustand",
  },
  {
    id: 2,
    name: "Nlw SpaceTime",
    description:
      "Aplicação de linha do tempo com autenticação Oauth.",
    image: projectImage2,
    githubLink: "https://github.com/TONSANTOS/Nlw-SpaceTime",
  },
  {
    id: 3,
    name: "Food Shop",
    description:
      "App de Compras de Alimentos | Usando Redux + Persist + Hooks.",
    image: projectImage3,
    githubLink: "https://github.com/TONSANTOS/FoodShop-ReactRedux",
  },
  {
    id: 4,
    name: "Nlw Unite",
    description:
      "Desenvolvimento de uma aplicação front-end com ReactJS, utilizando TypeScript para tipagem, Vite para build rápido, TailwindCSS para estilização responsiva e integração com uma API Node.js para comunicação com o back-end.",
    image: projectImage4,
    githubLink: "https://github.com/TONSANTOS/NLW-Unite",
  },
  {
    id: 5,
    name: "Nlw Expert Notes",
    description:
      "Aplicação web moderna e funcional, desenvolvida com ReactJS, TypeScript, Vite e TailwindCSS. Oferece uma experiência intuitiva para anotações e organização, com design responsivo e abordagem Mobile-First.",
    image: projectImage5,
    githubLink: "https://github.com/TONSANTOS/Nlw-Expert-Notes",
  },
  {
    id: 6,
    name: "Sistema de Previsão do Tempo",
    description:
      "Aplicação simples feita com RactJs, para verificar a previsão do tempo de qualquer cidade.",
    image: projectImage6,
    githubLink: "https://github.com/TONSANTOS/Weather-Forecast",
  },
];

export const BIO = [
  "Sou um desenvolvedor front-end, imerso no mundo dinâmico das tecnologias Javascript, dominando ferramentas como ReactJS, NextJS, React Native e NodeJS. Minha jornada se estende para além do front-end, abraçando também o desenvolvimento de aplicativos móveis e back-end para a web. Estou em constante busca por desafios que me permitam aplicar minha expertise de forma criativa, visando impactar positivamente o mercado de tecnologia e contribuir para o avanço da indústria. Com uma paixão pelo aprendizado contínuo e uma sede insaciável por excelência técnica, estou pronto para enfrentar os desafios mais complexos e transformar ideias em realidade."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "4 anos",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "2.5 anos",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "4 anos",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1 ano",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-teal-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "2.5 anos",
  },
  {
    icon: <DiSass className="text-4xl text-pink-500 lg:text-5xl" />,
    name: "SCSS",
    experience: "4 anos",
  },
  {
    icon: <SiCss3 className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS3",
    experience: "4 anos",
  },
  {
    icon: <SiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML5",
    experience: "4 anos",
  },
  {
    icon: <SiTypescript className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "TypeScript",
    experience: "2.5 anos",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "4 anos",
  }
];

export const TOOLS = [
  {
    icon: <SiGit className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
    experience: "4 anos",
  },
  {
    icon: <SiNpm className="text-4xl text-red-600 lg:text-5xl" />,
    name: "NPM",
    experience: "4 anos",
  },
  {
    icon: <SiYarn className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Yarn",
    experience: "3 anos",
  },
];

export const EXPERIENCES = [
  {
    title: "Dev React",
    company: "Ingenium Systems",
    startDate: new Date(2020, 10),
    description:
      "Desenvolvedor de software com experiência no desenvolvimento e aprimoramento de plataformas web. Atuo na criação de telas de Kanban para gerenciamento de tarefas, implementando soluções intuitivas e eficientes. Responsável pelo desenvolvimento da tela de cadastro, garantindo validações de campos obrigatórios, formatos de dados (e-mail, telefone) e aplicação de regras de negócio. Também implementei a tela de SLA (Service Level Agreement) para monitoramento de níveis de serviço e desenvolvi uma aplicação FAQ completa, incluindo autenticação, para facilitar o acesso a informações pelos usuários. Além disso, contribuo para a evolução da plataforma existente, participando do desenvolvimento de melhorias e novos recursos internos, realizando ajustes conforme as necessidades dos clientes. Trabalho em equipes multifuncionais, colaborando na entrega de soluções eficientes e de alta qualidade.",
  },
  {
    title: "Auxiliar Administrativo",
    company: "Vitalab-Medicina Diagnóstica",
    duration: "Julho de 2019 - Outubro de 2021",
    description:
      "Responsável pelo atendimento ao público, gestão de documentos, controle de agenda e emissão de relatórios. Controle financeiro, comunicação com fornecedores e apoio em processos de recursos humanos",
  },
];

export const EDUCATION = [
  {
    degree: "Graduação, Engenharia de Software",
    institution: "Estácio",
    duration: "Junho de 2024 - 2027",
    description:
      "Engenharia de Software ensina os fundamentos teóricos e práticos para o desenvolvimento, manutenção e gestão de sistemas de software. O curso abrange disciplinas de programação, algoritmos, banco de dados, arquitetura de software, segurança da informação e inteligência artificial. Além disso, inclui temas como engenharia de requisitos, testes de software, metodologias ágeis e gestão de projetos.",
  },
  {
    degree: "Front end Developer",
    institution: "Rocketseat",
    duration: "Agosto 2019",
    description:
      "Desenvolvimento de sistemas Web, utilizando ReactJS/NextJS no frontend e Node.js para o lado do servidor.",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "React e Next.js na Prática: Composição de Componentes, Roteamento, Server e Client Components, Formulários, Toolchain e Tipagem Moderna.",
    credentialUrl: "https://app.rocketseat.com.br/certificates/561ccdc0-9659-4fa7-b284-8f5b6da11bf5",
    skills: "Next.js · React.js · Tailwind CSS · Zod · TypeScript · API REST · Orval",
    gradient: "bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r"
  },
  {
    id: 2,
    title: "Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, uso de URL states.",
    credentialUrl: "https://app.rocketseat.com.br/certificates/89f484bf-a36c-435d-a2f8-62c5f46c176d",
    skills: "React.js · TypeScript · Tailwind CSS · Vite · URL States",
    gradient: "bg-gradient-to-tr from-indigo-200 via-slate-600 to-indigo-200"
  },
  {
    id: 3,
    title: "Fundamentos para Desenvolvimento de Software.",
    credentialUrl: "https://www.linkedin.com/learning/certificates/2684f523aa578cf5f7cb8c0b525dd02f70f88a4a2c2fdc5bac75775058d122e2",
    skills: "Programação(computação) · Desenvolvimento de software",
    gradient: "bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800"
  },
  {
    id: 4,
    title: "Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST,  utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados.",
    credentialUrl: "https://app.rocketseat.com.br/certificates/3c03a8ab-6e71-414c-a478-b6c3289844ea",
    skills: "Desenvolvimento de back-end · Node.js · API REST · TypeScript · Fastify · Prisma ORM · SQLite · Zod",
    gradient: "bg-gradient-to-tr from-slate-500 to-yellow-100"
  },
  {
    id: 5,
    title: "Fundamentos do Redux, Aplicação com Redux, criação de hooks, API, Async Thunks, Setup do Zustand, migração de Redux para Zustand e testes unitários para Redux e Zustand.",
    credentialUrl: "https://app.rocketseat.com.br/certificates/594db83d-e213-416f-abac-8e77af1bb536",
    skills: "TypeScript · API · Zustand · hooks · Redux.js",
    gradient: "bg-gradient-to-tr from-sky-400 to-indigo-900"
  },
  {
    id: 6,
    title: "Desenvolvimento Front-end com ReactJS, Typescript, Vite, TailwindCSS, Integração de APIs Web e Design Responsivo Mobile-First.",
    credentialUrl: "https://app.rocketseat.com.br/certificates/da41fb3d-b01f-49f8-ad4a-bdbe0e7cf7ad",
    skills: "Tailwind CSS · APIs Web · TypeScript · Vite · mobile-first",
    gradient: "bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
  },
  {
    id: 7,
    title: "Certificado de Curso de Inteligência Artificial em Programação com React, Tailwind, shadcn/ui e Radix UI.",
    credentialUrl: "https://app.rocketseat.com.br/certificates/db50a3aa-372e-4774-9cec-8bcc003838cf",
    skills: "Tailwind CSS · TypeScript · shadcn/ui · Radix UI",
    gradient: "bg-gradient-to-tr from-gray-700 via-gray-900 to-black"
  }
];

export const SOCIAL_MEDIA_LINKS = [
  /* {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  }, */
  {
    href: "https://www.instagram.com/tonnsantoss/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/TONSANTOS",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tonnsantoss/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
