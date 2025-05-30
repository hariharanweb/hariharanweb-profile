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
      client: 'Goldman Sachs - Transaction Banking',
      duration: '2023 - Current',
      technologies: 'ReactJS, MobX, Webpack Module Federation, ExpressJS, Spring Boot',
      description: 'I was involved in building the transaction banking frontend system for Goldman Sachs. I played the role of tech architect and ramped up the team from 6 to 30 people, onboarding new members and ramping them on the Goldman Sachs ecosystem. Worked with teams spread across London, Bangalore and New York.',
      responsibilities: [
        'Moving the monolith frontend repository into micro frontend repositories based on domains, helping the teams to develop and deploy faster.',
        'Reuse of frontend components for client facing and customer service portals. Designing component libraries and business components to be reused across the systems.',
        'BFF for the frontend to interact with backend services.'
      ]
    },
    {
      client: 'ONDC (Open Network For Digital Commerce - Government of India)',
      duration: '2022 - 2023',
      technologies: 'Open API Schema, ExpressJS, React, Storybook, EC2, API Gateway',
      description: 'ONDC is an initiative by the Govt of India to democratise the ecommerce industry. It simplifies and connects the Buyer and Sellers apps by defining contracts. I was involved in defining standards and contracts for mobility players to onboard on ONDC.',
      responsibilities: [
        'Define Open API contracts to be followed by Buyer Apps and Seller Apps.',
        'Authentication and authorization contracts between the players in ONDC.',
        'Interacting with existing mobility players and community members to define standards.',
        'Lead the team working on reference implementations and examples.'
      ]
    },
    {
      client: 'Kroger - US/India',
      duration: '2019 - 2021',
      technologies: 'React, Spring Boot, Kafka, Micro-frontends, Lerna, Postgres',
      description: 'Kroger is one of the largest American retail company. They were building a promotion planning platform and coupons management. I played the role of tech lead for teams spread across India and the US.',
      responsibilities: [
        'Designing event driven microservices for promotion planning using Spring boot and Kafka. Design of layered microservices architecture for the promotions management.',
        'Designing micro frontends for customer facing websites and BFFs for coupons management.',
        'Designing domain APIs to be consumed by several frontend layers.'
      ]
    },
    {
      client: 'Credit Suisse - Singapore',
      duration: '2018 - 2019',
      technologies: 'React, Spring Boot, GraphQL, Micro-frontends',
      description: 'I was leading a team which developed the Customer Onboarding and KYC Platform. It involved designing the API for onboarding using GraphQL, coaching the client teams on TDD, clean code, CI/CD.',
      responsibilities: [
        'Helped the client developers to ramp up on technologies like GraphQL.',
        'Helped the client to deliver the project by helping them define the Minimum Viable Project (MVP) and ramp up multiple teams on agile methodologies.'
      ]
    },
    {
      client: 'Gojek - Go-Finance - Singapore/India',
      duration: '2017 - 2018',
      technologies: 'React, GoLang, Play Framework(Java), gRPC, HAProxy, Terraform, AWS',
      description: 'Helped the client build a Loan Management System (LMS) and enabled them to enter into the microfinance market and Buy Now Pay Later platform.',
      responsibilities: [
        'Designing and building a scalable microservices which could enable the client to go to new markets in south-east asia and launch their microfinance products.',
        'Defining SDK for frontend in iOS and Android to be used by other apps in their super app.',
        'Deploying the microservices in AWS and on premises K8s',
        'Interacting with various business units inside the super app ecosystem to increase adoption of Buy Now Pay Later payments',
        'Helping the client to grow their teams in India, Singapore and Indonesia'
      ]
    },
    {
      client: 'TheTrainline - UK/India',
      duration: '2016 - 2017',
      technologies: 'React, React Native, .net, Appium',
      description: 'Helped the client build a mobile experience. Was lead of the team which developed white labelled mobile websites and mobile apps. Helped clients to go to market early and managed the release of 12 websites and mobile apps with complete automation.',
      responsibilities: [
        'Helped the client go to market early by leveraging React and React Native technologies.',
        'By following API first approach, the client was able to leverage the API as a product.',
        'White labelled app that could be easily configured for different clients.'
      ]
    }
  ]

  const renderProject = (project: any) => {
    return (
      <div key={project.client} className='border-b-2 border-indigo-200 pb-4 mb-4'>
        <h3 className="text-xl pb-1">{project.client}</h3>
        <div className="text-sm pb-1 ">{project.duration}</div>

        <div>{project.description}</div>
        <ul className="list-disc pl-4">
          {project.responsibilities.map((responsibility: any) => <li key={responsibility}>{responsibility}</li>)}
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
          <a href='https://www.credly.com/badges/a9646a10-96aa-4ecc-9813-ef223405f32d/public_url' target='_blank' className='pr-8'><img src={aws} width={'100px'} height={'100x'} alt='AWS Certified Software Architect' /></a>
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
      <div className='px-4 pt-4 pb-6 border-b-2 border-indigo-200'>
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
                <div className='p-1 pb-2'>{skill.items}</div>
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
            <div>Lead Consultant | Bangalore, India</div>
            <div className='text-sm'>November 2009 - Current</div>
          </div>
          <div className='pt-4'>
            <div className='font-bold'>Nokia Siemens Networks</div>
            <div>Application Developer | Bangalore, India</div>
            <div className='text-sm'>July 2007 - November 2009</div>
          </div>
          <h2 className="text-xl py-2 underline">
            CERTIFICATIONS
          </h2>
          <div><a href='https://www.credly.com/badges/a9646a10-96aa-4ecc-9813-ef223405f32d/public_url' target='_blank'>AWS Certified Software Architect</a></div>
          <h2 className="text-xl py-2 underline">
            EDUCATION
          </h2>
          <div className='pt-1'>MS Software Systems | BITS PILANI</div>
          <div className='text-sm pt-1'>2009-2011</div>
          <div className='pt-1'>BE Telecommunication | RVCE</div>
          <div className='text-sm pt-1'>2003-2007</div>
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
