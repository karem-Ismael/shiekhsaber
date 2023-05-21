import HeaderComponent from "./Header"
import styled from "styled-components";
import { Layout, Space,Row,Col,Button} from 'antd';
import Link from "next/link";
import {LeftOutlined,MailOutlined,TwitterOutlined,YoutubeOutlined,WhatsAppOutlined,InstagramOutlined} from '@ant-design/icons';
import Headercm from "./HeaderCom";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'left',
  gap:"15px",
  color: '#fff',
  background:"#FFFFFF",
  height: 109,
  paddingInline: 60,
  lineHeight: '64px',
};
const contentStyle = {
  minHeight: 520,
};
const HeaderImages={
  gap:"15px",
  height:"100%",

}
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'right',
  color: '#fff',
  display:"flex",
  justifyContent:"space-between",
  color:"#474747",
  borderTop:"1px solid #000",
  marginTop:"20px",
};
const footer1={
  textAlign: 'right',
  color: '#fff',
  backgroundColor: '#005D5E',
  direction:"rtl"
}
const BtnStyle={
  padding:"4px 5px",
  borderRadius:"0px"
}

const LayoutComponent =({children})=>{
    return(
        <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[20, 20]}
  >
    <Layout>
      <Header style={headerStyle}>
      {/* <HeaderComponent />  */}
        <Headercm/>
      </Header>
      <Content style={contentStyle}>
        {children}
      </Content>  
      <Footer className="container"style={footerStyle}>
        <div>
        جميع الحقوق محفوظة 2022 - 1444 موقع صابر عبد الحكم
        </div>
        <div>
        مُشغَل بواسطة صلصال
        </div>
      </Footer>
    </Layout>
  </Space>
    )
}
export default LayoutComponent