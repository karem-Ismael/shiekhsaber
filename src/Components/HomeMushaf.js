import { Col, Row, Select } from "antd"

const mushafStyle = {
    color: "#474747",
    padding:"50px 0px"
}
const HomeMushaf = () => {
    return (
        <div className="container" style={mushafStyle}>

            <div className="text-center">

                <p className="title-mushaf" style={{position:"relative",display:"inline-block",fontSize:"30px"}}>
                    المصحف
                </p>
                <p>
                    استمع للمصحف كاملًا بأكثر من 20 رواية بصوت الشيخ صابر عبد الحكم
                </p>
            </div>
            <div className="d-flex mb-4" style={{ gap: "5px"  }}>
                <span style={{alignSelf:"center"}}> 
                    اختر الرواية
                </span>
                <Select
                className="select-story"
                    size='large'
                    style={{ minWidth: "200px" }}
                    showSearch
                    placeholder="عرض الكل"
                    optionFilterProp="children"
                    bordered
                    id="first-select"
                    // onChange={onChange}
                    // onSearch={onSearch}


                    options={[]}
                />
            </div>
            <Row  classNmae="mt-2" style={{gap:"10px",marginTop:"10px"}}>
                <Col>
                    <Select
                    className="round-select"
                        size='large'
                        style={{ minWidth: "200px" }}
                        showSearch
                        placeholder="عرض الكل"
                        optionFilterProp="children"
                        bordered
                        id="first-select"
                        // onChange={onChange}
                        // onSearch={onSearch}


                        options={[]}
                    />
                </Col>
                <Col>
                    <Select
                        size='large'
                    className="round-select"

                        style={{ minWidth: "200px" }}
                        showSearch
                        placeholder="عرض الكل"
                        optionFilterProp="children"
                        bordered
                        id="first-select"
                        // onChange={onChange}
                        // onSearch={onSearch}


                        options={[]}
                    />
                </Col>
                <Col>
                    <Select
                        size='large'
                        style={{ minWidth: "200px" }}
                    className="round-select"

                        showSearch
                        placeholder="عرض الكل"
                        optionFilterProp="children"
                        bordered
                        id="first-select"
                        // onChange={onChange}
                        // onSearch={onSearch}


                        options={[]}
                    />
                </Col>
            </Row>
            <Row>
                <div>

                </div>
            </Row>
        </div>
    )

}
export default HomeMushaf