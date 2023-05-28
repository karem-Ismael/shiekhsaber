import { Layout, Space,Row,Col,Button} from 'antd';
import Image from 'next/image'

import LayoutComponent from '../../Components/Layout';
import SiekheContent from "@/Components/SiekheContent"
import ContactUs from "@/Components/ContactUs"
import { Tabs } from 'antd';
import { useRouter } from 'next/router';

const ShiekhBio=({shiekhbio})=>{
    const onChange = (key) => {
        console.log(key);
        Route.push(`/shiekh-bio/${key}`)
      };
      const items = [
        {
          key: '1',
          label: `سيرة الشيخ`,
          children: <SiekheContent shiekhbio={shiekhbio} />,
        },
        {
          key: '2',
          label: `تواصل مع الشيخ`,
          children: <ContactUs />,
        },
       
      ];
      const Route=useRouter()
return(
   <LayoutComponent>
    <div className='container mt-4'>
     <Tabs defaultActiveKey={Route.query.index == 1 ? "1" : "2"} items={items} onChange={onChange} />
    </div>
   </LayoutComponent>
)
}
export default ShiekhBio
export async function getServerSideProps(){
  const response =await fetch("https://saber.arabia-it.net/api/v1/biographies",{
    headers:{
        Authorization:"Bearer 5|bV0AD7zr7K68ewmFxfwzgOwAMjKEZTzrwhMq7cmN"
    }
  })
  const data =await response.json()
  console.log(data,"data")
  // const response2=await fetch("https://estithmar.arabia-it.net/api/admin/service-provider-fields")
  // const data2=await response2.json()
  return{
      props:{
          shiekhbio:data,
      }
  }
}