> help to generate the series as well as iterate over Array

for(let i =0; i<5;i++){
    console.log(i)
}
0
1
2
3
4

for(let i =0; i<5;i+=2){
    console.log(i)
}
0
2
4

let city1 = ['London', 'Delhi', 'Mumbai', 'Pune', 'Venice']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

let city1 = ['London', 'Delhi', 'Mumbai', 'Pune', 'Venice']
for(mycity of city1){
    console.log(mycity)
}