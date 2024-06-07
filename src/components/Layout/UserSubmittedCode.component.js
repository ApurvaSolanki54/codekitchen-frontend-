import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Description from './Description.component';
import axios from 'axios';
import ListOfStatus from './ListOfStatus.componenet';
import { Link, useParams } from 'react-router-dom';


const user=[
    {
      id: '65c7681f5e37c01a02229ac7',
      allCheckRequestId: ('65c7681f5e37c01a02229ac5'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c7686b3f81ac55b8d5a844'),
      allCheckRequestId: ('65c7686b3f81ac55b8d5a842'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c768d90cc3c57756be0bf8'),
      allCheckRequestId: ('65c768d90cc3c57756be0bf6'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c7698a5d5489c89171c848'),
      allCheckRequestId: ('65c7698a5d5489c89171c846'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c76a791628a567767cb3b6'),
      allCheckRequestId: ('65c76a791628a567767cb3b4'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c76bc0169f18d6d37b5a59'),
      allCheckRequestId: ('65c76bc0169f18d6d37b5a57'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c76c4fbd85c860e1eca9f8'),
      allCheckRequestId: ('65c76c4fbd85c860e1eca9f6'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c76df898c51c98329f3319'),
      allCheckRequestId: ('65c76df898c51c98329f3317'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    },
    {
      id: ('65c76e8db09f2a62843682d7'),
      allCheckRequestId: ('65c76e8cb09f2a62843682d5'),
      questionId: ('65bdd278a4e15d631f8ba30e'),
      userId: ('65bb4778a658a36ca7ae3c9f'),
      code: '#include<bits/stdc++.h>\r\n' +
        'using namespace std;\r\n' +
        'int main(){\r\n' +
        '    int n=0;\r\n' +
        '    cin>>n;\r\n' +
        '    cout<<n;\r\n' +
        '    return 0;\r\n' +
        '}',
      
      status: 'Accepted'
    }
  ]


const UserSubmittedCode = ({buttonClicked, setClickedButton, questionId}) => {
    console.log("question-id: ",questionId)
    const [codesAndStatus, setCodesAndStatus] = useState([])
    const [activeTab, setActiveTab] = useState("description")
    async function handleFunction(value){
      setActiveTab(value)
      console.log("active tab: ", value)
      if(value==="submission"){
        const response = await axios.post('http://localhost:8000/api/v1/userCodes', 
            {questionId}, {withCredentials: true,}
          );
          console.log("question-codes: handl ", response.data);
          setCodesAndStatus(response.data.data);
      }
    }

    const dataArray = [
        {
          label: "Description",
          value: "description",
          desc: <Description buttonClicked={buttonClicked} setClickedButton={setClickedButton}/>
        
        },
        {
          label: "Submission",
          value: "submission",
          desc: codesAndStatus,
        },     
      ];

  return (
    <div>
        <Tabs className='mt-3 ml-6 w-11/12' id="custom-animation" key={activeTab} value={activeTab}>
        <TabsHeader indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
        className='bg-white'
        >
          {dataArray.map(({ label, value }) => (
            <Tab 
              
              key={value} 
              value={value} 
              onClick={() => handleFunction(value)}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          className='bg-gray-50 rounded-xl mt-3'
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {dataArray.map(({ value, desc }) => (  
            <TabPanel key={value} value={value} >
              {
                (Array.isArray(desc)) ?   
                  <ListOfStatus dataArray={desc}/> : desc
              }
            </TabPanel>
              
          ))}
        </TabsBody>
        </Tabs>
    </div>
  )
}
export default UserSubmittedCode