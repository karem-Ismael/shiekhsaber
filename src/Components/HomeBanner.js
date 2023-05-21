import { Button, Divider, Radio, Space } from 'antd';
const contentStyle = {
    minHeight: 120,
    lineHeight: '30px',
    color: 'red',
    padding:"100px",
    background:"url(/assets/images/mainbanner.png)",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"50% 50%",
    minHeight:"84vh"
  };
const HomeBanner =()=>{
return(
    <div style={contentStyle}>
        <div className="container">
            <div className="banner">
                <p style={{color:"#474747",fontSize:"20px"}}>
                الموقع الرسمي للشيخ
                </p>
                <p style={{color:"#C9AB7A",fontSize:"30px",width:"fit-content",padding:"0px 0px 35px",borderBottom:"1px solid #C9AB7A"}}>
                 صابر عبد الحكم
                </p>
            </div>
            <div>
                <p style={{maxWidth:"400px" ,textAlign:"justify",color:"#111A22"}}>
                صابر محمد عبد الحكم سليمان، أحد المشايخ الذين سخروا حياتهم لتزيين القرآن بأصواتهم الخاشعة، رغم توجهاتهم الدراسية البعيدة عن الشريعة وعلوم ا
                </p>
                <Button shape="round" style={{background:"#C9AB7A",color:"#fff"}} size='large' icon={<img src="/assets/images/ic_pen.png" height={19}  />}>
                    
                سيرة الشيخ      
                </Button>
              
            </div>
        </div>
    </div>
)
}
export default HomeBanner