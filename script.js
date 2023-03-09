// Set the number of stars we want
var count = 250;
    
// Get the container element
var container = document.getElementById('stars');

// Loop through the number of stars we want
for (var i = 0; i < count; i++) {
    // Create a new star element
    var star = document.createElement('div');
    star.className = 'star';

    // Randomly position the star within the container
    var x = Math.floor(Math.random() * container.clientWidth);
    var y = Math.floor(Math.random() * container.clientHeight);
    star.style.left = x + 'px';
    star.style.top = y + 'px';

    // Add the star to the container
    container.appendChild(star);
}