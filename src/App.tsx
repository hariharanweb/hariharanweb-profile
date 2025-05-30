import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './App.css';

const App = () => {
  return (
    <div className='p-8'>
      <div className='flex p-4 justify-between border-2 border-indigo-200'>
        <div>
          <h1 className="text-3xl font-bold">
            Hariharan Thiagarajan
          </h1>
          <h3>
            Lead Software Consultant
          </h3>
        </div>
        <div>
          <div>
            <EmailIcon />
            <a href='hariharanweb@gmail.com' className='pl-2'>hariharanweb@gmail.com</a>
          </div>
          <div>
            <PhoneIphoneIcon />
            <a href='+91 9686602282' className='pl-2'>+91 9686602282</a>
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
      <div className='p-4'>
        <h2 className="text-xl pb-2">
          PROFESSIONAL SUMMARY
        </h2>
        <ul className="list-disc pl-8">
          <li>Tech leader with 17+ years of experience in designing and developing large scale enterprise applications.</li>
          <li>Full stack developer with experience in web, backend, mobile development and devops.</li>
          <li>Experience in multiple domains like travel, e-commerce and BFSI.</li>
          <li>Leading teams in distributed delivery setups.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
