const ValorantAPI = require("unofficial-valorant-api")

let players = []




const KnownPlayers = [
    Player = {
        Name:"Raygud", 
        Id:"Molly"},

    Player = {
        Name:"Raygud", 
        Id:"Molly"},

    Player = {
        Name:"Reyvagras", 
        Id:"EUW"},  
        
    Player = {
        Name:"Konga", 
        Id:"1111"}, 
    Player = {
        Name:"nutson", 
        Id:"9906"},   

    Player = {
        Name:"boxfightchamp19", 
        Id:"12345"},  

    Player = {
        Name:"Dixer", 
        Id:"1325"},

    Player = {
        Name:"Shades", 
        Id:"6453"},

    Player = {
        Name:"FaroeMystiC", 
        Id:"EUW"},

    Player = {
        Name:"frusaZ", 
        Id:"000"},

    Player = {
        Name:"AgentPerry", 
        Id:"5152"},

    Player = {
        Name:"T B", 
        Id:"Boost"},

    Player = {
        Name:"Raygile", 
        Id:"OPr"},

    Player = {
    Name:"наживка", 
    Id:"RUS"},

    Player = {
    Name:"PinTorEK", 
    Id:"EUNE"},

    Player = {
    Name:"venzelbrah", 
    Id:"8537"},

    Player = {
        Name:"judgE", 
        Id:"BOB"},
    

    Player = {
        Name:"IPawnDeySi", 
        Id:"1337"}


]



for (let i=0; i<KnownPlayers.length; i++) {
    task(i);
    }
    
    function task(i) {
        
    setTimeout(function() {
    async function fetchMMR(version, region, name, tag) {
    const mmr = await ValorantAPI.getMMR(version, region, name, tag)
    a = "Name: "+ mmr.data.name+"    " + "Rank: "+ mmr.data.currenttierpatched+"    "+ "Elo: " + mmr.data.elo
    
    if (mmr.data.name != "undefined" && mmr.data.currenttierpatched && "undefined" || mmr.data.elo && "undefined"){
        
        players.push({"Name": mmr.data.name,
"Rank": mmr.data.currenttierpatched,
"MMR" : mmr.data.elo})

players.sort(function (x, y) {
    return y.MMR - x.MMR;
});
console.table(players)
if (i == KnownPlayers.length-1){
    document.getElementById("List"+i).innerHTML = ("Name" + players[i].Name + " " +"Rank" + players[i].Rank + " " +"MMR" + players[i].MMR) 
    
    console.table(players)
    console.log("Players sorted")
    }
    }
    else{
        i--
        console.log("Gudbot caught an error" + i)}
    // EloUnordered.sort(function(a, b){return b-a});
    
    }
    fetchMMR("v1", "eu", KnownPlayers[i].Name, KnownPlayers[i].Id)
    
    }, 100 * i);
    }

fetchMMR("v1", "eu", "Henrik3", "EUW3") 

