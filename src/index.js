import { medSoil, medLight, medWater, medFood, storeState} from "./js/plant-powering";
import "./css/styles.css";

const stateControl = storeState({});

const storeLocalState = (name) => {
    return (state) => {
        localStorage.setItem(name, JSON.stringify(state));
    };
};

const getLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
};

window.onload = function() {
    
    const printPlants = (name) => {
        const plantSelect = document.createElement("option");
        plantSelect.innerText = name;
        plantSelect.setAttribute("value", name);
        const myPlants = document.getElementById("myPlants");
        if (!localStorage.name) {
            storeLocalState(name)(stateControl());
        }
        myPlants.append(plantSelect);
    };

    const printLocalStorage = () => {
        for (let i = 0; i < localStorage.length; i++) {
            const plantName = localStorage.key(i);
            printPlants(plantName);
        }
    };

    document.getElementById('newPlant').onclick = function() {
        const plantName = document.getElementById('plant').value;
        printPlants(plantName);
    };

    document.getElementById('soil').onclick = function() {
        const accessedPlant = document.getElementById("myPlants").value;
        const newState = storeState(getLocalStorage(accessedPlant))(medSoil);
        document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
        storeLocalState(accessedPlant)(newState);
    };
    document.getElementById('water').onclick = function() {
        const accessedPlant = document.getElementById("myPlants").value;
        const newState = storeState(getLocalStorage(accessedPlant))(medWater);
        document.getElementById('water-value').innerText = `Water: ${newState.water}`;
        storeLocalState(accessedPlant)(newState);
    };
    document.getElementById('feed').onclick = function() {
        const accessedPlant = document.getElementById("myPlants").value;
        const newState = storeState(getLocalStorage(accessedPlant))(medFood);
        document.getElementById('food-value').innerText = `Food: ${newState.food}`;
        storeLocalState(accessedPlant)(newState);
    };
    document.getElementById('light').onclick = function() {
        const accessedPlant = document.getElementById("myPlants").value;
        const newState = storeState(getLocalStorage(accessedPlant))(medLight);
        document.getElementById('light-value').innerText = `Light: ${newState.light}`;
        storeLocalState(accessedPlant)(newState);
    };

    const showStats = (name) => {
        const currentState = getLocalStorage(name);
        document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
        document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
        document.getElementById('food-value').innerText = `Food: ${currentState.food}`;
        document.getElementById('light-value').innerText = `Light: ${currentState.light}`;
    };

    document.getElementById("myPlants").onchange = () => {
        const accessedPlant = document.getElementById("myPlants").value;
        showStats(accessedPlant);
    };

    printLocalStorage();
};