import Appwrite from '@/components/technologies/Appwrite';
import Pnpm from '@/components/technologies/Pnpm';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import ReactJs from '@/components/technologies/ReactJS';
import { Project } from '@/types/project';
import Ethers from '@/components/technologies/Ethers';
import Solidity from '@/components/technologies/Solidity';
import Hardhat from '@/components/technologies/Hardhat';
import JavaScript from '@/components/technologies/JavaScript';
export const projects: Project[] = [
  {
    title: 'DocuLEX',
    description:
      'DocuLex is a next-generation high-code documentation & registration platform designed for courts, advocates, and legal workflows. It leverages AI, Blockchain,(ZK) Proofs to securely manage, verify, register & retrieve legal & official documents',
    image: '/project/DocuLEX.png',
    video: "",
    link: 'https://docu-lex.vercel.app/',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="reactjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'postgresql', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'ethers', icon: <Ethers key="ethers" /> },
      { name: 'Solidity', icon: <Solidity key="solidity" /> },
      { name: 'Hardhat', icon: <Hardhat key="hardhat" /> },
    ],
    live: 'https://github.com/ankit-1011/DocuLEX.git',
    details: true,
    projectDetailsPageSlug: 'https://github.com/ankit-1011/DocuLEX.git',
    isWorking: true, // Currently in development
  },
  {
    title: 'TrustBallot',
    description:
      'TrustBallot is a blockchain-based decentralized voting platform designed to provide secure, transparent, and tamper-proof elections.',
    image: '/project/TrustBallot.png',
    video: "",
    link: 'https://trust-ballot-zujo.vercel.app/',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="reactjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'mongodb', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'ethers', icon: <Ethers key="ethers" /> },
      { name: 'Solidity', icon: <Solidity key="solidity" /> },
      { name: 'Hardhat', icon: <Hardhat key="hardhat" /> },
    ],
    live: 'https://github.com/ankit-1011/TrustBallot.git',
    details: true,
    projectDetailsPageSlug: 'https://github.com/ankit-1011/TrustBallot.git',
    isWorking: true, // Currently in development
  },
  {
    title: 'QuickAI',
    description:
      'Quick.AI is an AI-powered content creation platform designed to help users generate articles, images, and optimize content with ease and speed.',
    image: '/project/QuickAI.png',
    video: "",
    link: 'https://quickai-gs.vercel.app/',
    technologies: [
      { name: 'React.js', icon: <ReactIcon key="reactjs" /> },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      { name: 'psql', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    live: 'https://quick-ai-rouge-gamma.vercel.app/',
    details: true,
    projectDetailsPageSlug: 'https://github.com/ankit-1011/Quick.AI.git',
    isWorking: true, // Currently in development
  }
];
