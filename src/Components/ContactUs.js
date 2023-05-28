import { Col, Row } from "antd"
import CardComponent from "./Card"
import {
    Button,
    Form,
    Input,
  } from 'antd';
import axios from "axios";
import { useState } from "react";
const ContactUs =()=>{
    const { TextArea } = Input;
    const [data,setData]=useState({})
    const SendData=()=>{
    
      fetch("https://saber.arabia-it.net/api/v1/technical-support",{
        method:"POST",
        headers:{
          Authorization:"Bearer 3|L2LPakn7n1Fl9pTMsbT8DRV0GUa8AT3wSNOYj5Ts",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
    }
    return(
    <Row gutter={[16,16]}>
            <Col md={12} sm-={24} xs={24}>
                <div>
                    <CardComponent>
                        <div className="d-flex" style={{gap:"100px"}} >
                            <img src="/assets/images/twitter.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على تويتر
                            </span>
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                    <div className="d-flex" style={{gap:"100px"}} >
                            <img src="/assets/images/facebook.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على تويتر
                            </span>
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                    <div className="d-flex" style={{gap:"100px"}} >
                            <img src="/assets/images/youtube.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على تويتر
                            </span>
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                    <div className="d-flex" style={{gap:"100px"}} >
                            <img src="/assets/images/sound.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على تويتر
                            </span>
                        </div>
                    </CardComponent>
                </div>
                
              
            </Col>
            <Col md={12} sm-={24} xs={24}>
            <Form
        style={{textAlign:"center"}}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="horizontal"
        initialValues={{
          size: "large",
        }}
        size={"large"}
        style={{
          maxWidth: 600,
        }}
      >
        
        <Form.Item>
          <Input placeholder='الاسم' onChange={(e)=>setData({...data,name:e.target.value})}/>
        </Form.Item>
        <Form.Item>
          <Input  placeholder='البريد الإلكتروني' onChange={(e)=>setData({...data,email:e.target.value})}/>
        </Form.Item>
       
        
        <Form.Item>
            <TextArea rows={4} placeholder='نص الرسالة' onChange={(e)=>setData({...data,message:e.target.value})}/>   
        </Form.Item>
        <div style={{textAlign:"left"}}>
        <Button onClick={()=>SendData()} style={{color:"#fff",background:"#268168",minWidth:"120px",border:"none",borderRadius:"0px"}}>
            أرسل       
        </Button>
        </div>
      </Form>
            </Col>
   </Row>
    )
    
    }
    export default ContactUs