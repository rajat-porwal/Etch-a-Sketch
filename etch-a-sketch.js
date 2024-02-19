let wrapperDiv = document.getElementById('wrapperDiv');
let rowGrid = document.getElementsByClassName('rowGrid');
let reset = document.getElementById('rst');
let gridN = document.getElementById('gridN');
let gridNum = null;



gridN.addEventListener('click', () => {
    gridNum = prompt('How many cells you want?');
    if(gridNum <= 100){
        gridCreator(gridNum);
        colorizer(gridNum);
    }

    else(alert('Please enter a number less than 100 to not to crash and freeze the browser'));
});



function gridCreator(gridNum){

    for(i=0; i<gridNum; i++){
        let row = document.createElement('div');                    //mistake that cost almost two hours of nothing was creating a 2-d arry of divs 
        wrapperDiv.appendChild(row).className = 'rowGrid';
        // console.log(row);
    }

    for(i=0; i<gridNum; i++){
        for(j=0; j<gridNum; j++){
            let columnDiv = document.createElement('div');
            rowGrid[i].appendChild(columnDiv).className ='cell';
            // console.log(columnDiv);
        }
    }

}

let cell = document.querySelectorAll("div");
console.log(document.querySelectorAll(".cell"));

// cell.addEventListener('mouseover',() =>{
//                cell.style.cssText = 'background: blue;'; 
//             });




function colorizer(gridNum){

    for(i=0; i<gridNum; i++){
        for (const child of rowGrid[i].children) {
            child.addEventListener('mouseover',() =>{
                child.style.backgroundColor = randomColor(); 
            });
        }
    
    }

}

reset.addEventListener('click', () => {

    const grid = document.querySelectorAll(".rowGrid");
    for(let i=0;i<grid.length;i++) {
        grid[i].remove();
    }

    // const grid = document.getElementById("wrapperDiv");
    // grid.remove();
    // for(i=0; i<gridNum; i++){
    //     console.log(document.querySelectorAll('.cell'));
    //     for(const child in rowGrid[i].children){                     FOR IN WOULDNT OWRK ( IT WOULD RETURN THE OBJECT AND KEYS AND BLAH BLAH)
    //         // child.forEach(child => child.remove());               
    //     }                                                            FOR OF WOULD , BUT NEED A WHILE LOOP FIRST CIZ LIVE NODELIST
    //                                                                  AND IN THAT I NEED EITHER A FOR LOOP OR FOR OF LOOP
    //     }

    // for(let i =0; i<gridNum; i++){                                        THIS IS WHAT I WANTED TO DO IN THE FIRST PLACE
    //     let children = rowGrid[i].childNodes;                    NESTED LOOPS BUT WAS UNABLE TO DO SO
    //     while(children.length>0){                            CUZ 
    //       for (let i = 0; i<children.length; i++){
    //         children[i].remove();
    //       }
    //     }
    //   }


    // for(let i =0; i<gridNum; i++){                           BOTH .CHILDNODES AND .CHILDREN WOULD HAVE WORKED I NEEDED A WHILE AND FOR OF LOOP
    //     let children = rowGrid[i].childNodes;
    //     while(children.length>0){
    //       for (const child in children){
    //         child.remove();
    //       }
    //     }
    //   }
});




function randomColor(){
    let color = [];
    for(let i = 0; i<3; i++){
        color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')'; 
}


// THIS DIDNT WORK CUZ CHILDREN ARE HTML COLLECTION
//ANd CANT APPLY ARRAY METHODS ON THEM,
//Actually for ( j=0, j <..... ) it didnt work but for ( const child in rowGrid[i].children) did
// for(i=0; i<16; i++){

//     console.log(rowGrid[i].children);
//     // for (j=0; j<16; j++) {
//     //     rowGrid[i].children[j].addEventListener('mouseover',() =>{
//     //         rowGrid[i].children[j].style.cssText = 'background: blue;'; 
//     //     });
//     // }
// }

