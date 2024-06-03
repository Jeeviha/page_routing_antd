import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Table,Typography } from 'antd';
import { DoubleLeftOutlined } from '@ant-design/icons';
const {Title}=Typography;

const StudentPageAntd = () => {
  const navigate=useNavigate();

  const students=
    {
      "Angi":{"reg_no":101,"name":"Angi","Dept":"B Com","dob":"27-03-2005","address":"Chennai"},
      "Dharr":{"reg_no":102,"name":"Dharr","Dept":"Bsc CS","dob":"11-03-2005","address":"Viluppuram"},
      "Guru":{"reg_no":103,"name":"Guru","Dept":"Bsc Maths","dob":"23-03-2005","address":"Thirunelveli"},
      "Jack":{"reg_no":104,"name":"Jack","Dept":"BCA","dob":"21-07-2005","address":"Namakkal"},
      "Sam":{"reg_no":105,"name":"Sam","Dept":"BCA","dob":"09-12-2005","address":"Trichy"}
    }
  const {name}=useParams();   //extracts Student name from url

  const std_details=students[name]

  const data_src=[
    {"field":"Register Number", value:std_details.reg_no},
    {"field":"Name", value:std_details.name},
    {"field":"Department", value:std_details.Dept},
    {"field":"DOB", value:std_details.dob},
    {"field":"Address", value:std_details.address},
  ]

  const columns=[
    {
      title:"Fields",
      dataIndex:"field",
      key:"fields"
    },
    {
      title:"Values",
      dataIndex:"value",
      key:"values"
    }
  ]
  return (
    <div>
      <Title level={3}>Personal Details</Title>
    <div style={{width:"40%", margin:"auto"}}>
      <Table dataSource={data_src} columns={columns} bordered={true} pagination={false}/>
      <Button icon={<DoubleLeftOutlined/>} onClick={()=>navigate("/student")} style={{marginTop:"10px"}}>Back</Button>
    </div>
    </div>
  )
}

export default StudentPageAntd
