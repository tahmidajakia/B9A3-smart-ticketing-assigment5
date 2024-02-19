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
        btn.classList.add('bg-[#1DD100]');

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

        const convertedTotalCost=parseInt(totalCost);
        document.getElementById("total-cost").innerText = convertedTotalCost + parseInt(price);


        
        setInnerText("total-seat", seat);
        seatCount = seatCount + 1;
        setInnerText("seat-count", seatCount);
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
    document.getElementById(id).innerText = value;

}

