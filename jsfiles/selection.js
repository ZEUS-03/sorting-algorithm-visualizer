async function selection(){
    const ele = document.querySelectorAll(".bar");

    for(let i=0; i < ele.length; i++){
        let min_index = i;
        
        // await waitforme(delay);
        ele[i].style.background = 'yellow';
        for (let j = i+1; j<ele.length; j++){

            ele[j].style.background = 'red';

            await waitforme(delay);
            if (parseInt(ele[min_index].style.height) > parseInt(ele[j].style.height)){
                if (min_index!==i){
                    ele[min_index].style.background = 'cyan';
                } 
                min_index = j;  
            }
            else{
                ele[j].style.background = 'cyan';
            }
        }

        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background='cyan';
            
        ele[i].style.background = 'white';
        
    }
}
const selectionSortBtn = document.querySelector(".selectionsort");
selectionSortBtn.addEventListener("click", async function () {
    disableSortingBtn();
    disableSizeSlider();
    // diableNewArrBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
});
