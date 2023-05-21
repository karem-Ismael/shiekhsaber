import { Col, Row } from "antd"
import CardComponent from "./Card"
import {
    Button,
    Form,
    Input,
  } from 'antd';
const ContactUs =()=>{
    const { TextArea } = Input;

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
          <Input placeholder='الاسم'/>
        </Form.Item>
        <Form.Item>
          <Input  placeholder='البريد الإلكتروني'/>
        </Form.Item>
       
        
        <Form.Item>
            <TextArea rows={4} placeholder='نص الرسالة'/>   
        </Form.Item>
        <div style={{textAlign:"left"}}>
        <Button style={{color:"#fff",background:"#268168",minWidth:"120px",border:"none",borderRadius:"0px"}}>
            أرسل       
        </Button>
        </div>
      </Form>
            </Col>
   </Row>
    )
    
    }
    export default ContactUs