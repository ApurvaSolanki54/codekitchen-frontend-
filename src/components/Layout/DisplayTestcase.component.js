import React, { useEffect, useState } from 'react'

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Card,
  CardBody,
  Textarea,
} from "@material-tailwind/react";

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const DisplayTestcase = ({dataArray}) => {
    let firstId=0;
    if(dataArray.length !== 0){
      firstId=dataArray[0]._id
    }
    const [activeTab, setActiveTab] = React.useState(firstId);
    const obj=[
        {
            "_id": "65c67a5c3878c1b2fc53ad5b",
            "token": "b773a6a4-daea-4d27-9523-cf16b4744806",
            "message": null,
            "description": "Accepted",
            "status": "Success",
            "compilationOutput": null,
            "yourCodeOutput": "1",
            "createdAt": "2024-02-09T19:17:48.087Z",
            "updatedAt": "2024-02-09T19:17:51.187Z",
            "__v": 0,
            "cases": 0,
            "testcaseInput": "1",
            "testcaseOutput": "1"
        },
        {
            "_id": "65c67a5c3878c1b2fc53ad59",
            "token": "bf29fc3d-c2b8-4642-9861-9dede7bf3ea1",
            "message": null,
            "description": "Accepted",
            "status": "Success",
            "compilationOutput": null,
            "yourCodeOutput": "2",
            "createdAt": "2024-02-09T19:17:48.072Z",
            "updatedAt": "2024-02-09T19:17:51.415Z",
            "__v": 0,
            "cases": 1,
            "testcaseInput": "2",
            "testcaseOutput": "2"
        }
    ]
    const data = [
      {
        label: "HTML",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "React",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Vue",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "Angular",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Svelte",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
    ];

    const theme = {
      component: {
        
        styles: {backgroundColor: 'white'}
      }
    }
  const decode = (str) => {
      return Buffer.from(str, 'base64').toString()
  }
  return (
    <div className=''>
  
    <Tabs className = '' id="custom-animation" value={activeTab}>
      <TabsHeader>
        {dataArray.map(({ cases, _id }) => (
          <Tab
            key={_id}
            value={_id}
            onClick={() => setActiveTab(_id)}
          >
            
            Testcase: {cases}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {dataArray.map(({ _id, description, yourCodeOutput, testcaseId, compilationOutput }) => (
          <TabPanel key={_id} value={_id} >
            <div className=''>

              <h1 className={`flex font-bold text-lg mb-3 ${description === "Accepted" ? "text-green-500":"text-red-500"}`}>
                {description}
              </h1>
              <div className='flex bg-white rounded-lg h-10 mb-3'>
                <p className='ml-3 font-normal text-sm'>
                  Input: 
                </p>
                <p className='pl-2 font-semibold text-sm'>
                  {testcaseId.input}
                </p>
              </div>
              
              {!compilationOutput ? <div className='flex bg-white rounded-lg h-10 mb-3'>
                <p className='ml-3 font-normal text-sm'>Description: </p>
                <p className='pl-2 font-semibold text-sm'>
                  {description}
                </p>
                  
              </div> : <div className='flex bg-white rounded-lg mb-3 h-40 '>
                <textarea value={compilationOutput} 
                  spellcheck="false"
                  className='disabled 
                    pl-2 font-semibold text-sm 
                    border border-red-500
                    resize-none border rounded-lg w-full focus:border-2 focus:border-red-500 
                    outline-none' 
                />
                  
              </div>
              }
              

              {yourCodeOutput && <div className='flex bg-white rounded-lg h-10 mb-3'>
                <p className='ml-3 font-normal text-sm'>Output: </p>
                <p className='pl-2 font-semibold text-sm'>
                  {yourCodeOutput}
                </p>
              </div>}
              
              <div className='flex bg-white rounded-lg h-10 mb-3'>
                <p className='ml-3 font-normal text-sm'>Expected: </p>
                <p className='pl-2 font-semibold text-sm'>{testcaseId.output}</p>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  </div>
  )
}

export default DisplayTestcase