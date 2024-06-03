import React from 'react'
// import "./LayoutAntd.css"
import { Layout,Image,Typography,Menu, Button, Dropdown } from 'antd'
import { MenuOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const {Header,Content,Sider,Footer}=Layout;
const {Title,Text,Paragraph}=Typography



const LayoutAntd = ({children}) => {

  const navigate=useNavigate();

  const handle_logout=()=>
    {
      navigate("/")
    }

  const menu_items=[
    {
      key:"mi_1",
      label:"Student Registery",
      onClick: ()=>navigate("/student")
      // children: [
      //   {
      //     key:"smi_1",
      //     label:"Personal Details",
      //     onClick:()=>navigate("/student/:name")
      //   }
      // ]
    },
    {
      key:"mi_2",
      label:"Administration"
    },
    {
      key:"mi_3",
      label:"Programmes"
    },
    {
      key:"mi_4",
      label:"Academics"
    },
    {
      key:"mi_5",
      label:"Examinations",
      // children:[
      //   {
      //     key:"smi_2",
      //     label:"Results"
      //   }
      // ]
    },
    {
      key:"mi_6",
      label:"Campus Life"
    },
    {
      key:"mi_7",
      label:"About Us"
    }
  ]

  const dropdown_items=(
    <Menu onClick={handle_logout}>
      <Menu.Item key="dd_1" icon={<LogoutOutlined />}>Log Out</Menu.Item>
    </Menu>
  )
  
  return (
    <div style={{height:"100vh", margin:"0px",padding:"0px"}}>
      <Layout>
        <Header style={{backgroundColor:"#e0e6fe", display:"flex",justifyContent:"space-between"}}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/XYZ_School.png" height={50} width={50} className="logoimg"/>
          <Title level={2} style={{fontFamily:"serif", marginTop:"10px"}}>XYZ School</Title>
          <Dropdown overlay={dropdown_items} trigger={"click"}>
            <Button icon={<UserOutlined />} iconPosition='end' style={{marginTop:"15px"}}>Profile</Button>
          </Dropdown>
          {/* <Dropdown.Button icon={<UserOutlined/>} menu={menu_props}>Profile</Dropdown.Button> */}
        </Header>
        <Layout style={{height:"90vh"}}>
          <Sider style={{backgroundColor:"#e0e6fe"}}> 
            <Menu style={{width:"200x", textAlign:"left", backgroundColor:"#e0e6fe"}} items={menu_items}>Menu
            </Menu>
          </Sider>
          <Content style={{height:"100%",alignItems:"centers"}}>{children}</Content>
        </Layout>
        <Footer style={{padding:"0px",position:"fixed",bottom:"9px",left:"0px",right:"0px"}}>
          <hr id="line" style={{width:"100%",margin:"0px"}}></hr>
          <Paragraph class="footp">Connect with us: <Image src="https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_960_720.png" height={60} width={130}/></Paragraph>
          <Paragraph class="footp">Contact: 9876543210 | E-mail Id: <a href="mailto:xyz@gmail.com">xyz@gmail.com</a></Paragraph>
        </Footer>
      </Layout>
    </div>
  )
}

export default LayoutAntd
