let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0 ;
let index_no = 0;
let playing_song = false;

let track =document.createElement('audio');
function append_data(){
    var sng = document.querySelector('#sng').value;
    var art = document.querySelector('#art').value;
    var images = document.querySelector('#images').value();
    var song = document.querySelector('#song').value();
    
    console.log(sng);
    All_song.push({songname:sng,path:song.mp3,singer:art,img:images.jpg});

}
let All_song =[
    {
    songname:"firstname",
    path : "pilla.mp3",
    singer : "first singer",
    img :"lovestory.jpg"
    },
    {
        songname:"secondname",
        path : "siri.mp3",
        singer : "first singer",
        img :"siri.jpg"
        
    },
    {
        songname:"third song",
        path: "Bhombat.mp3",
        singer: "third singer",
        img:"lie.jpg"
    },
    {
        songname:"fourth song",
        path: "bomo.mp3",
        singer: "fourth singer",
        img:"atha.jpg"

    },
    {
        songname:"fifth song",
        path: "5.mp3",
        singer: "fifth singer",
        img:"5.jpg"
    },
    {
        songname:"sixth song",
        path: "6.mp3",
        singer: "sixth singer",
        img:"6.jpg"
    },
    {
        songname:"seventh song",
        path: "7.mp3",
        singer: "seventh singer",
        img:"7.jpg"
    },
    {
        songname:"eighth song",
        path: "8.mp3",
        singer: "eighth singer",
        img:"8.jpg"
    }

];
load_track(index_no);
function load_track(index_no){
    reset_slider();
    track.src= All_song[index_no].path;
    title.innerHTML=All_song[index_no].songname;
    track_image.src=All_song[index_no].img;
    artist.innerHTML =All_song[index_no].singer;
    track.load();
    timer =setInterval(range_slider ,1000);
}
function mute_sound(){
    track.volume =0;
    volume.value=0;
    volume_show.innerHTML=0;
}
function autoplay_switch(){
    if(autoplay ==1){
        autoplay=0;
        auto_play.style.background ="rgba(255,255,255,0.2)";
    }
    else{
        autoplay =1;
        auto_play.style.background = "#BA4A00";
    }
}
function reset_slider(){
    slider.value = 0;
}
function justplay(){
    if(playing_song == false)
    {
        playsong();
    }
    else{
        pausesong();
    }
}
function playsong()
{
    track.play();
    playing_song = true;
    play.innerHTML ='<i class="fa fa-pause" aria-hidden="true"></i>';
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
} 
function next_song()
{
    if(index_no < All_song.length -1){
        index_no ++;
        load_track(index_no);
        present.innerHTML = index_no+1;
        playsong();
    }
    else{
        index_no =0;
        load_track(index_no);
        present.innerHTML = index_no+1;
        playsong();
        
    }
}
function previous_song(){
    if(index_no > 0){
        index_no--;
        load_track(index_no);
        present.innerHTML = index_no+1;
        playsong();
        
        
    }
    else{
        index_no = All_song.length -1;
        load_track(index_no);
        present.innerHTML = index_no+1;
        playsong();
        
    }
}
total.innerHTML= All_song.length;
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value/100;
}
function change_duration(){
    slider_position = track.duration * (slider.value/100);
    track.currentTime = slider_position;
}
function range_slider(){
    let position = 0;
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
    if(track.ended){
        play.innerHTML = '<i class="fa fa-play"></i>';
        if(autoplay==1){
            index_no++;
            load_track(index_no);
            playsong();
        }
    }

}
