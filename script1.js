document.body.style.fontFamily = 'Arial, sans-serif';

const parag = document.querySelectorAll('p');

parag[0].style.color = 'orange';
parag[0].style.backgroundColor = 'yellow';
parag[0].style.fontSize = '16px';
parag[0].style.padding = '5px';
parag[0].style.textAlign = 'center';

parag[1].style.color = 'blue';
parag[1].style.backgroundColor = 'lightblue';
parag[1].style.fontSize = '14px';
parag[1].style.padding = '5px';
parag[1].style.textAlign = 'right';

parag[2].style.color = 'red';
parag[2].style.backgroundColor = 'lightcoral';
parag[2].style.fontSize = '12px';
parag[2].style.padding = '5px';
parag[2].style.textAlign = 'left';

const tableCells = document.querySelectorAll('td');

tableCells.forEach((tableCell, index) => {
    if (index % 2 === 0) {
        tableCell.classList.add('selected')
    }
});