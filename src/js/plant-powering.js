export const storeState = (initialState) => {
    let currentState = initialState;
    return (stateChangeFunc = state => state) => {
        const newState = stateChangeFunc(currentState);
        currentState = {...newState};
        return newState;
    };
};

const changeState = (prop) => {
    return (value) => {
        return (state) => ({
            ...state,
            [prop]: (state[prop] || 0) + value
        });
    };
};

const soil = changeState("soil");
const water = changeState("water");
const light = changeState("light");
const food = changeState("food");

// const lowFood = food(1);
export const medFood = food(2);
// const maxFood = food(3);

// const lowSoil = soil(1);
export const medSoil = soil(2);
// const maxSoil = soil(3);

// const lowLight = light(2);
export const medLight = light(4);
// const maxLight = light(6);

// const lowWater = water(1);
export const medWater = water(3);
// const maxWater = water(5);
// const ovrWater = water(-3);

// const initValues = (val1) => {
//     return (val2) => {
//         return (val3) => {
//             return (val4) => {
//                 return () => {
//                     const state1 = storeState({})(val1);
//                     const state2 = storeState(state1)(val2);
//                     const state3 = storeState(state2)(val3);
//                     const state4 = storeState(state3)(val4);
//                     return state4;
//                 };
//             };
//         };
//     };
// };

// const cactus = initValues(lowFood)(lowSoil)(lowWater)(lowLight);


// const hardPlant = storeState({water: 1, soil: 0, soil: 0})
// const mediumPlant = storeState({ water})