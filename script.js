//your JS code here. If required.
document.getElementById("btn").addEventListener("click",function(){
	let output= document.getElementById("output");
	let ip = document.getElementById("ip").value;
	
	let prom = new Promise((resolve)=>{
		
		setTimeout(()=>{
			//show data	
			output.textContent = `Result: ${ip}`;
			resolve(ip);
		},2000)
	}).then((ip)=>{
		ip = ip*2;

		return new Promise((resolve)=>{
			setTimeout(()=>{
				//mul
				output.textContent=`Result: ${ip}`;
				resolve(ip);
			},1000);
		});
	}).then((ip)=>{
		ip = ip-3;

		return new Promise((resolve)=>{
			setTimeout(()=>{
				//sub
				output.textContent=`Result: ${ip}`;
				resolve(ip);
			},1000);
		});
	}).then((ip)=>{
		ip = ip/2;

		return new Promise((resolve)=>{
			setTimeout(()=>{
				//div
				output.textContent=`Result: ${ip}`;
				resolve(ip);
			},1000);
		});
	}).then((ip)=>{
		ip = ip+10;

		return new Promise((resolve)=>{
			setTimeout(()=>{
				//add
				output.textContent=`Final Result: ${ip}`;
				resolve(ip);
			},1000);
		});
	});
	
	
});

