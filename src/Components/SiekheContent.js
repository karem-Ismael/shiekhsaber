import { Col, Row } from "antd"

const ShiekhContent =({shiekhbio})=>{
   console.log(shiekhbio,"shiekhbio")
return(
   <Row gutter={[16,16]}>
    <Col md={24} sm-={24} xs={24} style={{textAlign:"justify"}}>
      <div 
      dangerouslySetInnerHTML={{__html: shiekhbio.data.content}}
      /> 
         
    </Col>
   </Row>
)

}
export default ShiekhContent