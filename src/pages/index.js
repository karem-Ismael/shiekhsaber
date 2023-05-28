import { Layout, Space,Row,Col,Button} from 'antd';
import Image from 'next/image'

import LayoutComponent from '../Components/Layout';
import HomeBanner from '@/Components/HomeBanner';
import HomeMushaf from '@/Components/HomeMushaf';
import HomeDeveloper from '@/Components/HomeDeveloper';
import HomeApp from '@/Components/HomeApp';
import TechnicalSupport from "@/Components/TechnicalSupport"

const App = () => (
<LayoutComponent>
  {/* karem */}
 <HomeBanner />
 <HomeMushaf  />
 <HomeDeveloper />
 <HomeApp />
 <TechnicalSupport/>
</LayoutComponent>
);
export default App;

// export async function getServerSideProps(){
//   const response =await fetch("https://saber.arabia-it.net/api/v1/categories")
//   const data =await response.json()
//   console.log(data,"data")
//   // const response2=await fetch("https://estithmar.arabia-it.net/api/admin/service-provider-fields")
//   // const data2=await response2.json()
//   return{
//       props:{
//           Categories:data,
//       }
//   }
// }