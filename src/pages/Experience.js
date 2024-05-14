import React from 'react'
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor="#3e497a"> 
          <VerticalTimelineElement 
            className="vertical-timeline-element--education"  
            date="2010 - 2014"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title"> Elementary school</h3>
            <p> Elementary school Diploma</p>

            </VerticalTimelineElement>
            <VerticalTimelineElement 
            className="vertical-timeline-element--education"  
            date="2014 - 2016"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title"> Middle School </h3>
            <p> Middle school Diploma</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"  
            date="2016 - 2020"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title"> High School </h3>
            <p> college Diploma</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"  
            date="2020 - 2022"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title"> Orange Coast College</h3>
            <p> Hig School Diploma</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"  
            date="2022 - present"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title"> Cal State University of Fullerton</h3>
            <p> Not graduated yet</p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    </div>
  )
}

export default Experience;