let lastLivId = 0;
let lastMpLId = 0;
let a321id = null
let b747id = null
//find id of the 747 and a321 automatically
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("A321"))
    a321id = e.attributes["data-aircraft"].value
})
document.querySelectorAll('[data-aircraft]').forEach(function(e){
  if (e.innerText.includes("747"))
    b747id = e.attributes["data-aircraft"].value
})
//737 ryanair livery
newDiv = document.createElement("div");
newDiv.setAttribute("data-aircraft", 4);
newDiv.setAttribute("data-livery", 7);
newDiv.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_8.15.06_am__1_.png">TUI new';
//737 delta livery
newDiv1 = document.createElement("div");
newDiv1.setAttribute("data-aircraft", 4);
newDiv1.setAttribute("data-livery", 8);
newDiv1.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-10_11.52.42_am__1_.png">SaS';
//737 canada livery
newDiv2 = document.createElement("div");
newDiv2.setAttribute("data-aircraft", 4);
newDiv2.setAttribute("data-livery", 9);
newDiv2.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/6473892164984.png">Jet2 Holidays';
//737 bare
newDiv3 = document.createElement("div");
newDiv3.setAttribute("data-aircraft", 4);
newDiv3.setAttribute("data-livery", 10);
newDiv3.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/8437210984781.png">Lauda';
//A380 House
newDiv4 = document.createElement("div");
newDiv4.setAttribute("data-aircraft", 10);
newDiv4.setAttribute("data-livery", 11);
newDiv4.innerHTML = '<img src="https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/screenshot_2022-01-12_6.04.22_pm__1_.png">British Airways';
//737  New
newDiv9 = document.createElement("div");
newDiv9.setAttribute("data-aircraft", 4);
newDiv9.setAttribute("data-livery", 16);
newDiv9.innerHTML = 'TUI';
//737 Transavia
newDiv10 = document.createElement("div");
newDiv10.setAttribute("data-aircraft", 4);
newDiv10.setAttribute("data-livery", 17);
newDiv10.innerHTML = 'Buzz';
//737 China Eastern
newDiv11 = document.createElement("div");
newDiv11.setAttribute("data-aircraft", 4);
newDiv11.setAttribute("data-livery", 18);
newDiv11.innerHTML = 'west atlanTic';
//737 Ethiopian
newDiv12 = document.createElement("div");
newDiv12.setAttribute("data-aircraft", 4);
newDiv12.setAttribute("data-livery", 19);
newDiv12.innerHTML = 'Transavia';
if (document.getElementsByClassName("geofs-aircraft-list")[0].children[5].childElementCount == 7){
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv1);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv2);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv3);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv9);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv10);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv11);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[5].appendChild(newDiv12);
}
if (document.getElementsByClassName("geofs-aircraft-list")[0].children[4].childElementCount == 7){
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv1);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv2);
  document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv3);
      document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv9);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv10);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv11);
    document.getElementsByClassName("geofs-aircraft-list")[0].children[4].appendChild(newDiv12);
}
  if (document.getElementsByClassName("geofs-aircraft-list")[0].children[10].childElementCount == 4){
document.getElementsByClassName("geofs-aircraft-list")[0].children[10].appendChild(newDiv4)
  }
  if (document.getElementsByClassName("geofs-aircraft-list")[0].children[11].childElementCount == 4){
document.getElementsByClassName("geofs-aircraft-list")[0].children[11].appendChild(newDiv4)
  }
// master livery function
if (geofs.version == 2.9){
  function updateLivery(){
          if (parseInt(geofs.aircraft.instance.liveryId) == 14){
Object.values(geofs.api.models._primitives).forEach(function(e){
if (e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] == 0){
console.log(e);
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id181__1_.png", 0, e)
  if (!e._resource._url.includes("748f.gltf")) {
          geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id163__1_.png", 0, e)
        }
}})
            
  }
              if (parseInt(geofs.aircraft.instance.id) == 2310 && parseInt(geofs.aircraft.instance.liveryId) == 15){
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/livercomposit.jpg", 1, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 7){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/kXZ66Z3/tui737new.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
//start
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 16){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/QcsDXDp/TUI.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
          if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 17){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/yWhZ9Qj/BZZ7377.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 18){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/MBdGnLB/po-2.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 19){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/Dts72Wj/tra737.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
    
    //end
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 8){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/YdzWX0j/sassysax.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
      }
    
  if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 9){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/jy8kh7Z/j2h737.png", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
  }
      
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId)
 == 10){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/28xnQDx/Lauda737.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
}
        if (parseInt(geofs.aircraft.instance.id) == 10 && parseInt(geofs.aircraft.instance.liveryId)
 == 11){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/xg2Q4CR/BA-a380-1.jpg", 3, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
}
            if (parseInt(geofs.aircraft.instance.id) == 2973 && parseInt(geofs.aircraft.instance.liveryId)
 == 12){
geofs.api.Model.prototype.changeTexture("https://i.ibb.co/4NbWPcq/LH-A5k.jpg", 0, geofs.aircraft.instance.definition.parts[0]["3dmodel"]);
}
                if (parseInt(geofs.aircraft.instance.liveryId)
 == 13){
Object.values(geofs.api.models._primitives).forEach(function(e){
  if (e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] > -0.01 && e._apiLla[0] - geofs.aircraft.instance.llaLocation[0] < 0.01) {
console.log(e);
geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/id8__1_.png", 0, e)
        if (!e._resource._url.includes("/backend/aircraft/repository/D02_933_242/A321neo.gltf")) {
          geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png", 0, e)
        }
}})
}
}
}
if (geofs.version == 3.35){
  function updateLivery(){
      if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 7){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/kXZ66Z3/tui737new.jpg", 3);
  }
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 8){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/YdzWX0j/sassysax.jpg", 3);
      }https://i.ibb.co/jy8kh7Z/j2h737.png
  if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 9){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/jy8kh7Z/j2h737.png", 3);
  }
      
    if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 10){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/28xnQDx/Lauda737.jpg", 3);
    }
