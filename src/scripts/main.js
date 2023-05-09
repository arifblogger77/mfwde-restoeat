import "./components/app-bar";
import "./components/hero-element";
import "./components/result-list";
import "./components/result-item";
import "./components/footer-element";
import DATA from "../DATA.json";

const main = () => {

    const hamburgerButtonElement = document.querySelector("#hamburger")
    const drawerElement = document.querySelector("#drawer")
    const heroElement = document.querySelector(".hero")
    const mainElement = document.querySelector("main")

    hamburgerButtonElement.addEventListener('click', event => {
        drawerElement.classList.toggle('open');
        event.stopPropagation();
    })

    mainElement.addEventListener('click', event => {
        drawerElement.classList.remove('open');
        event.stopPropagation();
    })

    heroElement.addEventListener('click', event => {
        drawerElement.classList.remove('open');
        event.stopPropagation();
    })

    const renderAll = (responses) => {
        const resultList = document.querySelector("result-list");
        resultList.results = { results: responses };
    }


    renderAll(DATA);

};

export default main;