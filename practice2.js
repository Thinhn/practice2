
//coding the slick nav
//media query the btn
//just going to add class to unhide the collapse btn
//do the js
//get the btn
const nav = document.querySelector("#btn");
//get the main nav
const mainNav = document.querySelector("#navigation");
//create a div 
const div = `<div id = "navBelow" class = "hideBelowNav">
    <ul>
        <li><a href="#sect2">Work</a>
            <ul class="hideNav">
                <li><a href="#">Currently Working</a></li>
            </ul>
        </li>
        <li><a href="#sect1">About</a></li>
    </ul>
</div>`;
//Contextual Fragment it
const fragment = document.createRange().createContextualFragment(div);
//insert adjacent
mainNav.insertAdjacentElement("afterend", fragment.querySelector("#navBelow"));
//create a class 
function functionName() {
    const div2 = document.querySelector("#navBelow")
    div2.classList.toggle("hideBelowNav");
}
//add event listener
nav.addEventListener("click", functionName);
