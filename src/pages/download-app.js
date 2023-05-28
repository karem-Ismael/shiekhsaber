import DownloadApp from "@/Components/DownloadApp"
import LayoutComponent from "@/Components/Layout"

const DownloadAppPage=({AppData})=>{
    return(
        <LayoutComponent>
            <DownloadApp  AppData={AppData} /> 
        </LayoutComponent>
    )
}
export default DownloadAppPage

export async function getServerSideProps(){
  const response =await fetch("https://saber.arabia-it.net/api/v1/app",{
    headers:{
        Authorization:"Bearer 5|bV0AD7zr7K68ewmFxfwzgOwAMjKEZTzrwhMq7cmN"
    }
  })
  const data =await response.json()
  // const response2=await fetch("https://estithmar.arabia-it.net/api/admin/service-provider-fields")
  // const data2=await response2.json()
  return{
      props:{
          AppData:data,
      }
  }
}