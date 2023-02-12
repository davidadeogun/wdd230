//JS Display Msg
const d = new Date();
let day = d.getDay();

let displayMsg = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

let Message = function() {
    if (day ==  1 || day == 2) {
        document.querySelector("#group-msg").textContent = displayMsg;
    }
    
};

Message();