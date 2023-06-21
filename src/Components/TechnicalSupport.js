import {
    Button,
    Form,
    Input,
  } from 'antd';
import axios from 'axios';

  import { useEffect, useState } from 'react';
axios.defaults.withCredentials = true

  const TechnicalSupport = () => {
    const [componentSize, setComponentSize] = useState('large');
    const { TextArea } = Input;
    const [socialLinks,setSocialLinks]=useState()
    const [data,setData]=useState({})
useEffect(()=>{
 
  axios.get("https://saber.arabia-it.net/api/v1/social-links",
  {
      headers:{
          Authorization:"Bearer 5|bV0AD7zr7K68ewmFxfwzgOwAMjKEZTzrwhMq7cmN"
      }
  }
  ).then((res)=>setSocialLinks(res.data.data))
},[])
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    async function SendData () {
      await axios.get("http://saber.test/sanctum/csrf-cookie")
      await axios.post("http://saber.test/api/v1/technical-support", JSON.stringify(data), {
        headers: {
          'Authorization': 'Bearer 7|9dvqZ4WwmTVVdY5QL0Q0WBWXrsEjRImNjmRT0CpF'
        }
      })
    }
    return (
     <div className='container'>
        <div className='row justify-content-center'>
        <div className='text-center'>
        <h3 className='title-support mb-4'   style={{position:"relative",display:"inline-block",fontSize:"30px"}}>
        الدعم الفني
        </h3>
        </div>
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
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
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
            <TextArea rows={4} placeholder='نص الرسالة' onChange={(e)=>setData({...data,message:e.target.value})} />   
        </Form.Item>
        <div className='text-center'>
        <Button onClick={()=>SendData()} style={{color:"#fff",background:"#268168",minWidth:"120px",border:"none",borderRadius:"0px"}}>
            أرسل       
        </Button>
        </div>
      </Form>
      <div className='row justify-content-center mt-5 mb-2' style={{gap:"20px"}}>
        <span style={{width:"fit-content" ,alignSelf:"center",color:"#919191"}}>
       تابع الشيخ على:
        </span>
        <div style={{width:"fit-content"}}>
          <a href={socialLinks?.twitter} target='_blank'>
        <img src="/assets/images/twitter.png" style={{width:"36px",height:"36px"}}/>
          </a>
        </div>
        <div  style={{width:"fit-content"}}>
          <a href={socialLinks?.facebook} target='_blank'>
        <img src="/assets/images/facebook.png" style={{width:"36px",height:"36px"}}/>

          </a>
        </div>
        <div  style={{width:"fit-content"}}>
          <a href={socialLinks?.instagram} target='_blank'>
          <img src="/assets/images/instagram.png" style={{width:"36px",height:"36px"}}/>
          </a>
        </div>
        <div style={{width:"fit-content"}}>
          <a href={socialLinks?.youtube}>
          <img src="/assets/images/youtube.png" style={{width:"36px",height:"36px"}}/>

          </a>
        </div>
       
        <div style={{width:"fit-content"}}>
          <a href={socialLinks?.soundcloud} target="_blank">
          <img src="/assets/images/sound.png" style={{width:"36px",height:"36px"}}/>

          </a>
        </div>
        {/* 
        
        <img src="/assets/images/sound.png" width={60} height={100}/> */}

      </div>
        </div>
        
     </div>
    );
  };
  export default TechnicalSupport;