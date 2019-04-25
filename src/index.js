const getBlock = (blockName, newline = false) => (text, func) => {
    if (newline) console.log();
    console.log(blockName + ':', text);
    func();
};

module.exports = {
    Feature: getBlock('Feature', true),
    Scenario: getBlock('Scenario'),
    Example: getBlock('Example'),
};
