const GIPHY_API="https://api.giphy.com/v1/gifs/search";$(function(){$("#search-form").on("submit",function(event){event.preventDefault();const query=$(".search").val().trim();console.log(query)
if(query.length>0){axios.get(GIPHY_API,{params:{api_key:"y552Ig0rBsEWCcvr10kYKLiEkmyHutLT",q:query,limit:20}}).then((response)=>{let data=response.data.data
console.log(data)
for(let img of data){let div=`<div><img src="${img.images['fixed_height'].url}"/></div>`
$('.show').append(div)}}).catch((error)=>console.log(error))}});$('.clear').click(function(){$('.show').html("")
$(".search").val("")})})