import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
       // borderColor:resumeInfo?.themeColor
    }}>
        {/* Personal Detail  */}
            {resumeInfo?.experience?.length>0? <PersonalDetailPreview resumeInfo={resumeInfo} />:<></>}
        {/* Summery  */}
            {resumeInfo?.experience?.length>0 ? <SummeryPreview resumeInfo={resumeInfo} />:<></>}
        {/* Professional Experience  */}
           {resumeInfo?.experience?.length>0 ? <ExperiencePreview resumeInfo={resumeInfo} />:<></>}
        {/* Educational  */}
        {resumeInfo?.education?.length>0 ?  <EducationalPreview resumeInfo={resumeInfo} />:<></>}
        {/* Skilss  */}
        {resumeInfo?.skills?.length>0?   <SkillsPreview resumeInfo={resumeInfo}/>:<></>}
    </div>
  )
}

export default ResumePreview