import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import aws from './aws.png'
import './App.css';

const App = () => {
  const skills = [
    { label: 'DESIGN', items: 'Microservices, Micro-Frontends, GraphQL' },
    { label: 'LANGUAGES', items: 'Java, ES6, Typescript, .net' },
    { label: 'FRAMEWORKS', items: 'Spring boot, ExpressJS, Apollo GraphQL, .net core' },
    { label: 'FRONTEND', items: 'React, Redux, Storyboard, Styleguidist, Webpack Module Federation' },
    { label: 'MOBILE', items: 'React Native, Appium' },
    { label: 'DevOps', items: 'AWS, Docker, Gitlab Pipelines, Github Actions, Jenkins, Teamcity' },
    { label: 'DATABASE', items: 'Postgres, MongoDb' },
  ];

  const projects = [
    {
      client: 'North American Investment Bank',
      duration: 'July 2023 - Current',
      technologies: 'ReactJS, MobX, Webpack Module Federation, ExpressJS, Spring Boot',
      description: 'I was involved in building the transaction banking frontend system for Large North American Bank. I played the role of tech architect and ramped up the team from 6 to 30 people, onboarding new members and ramping them on the Goldman Sachs ecosystem. Worked with teams spread across London, Bangalore and New York.',
      responsibilities: [
        'Moving the monolith frontend repository into micro frontend repositories based on domains, helping the teams to develop and deploy faster.',
        'Reuse of frontend components for client facing and customer service portals. Designing component libraries and business components to be reused across the systems.',
        'BFF for the frontend to interact with backend services.'
      ]
    }
  ]

  const renderProject = (project:any) => {
    return (
      <div key={project.client}>
       <h3 className="text-xl pb-1">{project.client}</h3>
       <div className="text-sm pb-1 ">{project.duration}</div>
       
       <div>{project.description}</div>
       <ul className="list-disc pl-4">
        {project.responsibilities.map((responsibility:any) => <li key={responsibility}>{responsibility}</li>)}
       </ul>
       <div className="text-md pb-1 text-indigo-800 py-2">Technologies: {project.technologies}</div>
      </div>
    )
  }

  return (
    <div className='p-8 page'>
      <div className='flex p-4 justify-between border-t-8 border-b-2 border-indigo-400'>
        <div>
          <h1 className="text-3xl font-bold">
            Hariharan Thiagarajan
          </h1>
          <h3>
            Lead Software Consultant
          </h3>
        </div>
        <div className='flex flex-row items-center'>
          <div className='pr-8'><img src={aws} width={'100px'} height={'100x'} alt='AWS Certified Software Architect'/></div>
          <div>
            <div>
              <EmailIcon />
              <a href='mailto:hariharanweb@gmail.com' className='pl-2'>hariharanweb@gmail.com</a>
            </div>
            <div>
              <PhoneIphoneIcon />
              <a href='tel:+91 9686602282' className='pl-2'>+91 9686602282</a>
            </div>
            <div>
              <GitHubIcon />
              <a href='https://github.com/hariharanweb' className='pl-2'>github.com/hariharanweb</a>
            </div>
            <div>
              <LinkedInIcon />
              <a href='https://www.linkedin.com/in/hariharant/' className='pl-2'>linkedin.com/in/hariharant/</a>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 pt-4 pb-8 border-b-2 border-indigo-200'>
        <h2 className="text-xl pb-2 underline">
          PROFESSIONAL SUMMARY
        </h2>
        <ul className="list-disc pl-8">
          <li>Tech leader with 17+ years of experience in designing and developing large scale enterprise applications.</li>
          <li>Full stack developer with experience in web, backend, mobile development and devops.</li>
          <li>Experience in multiple domains like travel, e-commerce and BFSI.</li>
          <li>Leading teams in distributed delivery setups.</li>
        </ul>
      </div>
      <div className='p-4 flex flex-row border-b-2 border-indigo-200'>
        <div className='pr-4'>
          <h2 className="text-xl pb-4 underline">
            SKILLS
          </h2>
          <div>
            {skills.map((skill) => (
              <div key={skill.label}>
                <span className='bg-blue-500 rounded-md p-1 text-sky-50'>
                  {skill.label}
                </span>
                <div className='p-1'>{skill.items}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='border-l-2 px-4 border-indigo-200'>
          <h2 className="text-xl pb-2 underline">
            EXPERIENCE
          </h2>
          <div>
            <div className='font-bold'>Thoughtworks Technologies</div>
            <div>Lead Consultant | Bangalore, India | November 2009 - Current</div>
          </div>
          <div className='pt-4'>
            <div className='font-bold'>Nokia Siemens Networks</div>
            <div>Application Developer | Bangalore, India | July 2007 - November 2009</div>
          </div>
        </div>
      </div>
      <div className='px-4 pt-4'>
        <h2 className="text-xl pb-2 underline">
          KEY PROJECTS
        </h2>
        <div>
          {
            projects.map((project) => {
              return renderProject(project);
            })
          }
        </div>
      </div>
    </div >
  );
}

export default App;
