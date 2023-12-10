const endDate="16 December 2023";
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate)
    const now=new Date()
    const diff=(end-now)/1000;
    

    //convert into days
    // 1day=24hr
    // 1hr=60min
    //60min=3600sec
   inputs[0].value=Math.floor(diff/3600/24);
   inputs[1].value=Math.floor((diff/3600)%24);
   inputs[2].value=Math.floor((diff/60)%60);
   inputs[3].value=Math.floor((diff)%60);

    
}
clock()
setInterval (
    ()=>{
        clock()
    },1000
)

