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
function appendCat(Tomy){
    return cats.concat(Tomy);
}
function prependCat(Ome){
    const newCats =[Ome, ...cats];
    return newCats;
}
function PrependCat(){
    return cats.slice[a.cats.length -1];
}
function removeLastCat(){
    return cats.slice(0, cats.length -1);

}

function removeFirstCat(){
    return cats.slice(1, cats .length);
}