import { Button, Col, Row } from "antd"
import { Tabs } from 'antd';
import APIComponent from "./APIComponent";

const SupportDeveloperComponent =()=>{
    const items = [
        {
          key: '1',
          label: `تضمين API`,
          children: <APIComponent /> ,
        },
        {
          key: '2',
          label: ` إدراج widgets`,
          children: "karem 1",
        },
       
      ];    
      const onChange = (key) => {
        console.log(key);
      };
return(
    <div className="container" style={{padding:"100px 0px "}}>
        <div style={{fontSize:"29px",border:"1px solid ",padding:"20px"}}>
            <p style={{color:"#268168"}}>
                خدمة موجهة للمطورين و اصحاب المواقع تمكنهم من بناء مواقعهم و تطبيقات الجوال الخاصة بهم بسرعه و دون الحاجه الي توفير فرق عمل للاضافة و ادارة الموقع حيث يمكن التعامل معها من خلال 
            </p>
        </div>
        <div className="text-center" style={{transform:"translateY(-20px)"}}>
            <Button shape="round" size="large" color="#fff" style={{background:"#C9AB7A",color:"#fff"}}>
            تسجيل الدخول
            </Button>
        </div>
        <div>
     <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        </div>
    </div>
)
}
export default SupportDeveloperComponent