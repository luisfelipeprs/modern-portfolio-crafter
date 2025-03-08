
import React from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileSection from '../components/ProfileSection';
import IntroductionSection from '../components/IntroductionSection';
import AboutSection from '../components/AboutSection';
import SocialSection from '../components/SocialSection';
import SkillsSection from '../components/SkillsSection';
import TimelineSection from '../components/TimelineSection';
import ExperienceSection from '../components/ExperienceSection';
import { 
  Code, 
  Box, 
  PanelTop, 
  Cpu, 
  CircleUser, 
  RotateCcw, 
  SquareCode, 
  Database, 
  ServerCog,
  Flame, 
  Package, 
  GitMerge, 
  Target,
  Figma,
  Presentation
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Show welcome toast after slight delay
    const timer = setTimeout(() => {
      toast.info("Bem-vindo ao meu portfólio!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Skills data
  const skillCategories = [
    {
      name: "Front-end",
      skills: [
        { icon: <Box size={16} />, tooltip: "HTML" },
        { icon: <Code size={16} />, tooltip: "CSS" },
        { icon: <PanelTop size={16} />, tooltip: "JavaScript" },
        { icon: <Cpu size={16} />, tooltip: "React" },
        { icon: <CircleUser size={16} />, tooltip: "Vue" },
        { icon: <RotateCcw size={16} />, tooltip: "Angular" },
        { icon: <SquareCode size={16} />, tooltip: "Tailwind" },
        { icon: <Figma size={16} />, tooltip: "Figma" },
        { icon: <Presentation size={16} />, tooltip: "Material UI" },
      ]
    },
    {
      name: "Back-end",
      skills: [
        { icon: <ServerCog size={16} />, tooltip: "Node.js" },
        { icon: <Package size={16} />, tooltip: "Express" },
        { icon: <Flame size={16} />, tooltip: "Firebase" },
        { icon: <GitMerge size={16} />, tooltip: "GraphQL" },
        { icon: <Target size={16} />, tooltip: "RESTful APIs" },
      ]
    },
    {
      name: "Database & ORM",
      skills: [
        { icon: <Database size={16} />, tooltip: "MongoDB" },
        { icon: <Database size={16} />, tooltip: "PostgreSQL" },
        { icon: <Database size={16} />, tooltip: "MySQL" },
        { icon: <Package size={16} />, tooltip: "Prisma" },
      ]
    }
  ];
  
  // Timeline data
  const timelineItems = [
    { year: "2017", name: "Happy Code" },
    { year: "2019", name: "Cubos Academy" },
    { year: "2021", name: "Alura" },
    { year: "2022", name: "Rocketseat" },
    { year: "2023", name: "DevMedia" },
    { year: "2024", name: "Infinity School" },
    { year: "2024", name: "UNIFACS" }
  ];
  
  // Experience data
  const experienceItems = [
    { icon: <Code size={20} />, company: "Paradise Group" },
    { icon: <Code size={20} />, company: "OneSource" },
    { icon: <Code size={20} />, company: "DROP Royale" },
    { icon: <Code size={20} />, company: "Syntax Code" },
    { icon: <Code size={20} />, company: "GGMAX" },
    { icon: <Code size={20} />, company: "Revolution" }
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground py-6 px-4 md:py-10 md:px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div className="text-xl font-bold text-blue-500">
            <span className="mr-1">marco</span>
            <span className="text-foreground">dev</span>
            <span className="text-blue-500">.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-sm px-3 py-1 rounded border border-border hover:bg-secondary transition-colors">
              PT-BR
            </button>
            
            <button className="p-2 rounded-full bg-secondary text-foreground">
              🌙
            </button>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          <aside>
            <ProfileSection 
              name="Marco Dev"
              username="marcodev"
              location="São Paulo, Brasil"
              phone="+55 11 99999-9999"
              email="marco@email.com"
              company="DevCompany LTDA"
              imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </aside>
          
          <main className="space-y-6">
            <IntroductionSection 
              greeting="Olá Mundo!"
              skills="Desenvolvedor Front-End com habilidades em JavaScript e TypeScript e experiência em seus frameworks, além de Analista de Dados <strong>Pleno</strong>. Familiarizado com metodologias ágeis."
              education="Atualmente cursando Engenharia de Software na Universidade de São Paulo."
              experience="Mais de 50 clientes satisfeitos ao longo de 4 anos!"
            />
            
            <AboutSection 
              content="Olá, meu nome é Marco Dev, tenho 28 anos, sou entusiasta de tecnologia e estudante de desenvolvimento Front-End, tenho diversos projetos pessoais e já forneço inúmeras soluções para a comunidade. Gosto de desenvolver interfaces bonitas, intuitivas e fáceis de usar com a intenção de trazer uma boa experiência do usuário."
            />
            
            <SocialSection />
            
            <SkillsSection categories={skillCategories} />
            
            <TimelineSection items={timelineItems} />
            
            <ExperienceSection items={experienceItems} />
          </main>
        </div>
        
        <footer className="mt-16 mb-6 flex justify-center space-x-6">
          <a href="#" aria-label="Discord" className="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/><path d="M12 19.13A7.13 7.13 0 0 1 5.5 9.5H10a2 2 0 1 0 4 0h4.5A7.13 7.13 0 0 1 12 19.13Z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
        </footer>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Index;
