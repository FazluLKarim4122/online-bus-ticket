document.addEventListener('click', seatAddMinus);
    

function seatAddMinus(event){
    // console.log(event.target)
    // console.log('click event worked');
    const clicked = event.target ;
    // console.log('You clicked there: ', clicked);
    
    // if(clicked === desireClicked){
    //     console.log('Right Seat Clicked')
    // }
    // else{
    //     console.log('Wrong seat clicked')
    // }

}
const desireClicked = document.getElementsByClassName("kbd");
// console.log(desireClicked);
let seatSelected = 0 ;
let seatLeft = 40 ;
let clickedSeat = [];
let limit = 4;
for(const clicked of desireClicked){
    clicked.addEventListener('click', function(event){
        if (clickedSeat.includes(clicked)) {
            alert("This seat has already been clicked");
            return; 
        }
        clickedSeat.push(clicked);
        // console.log(clickedSeat.length)
        if(clickedSeat.length > limit){
            alert("You have clicked more than 4 seats")
            
            // clicked.style.visibility = "not working";
            
            return ;
        }
        // if(clickedSeat.length > limit){
        //     clicked.addEventListener('click', false);
        //     return ;
        // }

        seatSelected = seatSelected + 1 ;
        // document.getElementById('total-seat').innerText = seatSelected ;
        setInnerText('total-seat', seatSelected) ;
        seatLeft = seatLeft - 1 ;
        // document.getElementById('seat-left').innerText = seatLeft ;
        setInnerText('seat-left', seatLeft ) ;
        //-------------------------------------

        const seatName = event.target.innerText ;
        // console.log(seatName)
        const seatBooking = document.getElementById('seat-info');
        const div = document.createElement("div");
        div.classList.add('flex','justify-between')
        const p = document.createElement("p");
        p.innerText = seatName ;
        const p2 = document.createElement("p")
        p2.innerText = 'Economy';
        const p3 = document.createElement("p")
        p3.innerText = '550' ;
        console.log(typeof p3.innerText)
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        seatBooking.appendChild(div);
        const totalCost = document.getElementById('total-cost').innerText;
        const convertedTotalCost = parseInt(totalCost);
        // console.log(typeof convertedTotalCost);
        //total-cost er innertext change korbo
        const sum = convertedTotalCost + parseInt(p3.innerText) ;
        // document.getElementById('total-cost').innerText = sum ;
        setInnerText('total-cost', sum)
        // -----------------
        // const grandCost = document.getElementById('grand-total').innerText ;
        // const convertedGrandCost = parseInt(grandCost);
        // const sum2 = convertedTotalCost + parseInt(p3.innerText) ;
        // // document.getElementById('grand-total').innerText = convertedGrandCost + parseInt(p3.innerText) ;
        // setInnerText('grand-total', sum2)
        grandTotalCost('grand-total', parseInt(p3.innerText));




    

    })
}
//ei equation ta bujhi nai
function grandTotalCost(category){
    
    const totalCost = document.getElementById('total-cost').innerText ; //'total-cost'
    const convertedGrandCost = parseInt(totalCost);  //totalCost
    // const sum2 = convertedGrandCost + parseInt(value) ;
    // setInnerText('grand-total', sum2)
    setInnerText('grand-total', convertedGrandCost)

    console.log(category)
    if(category === 'Apply'){
        setInnerText('grand-total', ((convertedGrandCost * 20)/100))
    }

}

function setInnerText(id, value){
    document.getElementById(id).innerText = value  
}

function nextPageSection(){
    // const section = document.getElementById(sectionId);
    hideElementById('showing-off')
    hideElementById('seat-section')
    hideElementById('bus-card')
    hideElementById('bus-title')
    hideElementById('coupon-btn')
    hideElementById('coupon-section')
    hideElementById('header')
    showElementById('success-page')
 }

 function continueSection(){
    
    hideElementById('success-page')
    showElementById('showing-off')
    showElementById('seat-section')
    showElementById('bus-card')
    showElementById('bus-title')
    showElementById('coupon-btn')
    showElementById('coupon-section')
    showElementById('header')
 }
