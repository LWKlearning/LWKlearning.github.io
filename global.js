const options = [
    {
        title: "Google Drive",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"
    },
    {
        title: "Clever",
        icon: "https://resources.finalsite.net/images/f_auto,q_auto/v1689877141/mooreschoolscom/emadd6nvplrnh1vsswjf/Clever-Logo.jpg"
    },
    {
        title: "Google Classroom",
        icon: "https://www.eschoolnews.com/files/2018/04/googlec.jpg"
    }
];

// pick one of the three randomly
const choice = options[Math.floor(Math.random() * options.length)];

function apply() {
    // update title
    document.title = choice.title;

    // update icon
    let favicon = document.querySelector("link[rel~='icon']");
    if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        document.head.appendChild(favicon);
    }
    favicon.href = choice.icon;
}

// apply instantly + every 0.5s
apply();
setInterval(apply, 500);

