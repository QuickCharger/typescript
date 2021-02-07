let net = require('net')

let CreateServer = () => {
	net.createServer((inSocket) => {
		inSocket
		.on('close', ()=>{
			console.log(`insocket close`)
		}).on('connect', ()=>{
			console.log(`insocket connect`)
		}).on('data', data =>{
			console.log(`insocket data`)
			inSocket.write("connect success")
		}).on('drain', ()=>{
			console.log(`insocket drain`)
		}).on('end', ()=>{
			console.log(`insocket end`)
		}).on('error', ()=>{
			console.log(`insocket error`)
		}).on('lookup', ()=>{
			console.log(`insocket lookup`)
		}).on('timeout', ()=>{
			console.log(`insocket timeout`)
		})
	}).listen({host:"0.0.0.0", port:12345}, () => {
		console.log(`server listen port ${12346} success`)
	}).on("error", (e)=>{
		console.log(`server error`)
		console.log(e)
		setTimeout(CreateServer, 5 * 1000)
	}).on("close", ()=>{
		console.log(`server close`)
	}).on('connection', ()=>{
		console.log(`server connection`)
	}).on("listening", ()=>{ 
		console.log(`server listening`)
	})
}
CreateServer()
