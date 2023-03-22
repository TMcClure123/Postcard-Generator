let states = document.getElementById('states');
states.onchange = function() {
    //Logs the number of the state selected
    console.log('states index:' + states.selectedIndex);
    //changes based on the chosen state
    console.log('states index:' + states.options[states.selectedIndex].text);
    //adds image link to console along with the state
    console.log('img/' + states.value + '@2x.jpg');

    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)';

    document.getElementById('greeting').innerHTML = 'greetings from'; 
    
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
}
