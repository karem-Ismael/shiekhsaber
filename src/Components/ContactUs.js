import { Col, Row } from "antd"
import CardComponent from "./Card"
import {
    Button,
    Form,
    Input,
  } from 'antd';
import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.withCredentials = true

const ContactUs =()=>{
    const { TextArea } = Input;
    const [data,setData]=useState({})
    const [socialLinks,setSocialLinks]=useState()

    async function SendData () {
      await axios.get("http://saber.test/sanctum/csrf-cookie")
      await axios.post("http://saber.test/api/v1/technical-support", JSON.stringify(data), {
        headers: {
          'Authorization': 'Bearer 7|9dvqZ4WwmTVVdY5QL0Q0WBWXrsEjRImNjmRT0CpF'
        }
      })
    }
    useEffect(()=>{
 
      axios.get("https://saber.arabia-it.net/api/v1/social-links",
      {
          headers:{
              Authorization:"Bearer 5|bV0AD7zr7K68ewmFxfwzgOwAMjKEZTzrwhMq7cmN"
          }
      }
      ).then((res)=>setSocialLinks(res.data.data))
    },[])
    return(
    <Row gutter={[16,16]}>
            <Col md={12} sm-={24} xs={24}>
                <div>
                    <CardComponent>
                        <div className="d-flex" style={{gap:"100px",color:"#111A22",fontWeight:"bold"}} >
                        {/* <a href={socialLinks?.twitter} target="_blank" > */}
                              <img src="/assets/images/twitter.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                              <span>
                              صفحة الشيخ على تويتر
                              </span>
                          {/* </a> */}
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                    <div className="d-flex" style={{gap:"100px",color:"#111A22",fontWeight:"bold"}} >
                            {/* <a href={socialLinks?.facebook} target="_blank"> */}
                            <img src="/assets/images/facebook.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على فيسبوك
                            </span>
                            {/* </a> */}
                      </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                    <div className="d-flex" style={{gap:"100px",color:"#111A22",fontWeight:"bold"}} >
                      {/* <a href={socialLinks?.twitter} target="_blank" > */}
                          <img src="/assets/images/instagram.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على انستجرام
                            </span>
                      {/* </a> */}
                           
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                    <div className="d-flex" style={{gap:"100px",color:"#111A22",fontWeight:"bold"}} >
                    {/* <a href={socialLinks?.twitter} target="_blank" > */}
                    <img src="/assets/images/youtube.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                            <span>
                            صفحة الشيخ على يوتيوب
                            </span>
                      {/* </a> */}
                            
                        </div>
                    </CardComponent>
                </div>
                <div>
                    <CardComponent>
                        <div className="d-flex" style={{gap:"100px",color:"#111A22",fontWeight:"bold"}} >
                        {/* <a href={socialLinks?.twitter} target="_blank" > */}
                              <img src="/assets/images/sound.png" style={{maxHeight:"30px",maxWidth:"29px"}} />
                              <span>
                              صفحة الشيخ على ساوند كلاود
                              </span>
                          {/* </a> */}
                        </div>
                    </CardComponent>
                </div>
              
            </Col>
            <Col md={12} sm-={24} xs={24} >
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
        
        <Form.Item className="mb-3">
          <Input  className="mb-3" placeholder='الاسم' onChange={(e)=>setData({...data,name:e.target.value})}/>
        </Form.Item>
        <Form.Item>
          <Input className="mb-3" placeholder='البريد الإلكتروني' onChange={(e)=>setData({...data,email:e.target.value})}/>
        </Form.Item>
       
        
        <Form.Item>
            <TextArea className="mb-3" rows={4} placeholder='نص الرسالة' onChange={(e)=>setData({...data,message:e.target.value})}/>   
        </Form.Item>
        <div style={{textAlign:"left"}}>
        <Button className="mb-3" onClick={()=>SendData()} style={{color:"#fff",background:"#268168",minWidth:"120px",border:"none",borderRadius:"0px"}}>
            أرسل       
        </Button>
        </div>
      </Form>
            </Col>
   </Row>
    )
    
    }
    export default ContactUs