//start
if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 16){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/QcsDXDp/TUI.jpg", 3);
  }
if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 17){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/yWhZ9Qj/BZZ7377.jpg", 3);
  }
if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 18){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/MBdGnLB/po-2.jpg", 3);
  }
if (parseInt(geofs.aircraft.instance.id) == 4 && parseInt(geofs.aircraft.instance.liveryId) == 19){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/Dts72Wj/tra737.png", 3);
  }
    
//end

            if (parseInt(geofs.aircraft.instance.id) == 10 && parseInt(geofs.aircraft.instance.liveryId)
 == 11){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/xg2Q4CR/BA-a380-1.jpg", 3);
 }
if (parseInt(geofs.aircraft.instance.id) == 2973 && parseInt(geofs.aircraft.instance.liveryId)
 == 12){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://i.ibb.co/4NbWPcq/LH-A5k.jpg", 0);
 }
    if (parseInt(geofs.aircraft.instance.id) == 242 && parseInt(geofs.aircraft.instance.liveryId)
 == 13){
geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[0]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png", 0);
      geofs.api.changeModelTexture(geofs.aircraft.instance.definition.parts[1]["3dmodel"]._model, "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture__1___1_.png", 0);
 }
  }
}
let arr1 = [];
function convertUsers(){
  arr1 = $.map(multiplayer.visibleUsers, function (value) { return value; });
};
if (geofs.version == 2.9){
function updateMultiplayer(){
  arr1 = [];
  convertUsers();
  arr1.forEach(function(e, i){
if (e.lastLivery != e.currentLivery){
    if (e.currentLivery == 7){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__2_low.png", 0, multiplayer.visibleUsers[e.id].model); 
    }
        if (e.currentLivery == 8){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_4_low.png", 0, multiplayer.visibleUsers[e.id].model); 
    }
        if (e.currentLivery == 9){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0__5__low.png", 0, multiplayer.visibleUsers[e.id].model); 
    }
        if (e.currentLivery == 10){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/texture_0low.png", 0, multiplayer.visibleUsers[e.id].model); 
        }
        if (e.currentLivery == 11){
     geofs.api.Model.prototype.changeTexture("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/a380house__1_.png", 0, multiplayer.visibleUsers[e.id].model); 
    }    
}
   e.lastLivery = e.currentLivery
  })
}
}
if (geofs.version == 3.35){
  function updateMultiplayer(){
  arr1 = [];
  convertUsers();
  arr1.forEach(function(e, i){
if (e.lastLivery != e.currentLivery){
    if (e.currentLivery == 7){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://i.ibb.co/kXZ66Z3/tui737new.jpg", 0);
    }
        if (e.currentLivery == 8){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://i.ibb.co/YdzWX0j/sassysax.jpg", 0);
    }
        if (e.currentLivery == 9){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://i.ibb.co/jy8kh7Z/j2h737.png", 0);
    }
        if (e.currentLivery == 10){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model, "https://i.ibb.co/28xnQDx/Lauda737.jpg", 0);
        }
        if (e.currentLivery == 11){
geofs.api.changeModelTexture(multiplayer.visibleUsers[e.id].model._model, "https://i.ibb.co/xg2Q4CR/BA-a380-1.jpg", 0);
    }
}
    e.lastLivery = e.currentLivery
  })
}
}
setInterval(function(){
  if (lastLivId != parseInt(geofs.aircraft.instance.liveryId)){
  updateLivery();
  }
  lastLivId = parseInt(geofs.aircraft.instance.liveryId)
}, 500)
setInterval(function(){
  updateMultiplayer();
}, 10000)
