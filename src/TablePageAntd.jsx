import React from 'react'
import {Table, Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
const {Title} =Typography;

const TablePageAntd = () => {

    const navigate=useNavigate();

    const columns=[
        {
            title:"Reg No.",
            dataIndex:"reg_no",
            key:"regno"
        },
        {
            title:"Name",
            dataIndex:"name",
            key:"name",
            render:(name)=> (<text onClick={()=>navigate(`/student/${name}`)} style={{cursor:"pointer"}}>{name}</text>)    //render - to customize how data is rendered in a particular column.
        }
    ]

    const data_src=[
        {"reg_no":101,"name":"Angi"},
        {"reg_no":102,"name":"Dharr"},
        {"reg_no":103,"name":"Guru"},
        {"reg_no":104,"name":"Jack"},
        {"reg_no":105,"name":"Sam"}
    ]
    
  return (
    <div>
      <Title level={3}>Student Registery</Title>
    <div style={{width:"40%", margin:"auto"}}>
      <Table dataSource={data_src} columns={columns} bordered={true} pagination={false}/>
    </div>
    </div>
  )
}

export default TablePageAntd
