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


    document.getElementById('newPlant').onclick = function() {
        const plantName = document.getElementById('plant').value;
        const plantSelect = document.createElement("option");
        plantSelect.innerText = plantName;
        plantSelect.setAttribute("value", plantName);
        const myPlants = document.getElementById("myPlants");
        storeLocalState(plantName)(stateControl());
        myPlants.append(plantSelect);
    };
    document.getElementById('soil').onclick = function() {
        const accessedPlant = document.getElementById("myPlants").value;
        const newState = storeState(getLocalStorage(accessedPlant))(medSoil);
        document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
        storeLocalState(accessedPlant)(newState);
    };
    document.getElementById('water').onclick = function() {
        const newState = stateControl(medWater);
        document.getElementById('water-value').innerText = `Water: ${newState.water}`;
    };
    document.getElementById('feed').onclick = function() {
        const newState = stateControl(medFood);
        document.getElementById('food-value').innerText = `Food: ${newState.food}`;
    };
    document.getElementById('light').onclick = function() {
        const newState = stateControl(medLight);
        document.getElementById('light-value').innerText = `Light: ${newState.light}`;
    };

    document.getElementById('show-state').onclick = function() {
        const currentState = stateControl();
        document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
        document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
        document.getElementById('food-value').innerText = `Food: ${currentState.food}`;
        document.getElementById('light-value').innerText = `Light: ${currentState.light}`;
    };
};