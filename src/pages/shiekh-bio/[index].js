import { Layout, Space,Row,Col,Button} from 'antd';
import Image from 'next/image'

import LayoutComponent from '../../Components/Layout';
import SiekheContent from "@/Components/SiekheContent"
import ContactUs from "@/Components/ContactUs"
import { Tabs } from 'antd';
import { useRouter } from 'next/router';

const ShiekhBio=()=>{
    const onChange = (key) => {
        console.log(key);
        Route.push(`/shiekh-bio/${key}`)
      };
      const items = [
        {
          key: '1',
          label: `سيرة الشيخ`,
          children: <SiekheContent />,
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
