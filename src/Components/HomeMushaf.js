import { Col, Row, Select } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch ,useSelector} from "react-redux";
import {SetLoader,SetFileAudio} from "../store/Home/action"
import { Spin } from 'antd';

const mushafStyle = {
    color: "#474747",
    padding:"50px 0px"
}
const HomeMushaf = () => {
    const[categories,setCategories]=useState()
    const {loading,file}=useSelector((state)=>state.homeData)
    const [sounds,setSounds]=useState()
    const [audioFile,setAudio]=useState()
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get("https://saber.arabia-it.net/api/v1/categories",
        {
            headers:{
                Authorization:"Bearer 5|bV0AD7zr7K68ewmFxfwzgOwAMjKEZTzrwhMq7cmN"
            }
        }
        ).then((res)=>
        {
            const data=res.data.data.map((opt)=>opt.sub_categories.map(opt2=>({
                name:opt2.name,
                groupedname:opt.name,
                id:opt2.uid
            })))
            setCategories(data.flat())
            console.log(res,"res")
        }
        )
        // const response =await fetch("https://saber.arabia-it.net/api/v1/categories")
        // const data =await response.json()
    },[])
    const getSound=(value)=>{
        // {{production_url}}/subcategories/sounds?category=2fe2fc5c-41c9-11ed-9db5-0800270c4f5c
        axios.get(`https://saber.arabia-it.net/api/v1/subcategories/sounds?category=${value?.id}`,
        {
            headers:{
                Authorization:"Bearer 5|bV0AD7zr7K68ewmFxfwzgOwAMjKEZTzrwhMq7cmN"
            }
        }
        ).then((res)=>
        {
            const AllSound=res.data.data.map((sound)=>({
                label:sound.surah.search_text,
                value:sound.file
            }))
            setSounds(AllSound)
        }
        
        )
    }
    const SelectSound=(val)=>{
        dispatch(SetLoader())
        setTimeout(()=>{
            dispatch(SetFileAudio(val))

        },300)
        // setAudio(val)
    }
    useEffect(()=>{
        
    },[audioFile])
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
                {/* <Select
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
                /> */}
                 <Autocomplete
      id="grouped-demo"
      options={categories}
      groupBy={(option) => option.groupedname}
      getOptionLabel={(option,index) =>option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label=""  variant="standard"/>}
      onChange={(e,val)=>getSound(val)}
    />
            </div>
            <Row  classNmae="mt-2" style={{gap:"10px",marginTop:"10px"}}>
        
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
                        onChange={(val)=>SelectSound(val)}
                     
                        options={sounds}
                    />
                </Col>
     
            </Row>
            <Row>
                <div className="w-100 text-center mt-3">
                {
                    loading ? 
                    <Spin />
                    :
                    <audio className="w-100" controls>
                    <source
                      src={file}
                      type="audio/mpeg"
                    />
                  </audio>
                  
                }
                </div>
            </Row>
        </div>
    )

}
export default HomeMushaf