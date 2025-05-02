export const resources = {
    pt: {
        translation: {
            FORM_PLACEHOLDERS: {
                name: "Nome",
                email: "Email",
                message: "Mensagem"
            },
            FORM_BUTTON: { send: "Enviar", sending: "Enviando..." },
            TEXT_FOOTER: { label: "Todos os direitos reservados." },
            DISPLAY_CREDENTIAL_BUTTON: { label: "Exibir credencial" },
            FORM_ERROR_MESSAGES: {
                label01: "Erro ao entrar em contato!",
                label02: "Verifique o preenchimento dos campos em destaque.",
                label03: "Mensagem enviada com sucesso",
                label04: "Falha ao enviar mensagem. Por favor, tente novamente mais tarde"
            },
            DATE_TEXT: [
                { label: "ano" },
                { label: "anos" },
                { label: "mês" },
                { label: "meses" },
                { label: "e" },
            ],
            TITLES: {
                projects: "Projetos",
                bio: "Bio",
                skills: "Habilidades",
                work_experience: "Experiência de Trabalho",
                education: "Educação",
                certifications: "Certificados",
                get_in_touch: "Entre em contato",
            },
            NAVIGATION_LINKS: [
                { label: "Projetos", href: "#projects" },
                { label: "Bio", href: "#bio" },
                { label: "Habilidades", href: "#skills" },
                { label: "Experiência de Trabalho", href: "#work" },
                { label: "Educação", href: "#education" },
                { label: "Certificados", href: "#certifications" },
                { label: "Contato", href: "#contact" },
            ],
            HERO: {
                name: "TON SANTOS",
                greet: "Olá!",
                description:
                    "Sou um desenvolvedor frontend apaixonado por criar interfaces de usuário bonitas e funcionais. Adoro transformar ideias em experiências web envolventes e intuitivas.",
                downloadResumeButtonText: "Baixar currículo"
            },
            PROJECTS: [
                {
                    id: 1,
                    name: "React-Redux-Zustand",
                    description:
                        "Este é um projeto que utiliza Redux e Redux Toolkit para gerenciamento de estado em uma aplicação React. A aplicação é um player de cursos online, onde as aulas são puladas automaticamente. Além disso, o projeto explora a criação de hooks personalizados, integração com uma API para carregar os dados dos cursos, uso de async thunks para chamadas assíncronas e migração do Redux para Zustand.",
                    icon: "projectImage1",
                    githubLink: "https://github.com/TONSANTOS/React-Redux-Zustand",
                },
                {
                    id: 2,
                    name: "Nlw SpaceTime",
                    description:
                        "Aplicação de linha do tempo com autenticação Oauth.",
                    icon: "projectImage2",
                    githubLink: "https://github.com/TONSANTOS/Nlw-SpaceTime",
                },
                {
                    id: 3,
                    name: "Food Shop",
                    description:
                        "App de Compras de Alimentos | Usando Redux + Persist + Hooks.",
                    icon: "projectImage3",
                    githubLink: "https://github.com/TONSANTOS/FoodShop-ReactRedux",
                },
                {
                    id: 4,
                    name: "Nlw Unite",
                    description:
                        "Desenvolvimento de uma aplicação front-end com ReactJS, utilizando TypeScript para tipagem, Vite para build rápido, TailwindCSS para estilização responsiva e integração com uma API Node.js para comunicação com o back-end.",
                    icon: "projectImage4",
                    githubLink: "https://github.com/TONSANTOS/NLW-Unite",
                },
                {
                    id: 5,
                    name: "Nlw Expert Notes",
                    description:
                        "Aplicação web moderna e funcional, desenvolvida com ReactJS, TypeScript, Vite e TailwindCSS. Oferece uma experiência intuitiva para anotações e organização, com design responsivo e abordagem Mobile-First.",
                    icon: "projectImage5",
                    githubLink: "https://github.com/TONSANTOS/Nlw-Expert-Notes",
                },
                {
                    id: 6,
                    name: "Sistema de Previsão do Tempo",
                    description:
                        "Aplicação simples feita com RactJs, para verificar a previsão do tempo de qualquer cidade.",
                    icon: "projectImage6",
                    githubLink: "https://github.com/TONSANTOS/Weather-Forecast",
                },
            ],
            BUTTON_TEXT_TO_VIEW_ON_GITHUB: {
                label: "Ver no GitHub"
            },
            BIO: [
                "Sou um desenvolvedor front-end, imerso no mundo dinâmico das tecnologias Javascript, dominando ferramentas como ReactJS, NextJS, React Native e NodeJS. Minha jornada se estende para além do front-end, abraçando também o desenvolvimento de aplicativos móveis e back-end para a web. Estou em constante busca por desafios que me permitam aplicar minha expertise de forma criativa, visando impactar positivamente o mercado de tecnologia e contribuir para o avanço da indústria. Com uma paixão pelo aprendizado contínuo e uma sede insaciável por excelência técnica, estou pronto para enfrentar os desafios mais complexos e transformar ideias em realidade."
            ],
            SKILLS: [
                {
                    icon: "React",
                    classNameIcon: "text-4xl text-cyan-400 lg:text-5xl",
                    name: "React",
                    experience: "4 anos",
                },
                {
                    icon: "Nextjs",
                    classNameIcon: "text-4xl text-white lg:text-5xl",
                    name: "Next.js",
                    experience: "2.5 anos",
                },
                {
                    icon: "NodeJs",
                    classNameIcon: "text-4xl text-green-600 lg:text-5xl",
                    name: "Node.js",
                    experience: "4 anos",
                },
                {
                    icon: "PostgreSQL",
                    classNameIcon: "text-4xl text-sky-700 lg:text-5xl",
                    name: "PostgreSQL",
                    experience: "1 ano",
                },
                {
                    icon: "Tailwind",
                    classNameIcon: "text-4xl text-teal-400 lg:text-5xl",
                    name: "Tailwind CSS",
                    experience: "2.5 anos",
                },
                {
                    icon: "Sass",
                    classNameIcon: "text-4xl text-pink-500 lg:text-5xl",
                    name: "SCSS",
                    experience: "4 anos",
                },
                {
                    icon: "CSS3",
                    classNameIcon: "text-4xl text-blue-500 lg:text-5xl",
                    name: "CSS3",
                    experience: "4 anos",
                },
                {
                    icon: "HTML5",
                    classNameIcon: "text-4xl text-orange-500 lg:text-5xl",
                    name: "HTML5",
                    experience: "4 anos",
                },
                {
                    icon: "TypeScript",
                    classNameIcon: "text-4xl text-blue-600 lg:text-5xl",
                    name: "TypeScript",
                    experience: "2.5 anos",
                },
                {
                    icon: "JavaScript",
                    classNameIcon: "text-4xl text-yellow-400 lg:text-5xl",
                    name: "JavaScript",
                    experience: "4 anos",
                }
            ],
            TOOLS: [
                {
                    icon: "Git",
                    classNameIcon: "text-4xl text-orange-600 lg:text-5xl",
                    name: "Git",
                    experience: "4 anos",
                },
                {
                    icon: "NPM",
                    classNameIcon: "text-4xl text-red-600 lg:text-5xl",
                    name: "NPM",
                    experience: "4 anos",
                },
                {
                    icon: "Yarn",
                    classNameIcon: "text-4xl text-blue-500 lg:text-5xl",
                    name: "Yarn",
                    experience: "3 anos",
                },
            ],
            EXPERIENCES: [
                {
                    title: "Dev React",
                    company: "Ingenium Systems",
                    startDate: "2020-11-01",
                    text: "Novembro de 2020 - o momento ·",
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
            ],
            EDUCATION: [
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
            ],
            CERTIFICATIONS: [
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
            ],
            SOCIAL_MEDIA_LINKS: [
                {
                    href: "https://www.instagram.com/tonnsantoss/",
                    icon: "Instagram",
                    classNameIcon: "hover:opacity-80"
                },
                {
                    href: "https://github.com/TONSANTOS",
                    icon: "Github",
                    classNameIcon: "hover:opacity-80"
                },
                {
                    href: "https://www.linkedin.com/in/tonnsantoss/",
                    icon: "LinkedIn",
                    classNameIcon: "hover:opacity-80"
                },
            ]
        }
    },
    en: {
        translation: {
            FORM_PLACEHOLDERS: {
                name: "Name",
                email: "Email",
                message: "Message"
            },
            FORM_BUTTON: { send: "Send", sending: "Sending..." },
            TEXT_FOOTER: { label: "All rights reserved." },
            DISPLAY_CREDENTIAL_BUTTON: { label: "Display credential" },
            FORM_ERROR_MESSAGES: {
                label01: "Error contacting!",
                label02: "Check that the highlighted fields are filled in.",
                label03: "Message sent successfully",
                label04: "Failed to send message. Please try again later"
            },
            DATE_TEXT: [
                { label: "year" },
                { label: "years" },
                { label: "month" },
                { label: "months" },
                { label: "and" },
            ],
            TITLES: {
                projects: "Projects",
                bio: "Bio",
                skills: "Skills",
                work_experience: "Work Experience",
                education: "Education",
                certifications: "Certifications",
                get_in_touch: "Get in touch",
            },
            NAVIGATION_LINKS: [
                { label: "Projects", href: "#projects" },
                { label: "Bio", href: "#bio" },
                { label: "Skills", href: "#skills" },
                { label: "Work Experience", href: "#work" },
                { label: "Education", href: "#education" },
                { label: "Certifications", href: "#certifications" },
                { label: "Contact", href: "#contact" },
            ],
            HERO: {
                name: "TON SANTOS",
                greet: "Hello!",
                description:
                    "I'm a frontend developer passionate about creating beautiful and functional user interfaces. I love turning ideas into engaging and intuitive web experiences.",
                downloadResumeButtonText: "Download resume"
            },
            PROJECTS: [
                {
                    id: 1,
                    name: "React-Redux-Zustand",
                    description:
                        "This is a project that uses Redux and Redux Toolkit for state management in a React application. The application is an online course player where lessons are automatically skipped. Additionally, the project explores creating custom hooks, integration with an API to load course data, using async thunks for asynchronous calls, and migrating from Redux to Zustand.",
                    icon: "projectImage1",
                    githubLink: "https://github.com/TONSANTOS/React-Redux-Zustand",
                },
                {
                    id: 2,
                    name: "Nlw SpaceTime",
                    description:
                        "Timeline application with Oauth authentication.",
                    icon: "projectImage2",
                    githubLink: "https://github.com/TONSANTOS/Nlw-SpaceTime",
                },
                {
                    id: 3,
                    name: "Food Shop",
                    description:
                        "Food Shopping App | Using Redux + Persist + Hooks.",
                    icon: "projectImage3",
                    githubLink: "https://github.com/TONSANTOS/FoodShop-ReactRedux",
                },
                {
                    id: 4,
                    name: "Nlw Unite",
                    description:
                        "Development of a front-end application with ReactJS, using TypeScript for typing, Vite for fast build, TailwindCSS for responsive styling, and integration with a Node.js API for back-end communication.",
                    icon: "projectImage4",
                    githubLink: "https://github.com/TONSANTOS/NLW-Unite",
                },
                {
                    id: 5,
                    name: "Nlw Expert Notes",
                    description:
                        "Modern and functional web application, developed with ReactJS, TypeScript, Vite and TailwindCSS. Offers an intuitive experience for notes and organization, with responsive design and Mobile-First approach.",
                    icon: "projectImage5",
                    githubLink: "https://github.com/TONSANTOS/Nlw-Expert-Notes",
                },
                {
                    id: 6,
                    name: "Weather Forecast System",
                    description:
                        "Simple application made with ReactJs, to check the weather forecast for any city.",
                    icon: "projectImage6",
                    githubLink: "https://github.com/TONSANTOS/Weather-Forecast",
                },
            ],
            BUTTON_TEXT_TO_VIEW_ON_GITHUB: {
                label: "View on GitHub"
            },
            BIO: [
                "I am a front-end developer, immersed in the dynamic world of Javascript technologies, mastering tools like ReactJS, NextJS, React Native and NodeJS. My journey extends beyond front-end, also embracing mobile app development and web back-end. I am constantly looking for challenges that allow me to apply my expertise creatively, aiming to positively impact the technology market and contribute to the advancement of the industry. With a passion for continuous learning and an insatiable thirst for technical excellence, I am ready to face the most complex challenges and turn ideas into reality."
            ],
            SKILLS: [
                {
                    icon: "React",
                    classNameIcon: "text-4xl text-cyan-400 lg:text-5xl",
                    name: "React",
                    experience: "4 years",
                },
                {
                    icon: "Nextjs",
                    classNameIcon: "text-4xl text-white lg:text-5xl",
                    name: "Next.js",
                    experience: "2.5 years",
                },
                {
                    icon: "NodeJs",
                    classNameIcon: "text-4xl text-green-600 lg:text-5xl",
                    name: "Node.js",
                    experience: "4 years",
                },
                {
                    icon: "PostgreSQL",
                    classNameIcon: "text-4xl text-sky-700 lg:text-5xl",
                    name: "PostgreSQL",
                    experience: "1 year",
                },
                {
                    icon: "Tailwind",
                    classNameIcon: "text-4xl text-teal-400 lg:text-5xl",
                    name: "Tailwind CSS",
                    experience: "2.5 years",
                },
                {
                    icon: "Sass",
                    classNameIcon: "text-4xl text-pink-500 lg:text-5xl",
                    name: "SCSS",
                    experience: "4 years",
                },
                {
                    icon: "CSS3",
                    classNameIcon: "text-4xl text-blue-500 lg:text-5xl",
                    name: "CSS3",
                    experience: "4 years",
                },
                {
                    icon: "HTML5",
                    classNameIcon: "text-4xl text-orange-500 lg:text-5xl",
                    name: "HTML5",
                    experience: "4 years",
                },
                {
                    icon: "TypeScript",
                    classNameIcon: "text-4xl text-blue-600 lg:text-5xl",
                    name: "TypeScript",
                    experience: "2.5 years",
                },
                {
                    icon: "JavaScript",
                    classNameIcon: "text-4xl text-yellow-400 lg:text-5xl",
                    name: "JavaScript",
                    experience: "4 years",
                }
            ],
            TOOLS: [
                {
                    icon: "Git",
                    classNameIcon: "text-4xl text-orange-600 lg:text-5xl",
                    name: "Git",
                    experience: "4 years",
                },
                {
                    icon: "NPM",
                    classNameIcon: "text-4xl text-red-600 lg:text-5xl",
                    name: "NPM",
                    experience: "4 years",
                },
                {
                    icon: "Yarn",
                    classNameIcon: "text-4xl text-blue-500 lg:text-5xl",
                    name: "Yarn",
                    experience: "3 years",
                },
            ],
            EXPERIENCES: [
                {
                    title: "React Developer",
                    company: "Ingenium Systems",
                    startDate: "2020-11-01",
                    text: "November 2020 - the moment ·",
                    description:
                        "Software developer with experience in developing and enhancing web platforms. I work on creating Kanban screens for task management, implementing intuitive and efficient solutions. Responsible for developing the registration screen, ensuring validation of required fields, data formats (email, phone) and application of business rules. I also implemented the SLA (Service Level Agreement) screen for service level monitoring and developed a complete FAQ application, including authentication, to facilitate user access to information. Additionally, I contribute to the evolution of the existing platform, participating in the development of improvements and new internal features, making adjustments according to customer needs. I work in cross-functional teams, collaborating in the delivery of efficient and high-quality solutions.",
                },
                {
                    title: "Administrative Assistant",
                    company: "Vitalab-Medicina Diagnóstica",
                    duration: "July 2019 - October 2021",
                    description:
                        "Responsible for customer service, document management, schedule control and report generation. Financial control, communication with suppliers and support in human resources processes.",
                },
            ],
            EDUCATION: [
                {
                    degree: "Bachelor's Degree, Software Engineering",
                    institution: "Estácio",
                    duration: "June 2024 - 2027",
                    description:
                        "Software Engineering teaches the theoretical and practical fundamentals for the development, maintenance and management of software systems. The course covers programming, algorithms, databases, software architecture, information security and artificial intelligence. Additionally, it includes topics such as requirements engineering, software testing, agile methodologies and project management.",
                },
                {
                    degree: "Front end Developer",
                    institution: "Rocketseat",
                    duration: "August 2019",
                    description:
                        "Web systems development, using ReactJS/NextJS on the frontend and Node.js for the server side.",
                },
            ],
            CERTIFICATIONS: [
                {
                    id: 1,
                    title: "React and Next.js in Practice: Component Composition, Routing, Server and Client Components, Forms, Toolchain and Modern Typing.",
                    credentialUrl: "https://app.rocketseat.com.br/certificates/561ccdc0-9659-4fa7-b284-8f5b6da11bf5",
                    skills: "Next.js · React.js · Tailwind CSS · Zod · TypeScript · REST API · Orval",
                    gradient: "bg-gradient-to-tr from-gray-900 to-gray-600 bg-gradient-to-r"
                },
                {
                    id: 2,
                    title: "Development of a front-end application in ReactJS, application of Properties, States and Components concepts, typing with Typescript, tooling with Vite, responsive interface with TailwindCSS, Node.js API consumption, use of URL states.",
                    credentialUrl: "https://app.rocketseat.com.br/certificates/89f484bf-a36c-435d-a2f8-62c5f46c176d",
                    skills: "React.js · TypeScript · Tailwind CSS · Vite · URL States",
                    gradient: "bg-gradient-to-tr from-indigo-200 via-slate-600 to-indigo-200"
                },
                {
                    id: 3,
                    title: "Fundamentals for Software Development.",
                    credentialUrl: "https://www.linkedin.com/learning/certificates/2684f523aa578cf5f7cb8c0b525dd02f70f88a4a2c2fdc5bac75775058d122e2",
                    skills: "Programming · Software development",
                    gradient: "bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800"
                },
                {
                    id: 4,
                    title: "Development of a back-end application in Node.js, application of REST API concepts, using TypeScript, Fastify as framework, integration of Prisma ORM + SQLite and Zod for data validation.",
                    credentialUrl: "https://app.rocketseat.com.br/certificates/3c03a8ab-6e71-414c-a478-b6c3289844ea",
                    skills: "Back-end development · Node.js · REST API · TypeScript · Fastify · Prisma ORM · SQLite · Zod",
                    gradient: "bg-gradient-to-tr from-slate-500 to-yellow-100"
                },
                {
                    id: 5,
                    title: "Redux Fundamentals, Application with Redux, creating hooks, API, Async Thunks, Zustand Setup, migrating from Redux to Zustand and unit tests for Redux and Zustand.",
                    credentialUrl: "https://app.rocketseat.com.br/certificates/594db83d-e213-416f-abac-8e77af1bb536",
                    skills: "TypeScript · API · Zustand · hooks · Redux.js",
                    gradient: "bg-gradient-to-tr from-sky-400 to-indigo-900"
                },
                {
                    id: 6,
                    title: "Front-end Development with ReactJS, Typescript, Vite, TailwindCSS, Web API Integration and Mobile-First Responsive Design.",
                    credentialUrl: "https://app.rocketseat.com.br/certificates/da41fb3d-b01f-49f8-ad4a-bdbe0e7cf7ad",
                    skills: "Tailwind CSS · Web APIs · TypeScript · Vite · mobile-first",
                    gradient: "bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600"
                },
                {
                    id: 7,
                    title: "Artificial Intelligence in Programming Course Certificate with React, Tailwind, shadcn/ui and Radix UI.",
                    credentialUrl: "https://app.rocketseat.com.br/certificates/db50a3aa-372e-4774-9cec-8bcc003838cf",
                    skills: "Tailwind CSS · TypeScript · shadcn/ui · Radix UI",
                    gradient: "bg-gradient-to-tr from-gray-700 via-gray-900 to-black"
                }
            ],
            SOCIAL_MEDIA_LINKS: [
                {
                    href: "https://www.instagram.com/tonnsantoss/",
                    icon: "Instagram",
                    classNameIcon: "hover:opacity-80"
                },
                {
                    href: "https://github.com/TONSANTOS",
                    icon: "Github",
                    classNameIcon: "hover:opacity-80"
                },
                {
                    href: "https://www.linkedin.com/in/tonnsantoss/",
                    icon: "LinkedIn",
                    classNameIcon: "hover:opacity-80"
                },
            ]
        }
    }
}