const { Feature, Scenario, Example } = require('../src');

Feature('Blog', () => {
    Scenario('When user enters the blog page it show all available blog posts', () => {
        const a = 1;
        console.log(a);
    });
});

Feature('Music', () => {
    Example('When user enters the music page it show all music albums', () => {
        const a = 123;
        console.log(a);
    });
});
