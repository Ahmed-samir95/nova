// portfolio filter
let filterBtns = document.querySelector('#filter-btns').children
let portfolioRow = document.querySelector('.row').children

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function() {
        for (let j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove('active')
        }
        this.classList.add('active')
        let target = this.getAttribute('data-target')

        for (let k = 0; k < portfolioRow.length; k++) {
          portfolioRow[k].style.display = 'none'
            if (target == portfolioRow[k].getAttribute('data-id')) {
              portfolioRow[k].style.display = 'block'
            }
            if (target == 'all') {
              portfolioRow[k].style.display = 'block'
            }
        }
        
    })
    
}