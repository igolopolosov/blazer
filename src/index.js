const Feature = (text, func) => {
    console.log('Feature:', text);
    func();
    console.log();
};

const getScenarioBlock = (blockName) => (text, func) => {
    console.log(blockName + ':', text);
    func();
};

module.exports = {
    Feature: Feature,
    Scenario: getScenarioBlock('Scenario'),
    Example: getScenarioBlock('Example'),
    Rule: getScenarioBlock('Rule'),
};
