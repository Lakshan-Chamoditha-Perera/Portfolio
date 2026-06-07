import {
  SiJavascript, SiTypescript, SiPython,
  SiSpring, SiReact, SiNextdotjs, SiExpress, SiRedux, SiFlask, SiTailwindcss,
  SiMysql, SiPostgresql, SiMongodb, SiPrisma,
  SiApachekafka,
  SiDocker,
  SiGit, SiGithub, SiGitlab, SiBitbucket,
  SiJunit5, SiHibernate,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const ICON_MAP = {
  // Languages
  'java':             FaJava,
  'java (primary)':   FaJava,
  'java 8':           FaJava,
  'java 21':          FaJava,
  'javascript':       SiJavascript,
  'typescript':       SiTypescript,
  'python':           SiPython,

  // Frameworks
  'spring boot':      SiSpring,
  'spring boot 3':    SiSpring,
  'spring cloud':     SiSpring,
  'spring security':  SiSpring,
  'spring data jpa':  SiSpring,
  'react.js':         SiReact,
  'react':            SiReact,
  'reactjs':          SiReact,
  'next.js':          SiNextdotjs,
  'next.js 15':       SiNextdotjs,
  'express.js':       SiExpress,
  'redux':            SiRedux,
  'flask':            SiFlask,
  'tailwind css':     SiTailwindcss,

  // Databases
  'mysql':            SiMysql,
  'postgresql':       SiPostgresql,
  'mongodb':          SiMongodb,
  'hibernate (jpa)':  SiHibernate,
  'prisma orm':       SiPrisma,
  'prisma':           SiPrisma,

  // Testing
  'junit 5':          SiJunit5,

  // Messaging
  'apache kafka':     SiApachekafka,

  // Cloud & DevOps
  'aws':              FaAws,
  'docker':           SiDocker,

  // Version Control
  'git':              SiGit,
  'github':           SiGithub,
  'gitlab':           SiGitlab,
  'bitbucket':        SiBitbucket,
};

export default function TechChip({ name, accent }) {
  const Icon = ICON_MAP[name.toLowerCase()];
  return (
    <span className={`chip${accent ? ' accent' : ''}`}>
      {Icon && <Icon size={13} aria-hidden="true" />}
      {name}
    </span>
  );
}
