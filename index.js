const http=require("http")
const port=8080

const jsonobject={
name:"sadiqa",
age:20,
whatisnodejs :"node js is open sourse ,cross platform,run time environment for javascript"
}

const api =http.createServer((request,response)=>{
    console.log(request.url)
    if(request.url ==='/about'
    //  && request.method==="POST"
     ){

        response.write("<html>")
        response.write("<body>")
        response.write("<h1>What is Node js<h1/>")
        response.write("<p>node js is open sourse ,cross platform,run time environment for javascript</p>")
        response.write("</body>")
        response.write("</html>")
        response.end();
    }
//     else if(req.url==="/fetchAPI"){
// res.write("post api");
// res.end();

else if(request.url==="/fetchAPI"){
// res.write(jsonobject)//goivs buffer data so conveert to string or 
const data =JSON.stringify(jsonobject);
response.write(data)
response.end()
}

response.write("This is my home route")
response.end()//if we dont write this no data will be shown bcz it wond end respnse so 
})
api.listen(port,()=>{
    console.log(`server is runningo on port number ${port}`)})