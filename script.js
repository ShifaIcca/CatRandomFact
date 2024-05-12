const p=document.querySelectorAll(".info")
async function api()
{
    let a = await fetch("https://catfact.ninja/fact")
    let res = await a.json()
    for(let i=0;i<p.length;i++)
        {
            p[i].innerHTML=res.fact
        }
        const b=document.querySelector(".name")
        
}
api()