const APIComponent =()=>{
return(
    <div>
        <p>
        جميع الخدمات تندرج تحت الدومين 
        
        </p>
        <p>
            <a href ="http://api.noorinternational.net" style={{color:'#C9AB7A',textDecoration:"none"}}>
            http://api.noorinternational.net
            </a>
        </p>
        <p>
         ولتحديد اللغة يجب تحديد
         <span>
            languageId
         </span>
          من القيم التالية:
        </p>
        <div style={{background:"#ccc",textAlign:"left",color:"#268168",padding:"10px",fontWeight:"bold"}}>
            <li>
            2English 
            </li>
            <li>
            3Français 
            </li>
            <li>
            5Españollatino

            </li>
            <li>
            6Español europeo

            </li>
        </div>
    </div>
)
}
export default APIComponent