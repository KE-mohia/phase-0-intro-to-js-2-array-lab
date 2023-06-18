// Write your solution here!
const cats =["Milo","Otis", "Garfield"];
function destructivelyAppendCat(Sony){
    cats.push(Sony);
    return cats;
}
function destructivelyPrependCat(Bosco){
    cats.unshift(Bosco);
    return cats;
}
function destructivelyRemoveLastCat(Milo){
     cats.pop(Milo);
     return cats;
}
function destructivelyRemoveFirstCat(Otis){
    cats.shift(Otis); 
    return cats;
}
function appendcat(Tomy){
    return cats.concat(Tomy);
    return cats;
}
function appendcat(Ome){
    const newCats =[Ome, ...cats];
    return newCats;
}
function PrependCat(){
    return cats.slice[a.cats.length -1];
}
function removeLastcat(){
    return cats.slice(0, cats.length -1);

}

function removeFirstCat(){
    return cats.slice(1, cats .length);
}