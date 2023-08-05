/*
    The router code was taken from this tutorial:
    video - https://www.youtube.com/watch?v=JmSb1VFoP7w
    repository - https://github.com/thedevdrawer/spa-routing
*/

document.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches(".nav-link")) {
        return;
    }
    event.preventDefault();
    route();
})

const routes = {
    "/": {
        name: "regular",
        template: "regular.html",
        title: "Regular plates"
    },
    "/public": {
        name: "public",
        template: "public.html",
        title: "Public plates"
    },
    "/military": {
        name: "military",
        template: "military.html",
        title: "Military plates"
    },
    "/diplomatic": {
        name: "diplomatic",
        template: "diplomatic.html",
        title: "Diplomatic plates"
    },
    "/emergency": {
        name: "emergency",
        template: "emergency.html",
        title: "Emergency plates"
    },
    "/special": {
        name: "special",
        template: "special.html",
        title: "Special plates"
    }
}

function route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
}

async function locationHandler() {
    const location = window.location.pathname;
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location];
    const html = await fetch("./src/views/" + route.template).then((response) => response.text());
    document.getElementById("router-view").innerHTML = html;
    document.title = "Vehicle Plates - " + route.title;
}

window.onpopstate = locationHandler;
window.route = route;
locationHandler();