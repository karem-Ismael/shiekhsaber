import { Button, Divider, Radio, Space } from 'antd';
const contentStyle = {
    minHeight: 120,
    lineHeight: '30px',
    color: 'red',
    padding:"100px",
    background:"url(/assets/images/devbanner_bg.png)",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"50% 50%",
    minHeight:"64vh"
  };
const HomeDeveloper =()=>{
return(
    <div style={contentStyle}>
        <div className="container">
            <p className='title' style={{fontSize:"30px",position:"relative",padding:"0px 0px 20px"}}>
            خدمات المطورين      
            </p>
            <p style={{color:"#fff",textAlign:"justify",maxWidth:"350px"}}>
            خدمة موجهة للمطورين وأصحاب المواقع تُمكنهم من بناء مواقعهم وتطبيقات الجوال الخاصة بهم بسرعة ودون الحاجة إلى توفير فرق عمل للإضافة وإدارة الموقع حيث يمكن التعامل معها من خلال أي لغة برمجية بسهولة ويسر
            </p>
            <Button shape="round" style={{background:"#C9AB7A",color:"#fff"}} size='large' icon={<img src="/assets/images/ic_dev.png" height={19} style={{marginLeft:"10px"}} />}>
            سجل واستمتع بالخدمة
            </Button>
        </div>
    </div>
)
}
export default HomeDeveloper