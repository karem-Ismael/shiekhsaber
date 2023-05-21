import { Col, Row } from "antd"

const DownloadApp =()=>{
return(
    <div className="container">
        <Row gutter={[16,16]} style={{padding:"120px 0px"}}>
            <Col lg={16} md={16} sm={24} xs={24}>
                <img src="/assets/images/shpic.png" />
                <h3>
                تطبيق الشيخ
                </h3>
                <p style={{textAlign:"justify"}}>
                هو صابر محمد عبد الحكم سليمان، أحد المشايخ الذين سخروا حياتهم لتزيين القرآن بأصواتهم الخاشعة، رغم توجهاتهم الدراسية البعيدة عن الشريعة وعلوم القراءات أثناء بداية مسار حياتهم، هو صابر محمد عبد الحكم سليمان، أحد المشايخ الذين سخروا حياتهم لتزيين القرآن بأصواتهم الخاشعة، رغم توجهاتهم الدراسية البعيدة عن الشريعة وعلوم القراءات أثناء بداية مسار حياتهم.0.0
                </p>
                <p>
                بادر بتحميل التطبيق الآن لتجد كل ما يلزمك من خدمات للقرآن الكريم
                </p>
                <div className="d-flex mt-4" style={{gap:"20px"}}>
                <img src="/assets/images/AppGallery.png"/>
                <img src="/assets/images/Gplay.png"/>
                <img src="/assets/images/appstore.png"/>

                </div>
            </Col>
        <Col lg={8} md={8} sm={24} xs={24}>
            <img className="w-100" src="/assets/images/scrapp02.png" />
        </Col>
        </Row>
    </div>
)
}
export default DownloadApp