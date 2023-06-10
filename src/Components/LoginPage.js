import { Button, Col, Form, Radio, Row,Input } from "antd"
import { Tabs } from 'antd';
import APIComponent from "./APIComponent";
import { useRouter } from "next/router";
import { useState } from "react";
import { InfoCircleOutlined } from '@ant-design/icons';

const LoginPageComponent =()=>{
  const route=useRouter()
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
return(
    <div className="container" style={{padding:"100px 0px "}}>
      <Row justify={"center"}>
        <Col md={18} sm={18} xs={24} style={{background:"#fff"}}>
            <div className="mb-3" style={{textAlign:"center",borderBottom:"1px dashed #9a8f82",}}>
            <h3>
            تسجيل الدخول
            </h3>
            </div>
        <Form
      form={form}
      layout="vertical"
      
      onValuesChange={onRequiredTypeChange}
    >
  
      <Form.Item label="البريد الإلكتروني"  >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="كلمة المرور"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
         <div className="d-flex" style={{gap:"10px"}}>
         <Button shape="round">
            تسجيل الدخول
        </Button>
        <Button shape="round">
            حساب جديد
        </Button>

         </div>
      </Form.Item>
    </Form>

        </Col>
      </Row>
    </div>
)
}
export default LoginPageComponent