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
 <HomeMushaf />
 <HomeDeveloper />
 <HomeApp />
 <TechnicalSupport/>
</LayoutComponent>
);
export default App;    