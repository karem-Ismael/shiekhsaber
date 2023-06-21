import { Button, Col, Form, Radio, Row,Input } from "antd"
import { Tabs } from 'antd';
import APIComponent from "./APIComponent";
import { useRouter } from "next/router";
import { useState } from "react";
import { InfoCircleOutlined } from '@ant-design/icons';
import axios from "axios";

const SignUpPage =()=>{
  const route=useRouter()
  const [data,setData]=useState({
    email:"",
    password:"",
    password_confirmation:"",
    entity_name:"",
    about:"",
    phone:"",
  })
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const SignUpAction=()=>{
    axios.post("http://saber.test/api/v1/developer/register",{
        ...data
    }).then(res=>console.log(res,"res"))
    .catch((err)=>console.log(err))
  }
return(
    <div className="container" style={{padding:"100px 0px "}}>
      <Row justify={"center"}>
        <Col md={18} sm={18} xs={24} style={{background:"#fff",padding:"40px"}}>
            <div className="mb-3" style={{textAlign:"center",borderBottom:"1px dashed #9a8f82",}}>
            <h3>
            تسجيل مستخدم جديد
            </h3>
            </div>
        <Form
      form={form}
      layout="vertical"
      
      onValuesChange={onRequiredTypeChange}
    >
         <Form.Item label="الاسم"  >
        <Input placeholder="" onChange={(e)=>setData({
          ...data,
          name:e.target.value
        })}/>
      </Form.Item>
  
      <Form.Item label="البريد الإلكتروني"  >
        <Input placeholder="" onChange={(e)=>setData({
          ...data,
          email:e.target.value
        })}/>
      </Form.Item>
      <Form.Item label="عن المطور "  >
        <Input placeholder="" onChange={(e)=>setData({
          ...data,
          about:e.target.value
        })}/>
      </Form.Item>
      <Form.Item label=" الجوال "  >
        <Input placeholder="" onChange={(e)=>setData({
          ...data,
          phone:e.target.value
        })}/>
      </Form.Item>
  
      <Form.Item
        label="كلمة المرور"
      >
        <Input 
        placeholder=""
        onChange={(e)=>setData({
          ...data,
          password:e.target.value
        })}
         />
      </Form.Item>
      <Form.Item
        label=" تاكيد كلمة المرور" 
      >
        <Input 
        placeholder=""
        onChange={(e)=>setData({
          ...data,
          password_confirmation:e.target.value
        })}
         />
      </Form.Item>
      <Form.Item>
        
        <Button shape="round" onClick={()=>SignUpAction()}>
            حساب جديد
        </Button>

      </Form.Item>
    </Form>

        </Col>
      </Row>
    </div>
)
}
export default SignUpPage