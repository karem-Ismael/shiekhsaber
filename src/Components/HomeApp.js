import { Button, Divider, Radio, Space } from 'antd';
const contentStyle = {
    minHeight: 120,
    lineHeight: '30px',
    color: 'red',
    padding:"100px",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"50% 50%",
    minHeight:"64vh"
  };
const HomeApp =()=>{
return(
    <div style={contentStyle}>
        <div className="container">
            <p className='title-app' >
            تطبيق الجوال
            </p>
            <p style={{color:"#111A22",textAlign:"justify"}}>
            بادر بتحميل التطبيق الآن لتجد كل ما يلزمك من خدمات للقرآن الكريم
            </p>
            <div style={{background:"#268168",display:"flex",justifyContent:"space-between"}}>
                <div style={{padding:"40px"}}>
                    <p style={{color:"#fff",maxWidth:"250px",lineHeight:2.7,fontSize:"20px"}}>
                    ساهم معنا في نشر التطبيق فالدال على الخير كفاعله
                    </p>
                    <div className='d-flex applinks ' style={{gap:"10px"}} >
                        <div>
                            <img src="/assets/images/AppGallery.png"/>
                        </div>
                        <div>
                            <img src="/assets/images/Gplay.png"/>
                        </div>
                        <div>
                            <img src="/assets/images/appstore.png"/>
                        </div>
                    </div>
                    
                    
                </div>
                <div style={{padding:"40px"}}>
                   
                    <div className='d-flex  ' style={{gap:"20px"}} >
                        <div style={{maxHeight:"170px"}}>
                            <img src="/assets/images/scrapp01.png" style={{maxHeight:"430px",transform:"translateY(-140px)",width:"100%"}}/>
                        </div>
                       
                    </div>
                </div>
                
              
            </div>  
        </div>
    </div>
)
}
export default HomeApp