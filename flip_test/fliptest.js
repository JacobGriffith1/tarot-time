const card = document.querySelector('.cardInner');

/**Assign class 'flipped' when clicked. */
card.addEventListener('click', function () {
    /**API stuff goes here */
    card.classList.add('flipped');
    /**used 'add' instead of 'toggle' bc we don't want the user to flip it back over and get a new API call*/
})