// function updateClock() {
//     const clockElement = document.getElementById('clock');
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
    
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     clockElement.textContent = timeString;
// }

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Call the function once to display clock immediately
// updateClock();


function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call once to display the clock immediately
updateClock();
