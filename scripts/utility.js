const allBtn = document.getElementsByClassName("add-btn");
let seat = 40;
let seatCount = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        seat = seat - 1;
        document.getElementById("total-seat").innerText = seat;
        seatCount = seatCount + 1;
        document.getElementById("seat-count").innerText = seatCount;
        btn.classList.add('bg-[#1DD100]');

        

    });
}