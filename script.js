var moveType = 'x';

function setValue(cell){
    if(cell.textContent === ''){
        cell.textContent = moveType;
        moveType = (moveType === 'x')? 'o':'x';
        win();
    }
    else{
        alert('The cell is already occupied!');
    }
}


function showText(text){
    let tag = document.getElementsByClassName('text')[0];
    tag.textContent = text;
}


function clearField(){
    showText('');
    let tags = document.getElementsByClassName('table__cell');
    for(let ch = 0; ch < tags.length; ch++){
        tags[ch].textContent = '';
    }
    moveType = 'x';
}


function win(){
    let winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let tags = document.getElementsByClassName('table__cell');
    for(let ch = 0; ch < winCombinations.length; ch++){
        let comb = winCombinations[ch];
        if(tags[comb[0]].textContent === tags[comb[1]].textContent && tags[comb[1]].textContent === tags[comb[2]].textContent && tags[comb[1]].textContent !== ''){
            showText(`Winner ${tags[comb[0]].textContent}!`);
            moveType = '';
            break;
        }
    }
    if(isFieldFull() && moveType !== ''){
        showText('Dead heat!');
    }
}


function isFieldFull(){
    let tags = document.getElementsByClassName('table__cell');
    for(let ch = 0; ch < tags.length; ch++){
        if(tags[ch].textContent === ''){
            return false;
        }
    }
    return true;
}