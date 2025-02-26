var yearStarted = new Date("2020-06-19");
var now = new Date();
// Subtracts this year from the year I began learning how to code professionally, then rounds down
var yearsExp = Math.floor(now.getFullYear() - yearStarted.getFullYear());
// Generated based on this solution: https://www.geeksforgeeks.org/javascript-application-for-random-number-generator/
// Controls randomized elements of website pages. There are usually 10 randomized results + one default in case the generation performs unexpectedly
var randomSeed = Math.floor(Math.random() * (10 - 1 + 1) + 1);

// Plugs variables into meta tag content so they the can change certain values dynamically
// T.J. Crowder on StackOverflow offered a potential solution that I experimented with below: https://stackoverflow.com/questions/18982228/how-to-add-meta-tag-in-javascript#18982299 
// Receives years of experience and creates a meta description including the years before appending it to the document head
function getMetaYearsExp(yearsExp) {
    var metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = "I am a developer with " + yearsExp + " years of educated experience. Through Sweet Citrus Designs, I offer small businesses and freelancers affordable custom websites and/or site maitenance.";
    document.head.appendChild(metaDesc);
    console.log("Years of experience applied.");
}

// Controls how Sweet Citrus talks to the user. One random greeting is loaded every time the homepage is loaded
function homepageTalk(randomSeed) {
    var citrusTalk;
    switch(randomSeed) {
        case 1:
            citrusTalk = "\"<em>♪ A B C D E F G, ♪</em> <br> Sweet Citrus is the place to be! And here you are. Welcome!\"";
            break;
        case 2:
            citrusTalk = "\"I'm Sweet Citrus! Welcome to Sweet Citrus Designs.\"";
            break;
        case 3:
            citrusTalk = "\"Miss doesn't tell you this, but I can say so many different things! Oh wait, I told you this. Welcome to Sweet Citrus Designs!\"";
            break;
        case 4:
            citrusTalk = "\"Hi there, good to see you! You've arrived at Sweet Citrus Designs.\"";
            break;
        case 5:
            citrusTalk = "\"We're all a work in progress; so is this page. Welcome to Sweet Citrus Designs!\"";
            break;

        case 6:
            citrusTalk = "\"All sweet with seldom any sour, Sweet Citrus Designs is here to serve you up a website delight!\"";
            break;

        case 7:
            citrusTalk = "\"Want a personalized webpage? You've come to the right place. Welcome to Sweet Citrus Designs!\"";
            break;

        case 8:
            citrusTalk = "\"Are you looking for something new, custom, and creative? Welcome to Sweet Citrus Designs!\"";
            break;

        case 9:
            citrusTalk = "\"New logo? New website? Editing existing ones? Welcome to Sweet Citrus Designs!\"";
            break;

        case 10:
            citrusTalk = "\"Whether you're looking for a new website or lookin to update your own, welcome to Sweet Citrus Designs!\"";
            break;

        default:
            citrusTalk ="\"Welcome to Sweet Citrus Designs!\"";
            break;
    }
    document.getElementById('citrusTalk').innerHTML = citrusTalk;
}

getMetaYearsExp(yearsExp);