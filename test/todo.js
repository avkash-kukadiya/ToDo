let div = document.querySelector('#crs')
let ul = document.querySelector('ul')
let ip = document.querySelector("#inp");
let ip2 = document.querySelector("#dec");
let c = localStorage.getItem(`c`) || 0;
let xp = ip.value;

let net = JSON.parse(localStorage.getItem(`key`))
let arr = JSON.parse(localStorage.getItem('key')) || [];





function todo() {
    arr = JSON.parse(localStorage.getItem('key')) || []

    let apc = {
        title: ip.value,
        decs: ip2.value
    }
    arr.push(apc);
    let arp = JSON.stringify(arr);
    localStorage.setItem('key', `${arp}`);
    // let data = localStorage.getItem(`key`)
    // console.log(arp)
    //  net = JSON.parse(data)
    // console.log(net)


    ip.value = "";
    ip2.value = "";


}
function get() {

    // ul.innerHTML = "";
    div.innerHTML = "";

    arr.forEach(x => {
        console.log(x)
        lb = x.title
        lb2 = x.decs
        div.innerHTML += `<div class="crd">
    <h2 class="title"><i class="fa-solid fa-circle-check icon"></i>   ${lb}</h2>
    <p class="de">${lb2} </p>
</div>`
    })



    let ar =['#fbf8cc','#fde4cf','#ffcfd2','#f1c0e8','#cfbaf0','#a3c4f3','#90dbf4','#8eecf5','#98f5e1','#b9fbc0']
   
    let card = document.getElementsByClassName('crd')
    // console.log(colorIndex)
    
          for(x of card){
            let colorIndex = Math.floor(Math.random()*10)
            x.style.backgroundColor=ar[colorIndex];
          }
}     


