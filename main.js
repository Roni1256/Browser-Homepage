const container=document.getElementById('lists')
const options=document.getElementById('bOptions')
const objApps=[
    {
        icon:`<i class="fa-brands fa-youtube text-4xl text-red-600 "></i>`,
        label:"Youtube",
        link:"https://youtube.com"
    },
    {
        icon:`<i class="fa-solid fa-envelope text-4xl text-green-600  "></i>`,
        label:"Gmail",
        link:'https://mail.google.com/'
    },
    {
        icon:`<i class="fa-brands fa-github text-4xl text-white rounded-full"></i>`,
        label:"Github",
        link:"https://github.com/Roni1256"
    },
    {
        icon:`<i class="fa-brands fa-codepen text-4xl text-white    "></i>`,
        label:"CodePen",
        link:"https://codepen.io"
    },
    {
        icon:`<i class="fa-brands fa-stack-overflow text-4xl text-black text-orange-500   "></i>`,
        label:"StackOverflow",
        link:"https://stackoverflow.com "
    },
    {
        icon:`<i class="fa-brands fa-linkedin text-4xl text-blue-700  h-fit rounded"></i>`,
        label:"LinkedIn",
        link:"https://linkedin.com"
    },
    {
        icon:`<i class="fa-brands fa-amazon  text-4xl text-yellow-500  "></i>`,
        label:"Amazon",
        link:"https://amazon.in"
    },
    {
        icon:`<i class="fa-solid fa-cart-shopping   text-4xl text-yellow-500  "></i>`,
        label:"Flipkart",
        link:"https://www.flipkart.com/"
    },
    {
        icon:`<i class="fa-brands fa-hackerrank   text-4xl text-green-600  "></i>`,
        label:"HackerRank",
        link:"https://www.hackerrank.com/dashboard"
    },
    {
        icon:`<i class="fa-brands fa-react   text-4xl text-red-600  "></i>`,
        label:"ReactIcons",
        link:"https://react-icons.github.io/react-icons/"
    },
    {
        icon:`<i class="fa-solid fa-map-location text-4xl text-green-600  "></i>`,
        label:"HackerRank",
        link:"https://maps.google.com"
    },
    {
        icon:`<i class="fa-solid fa-font-awesome text-4xl text-blue-600  "></i>`,
        label:"FontAwesome",
        link:"https://www.fontawesome.com"
    },
    
    



]
// const bOptions=[
//     {
//         icon:`<i class="fa-solid fa-clock-rotate-left text-4xl text-white  "></i>`,
//         label:"History",
//         link:'chrome://history/'
//     },
//     {
//         icon:`<i class="fa-solid fa-download text-4xl text-white   "></i>`,
//         label:"Downloads"
//     },
// ]

// bOptions.map(obj=>{
//     return (options.innerHTML+=`   <a class="bg-slate-900 text-white  w-fit p-5 rounded-lg shadow-xl shadow-black/20 hover:scale-[1.1] transition-all duration-300 ease-in-out 
//                 cursor-pointer flex  items-center gap-3 "
//                 href=${obj.link}
//                 >
//                     ${obj.icon}
//                     <span>${obj.label}</span>
//                 </a>`)
// })
objApps.map((object)=>{
    
    return(
    container.innerHTML+=`
    <a class="applications bg-slate-900 text-white   p-5 rounded-lg shadow-md shadow-black/20 hover:scale-[1.1] transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center  gap-5 shadow-red-600/50 hover:shadow-green-600/50    " href=${object.link} >
                    ${object.icon}
                    <span class="hidden md:block ">${object.label}</span>
                </a>
        `
    )
})

const dateSec=document.getElementById('dateSect')

const date=new Date()
const timeSet=document.getElementById('time')

setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();



dateSec.innerHTML+=`

<span class="text-gray-300 text-3xl font-bold tracking-wider ">
${
    date.toDateString()
}
</span>
`

const searchBox=document.getElementById('searchbox'),
    searchBtn=document.getElementById('searchBtn');

function search() {
    let URL="https://www.google.com/search?q="+searchBox.value
    window.open(URL)
    searchBox.value="";
}
window.addEventListener('keypress',e=>{
    if(e.key==='Enter')
       if(searchBox.value.length!=0)
            search()
    
})
searchBtn.addEventListener('click',(e)=>{
    search()
})
// 