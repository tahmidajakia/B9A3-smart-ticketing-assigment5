const allBtn = document.getElementsByClassName("add-btn");
let seat = 40;
let seatCount = 0;
// let totalCost = 0;
// let mainCost = 550;



for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        seat = seat - 1;
        const seatName = e.target.innerText;
        const selectedSeat = document.getElementById("selected-seat");
        

        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";

        const p = document.createElement("p");
        p.innerText = seatName;


        const p2 = document.createElement("p");
        p2.innerText = "Economy";


        const p3 = document.createElement("p");
        p3.innerText = 550;



        selectedSeat.appendChild(li);
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);


        const price = 550;
        const totalCost = document.getElementById("total-cost").innerText;

        const convertedTotalCost = parseInt(totalCost);
        const cost = convertedTotalCost + parseInt(price);
        setInnerText("total-cost", cost);



        e.target.setAttribute("disabled", false);
        e.target.style.background = "#1DD100";




        // const bdtCost = cost;
        // setInnerText("bdt-cost", bdtCost);


        setInnerText("total-seat", seat);
        seatCount = seatCount + 1;
        setInnerText("seat-count", seatCount);




        const applyBtn = document.getElementById("apply-btn");
        applyBtn.addEventListener("click", function () {
            const inputField = document.getElementById("input-field").value;
            const couponCode = inputField.split(" ").join("");


            if (seatCount >= 4) {
                if (couponCode === "NEW15") {

                } else {
                    alert("Invalid Coupon");
                }

            } else {
                alert("Please buy at least 4 tickests!");
            }


        });






    });


}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    document.getElementById(id).innerText = value;
    document.getElementById(id).innerText = value;

}



function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');

}
function showElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');

}
function next(){
    hideElementById("header-section")
    hideElementById("section-first")
    hideElementById("section-second")
    hideElementById("footer-screen")
    showElementById("modal-section")

}

// function play(){
//     const headerScreen = document.getElementById("header-section");
//     headerScreen.classList.add('hidden');
    
// }
// function play(){
//     const sectionFirst = document.getElementById("section-first");
//     sectionFirst.classList.add('hidden');
    
// }
// function play(){
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');
    
// }
// function play(){
//     const footerSection = document.getElementById("footer-screen");
//     footerSection.classList.add('hidden');
    
// }



