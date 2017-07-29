/* globals $ */

$(function() {
    fetch('/categories')
        .then((res) => {
            return res.json();
        })
        .then((categories) => {
            // const categories = ['action', 'morning', 'work'];

            const names = categories.map((cat) => cat.name);
            $('#autocomplete').typeahead({ source: names });
        });
});
