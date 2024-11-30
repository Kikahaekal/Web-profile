import About from './components/About/About'
import Box from './components/Box'
import Header from './components/Header/Header'
import MainBox from './components/MainBox'
import Skills from './components/Skills/Skill'
import './index.css'
import Experience from './components/Experience/Experience'
import Experiences from './components/data/Experiences'
import skillImages from './components/data/SkillImages'
import Image from './components/Image'
import Description from './components/Experience/Description'
import Project from './components/Projects/Project'

const App = () => {
  return (
    <div className='font-roboto'>
      <MainBox className='bg-gray-800 h-screen flex justify-center items-center'>
        <Header />
      </MainBox>
      <MainBox className='text-gray-800 h-screen flex justify-center items-center'>
        <About />
      </MainBox>
      <MainBox className='bg-gray-800 min-h-screen flex justify-center items-center'>
        <Skills>
          {skillImages.map((skill, index) => (
            <Box key={index} title={skill.title} img={skill.image} />
          ))}
        </Skills>
      </MainBox>
      <MainBox className='bg-white min-h-screen p-24'>
        <Experience>
          {Experiences.map((exp, index) => (
            <div className='md:flex md:gap-12 md:my-10'>
              <Image image={exp.image} className='w-100 md:w-96 rounded-md' alt={exp.image_alt} key={index} />
              <Description text={exp.description} start_date={exp.start_date} end_date={exp.end_date} company_name={exp.company_name} skills={exp.experience_tools} status={exp.status} />
            </div>
          ))}
        </Experience>
      </MainBox>
      <MainBox className='bg-gray-800 min-h-screen'>
          <Project />
      </MainBox>
    </div>
  )
}

export default App
