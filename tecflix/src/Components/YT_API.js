
let key="AIzaSyAwge8kxALiDuGKclymG0ihR4FfocPcNu0";
let idCanal="UCjG5IH5n4aQ-NBNaPDCjTXQ";
let resPorPagina=25;
let url="https://www.googleapis.com/youtube/v3/search?key=" + key + "&channelId=" + idCanal + "&part=snippet,id&order=date&maxResults=" + resPorPagina;

let xmlhttp=new XMLHttpRequest();
xmlhttp.open('GET',url,true);
xmlhttp.send();
xmlhttp.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let data=JSON.parse(this.responseText);
        //console.log(data);
        for(var i=0;i<data.items.length;i++){
            console.log(data.items[i].snippet.title);
        }
    }
}