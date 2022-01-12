let players = [
    {"Name": "Raygud",
     "Rank": "Diamond",
     "MMR" : "1743"},
     {"Name": "Raygile",
     "Rank": "Immortal",
     "MMR" : "1823"},
]

players.push({"Name": "Reyvagras",
"Rank": "Silver",
"MMR" : "2032"})

players.sort(function (y, x) {
    return x.MMR - y.MMR;
});

console.table(players[1])