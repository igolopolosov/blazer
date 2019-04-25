module.exports = {
    Feature: (text, func) => {
        console.log('Feature:', text);
        func();
    },
    Scenario: (text, func) => {
        console.log('Scenario:', text);
        func();
    }
};
