import { Col, Row } from "antd"

const DownloadApp =({AppData})=>{
return(
    <div className="container">
        <Row gutter={[16,16]} style={{padding:"120px 0px"}}>
            <Col lg={16} md={16} sm={24} xs={24}>
                <img src={"/assets/images/shpic.png" }/>
                <h3>
                تطبيق الشيخ
                </h3>
                <p style={{textAlign:"justify"}}>
                    {AppData.data.about}
                </p>
                <p>
                بادر بتحميل التطبيق الآن لتجد كل ما يلزمك من خدمات للقرآن الكريم
                </p>
                <div className="d-flex mt-4" style={{gap:"20px"}}>
              <a href={AppData.data.app_gallery_link} target="_blank">
              <img src="/assets/images/AppGallery.png"/>
              </a>
              <a href={AppData.data.google_play_link} target="_blank">
              <img src="/assets/images/Gplay.png"/>
              </a>
              <a href={AppData.data.app_store_link} target="_blank">
              <img src="/assets/images/appstore.png"/>
                
              </a>

                </div>
            </Col>
        <Col lg={8} md={8} sm={24} xs={24}>
            <img className="w-100" src={AppData.data.image} />
        </Col>
        </Row>
    </div>
)
}
export default DownloadApp