import { useState } from "react";

function ShowPass({value}){
	const [sPass, setsPass] = useState(false);
	return(
		<>
		<input class="in" type={sPass ? "text" : "password"} value={value}/>
		<button class="butSP" type="button" onClick={() => setsPass(!sPass)}>✓</button> 
		</>
		
	);
}
export default ShowPass;