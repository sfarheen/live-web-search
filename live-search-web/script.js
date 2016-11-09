function show() {

    //get the text the user is typing in search field
    //obtain the value from search text field, with id = search 
    var searchField = $('#search').val();

    //To search for the text, use javascript function - search()
    //The search() method searches a string for a specified value, and returns the position of the match.
    //The search value can be string or a regular expression.
    //This method returns -1 if no match is found.
    //Regular expressions are powerful as they as do case insensitive search and more powerful search

    //i => case insensitive search
    var myExp = new RegExp(searchField, "i")
    /*
    //load data from json file
    $.getJSON("http://localhost:55218/api/getdata", function (data) {

        var output = '<ul class= "searchresults">';
        $.each(data, function (key, val) {

            //search for the the user entered search criteria in the name and bio of speakers.
            if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.shortname + '_tn.jpg"  alt="' + val.name + '" />';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }

        });
        output += '</ul>';

        $('#update').html(output);
    });*/

    $.ajax(
        {
            url: "http://localhost:55218/api/getdata",
            cache: false
        }).done(function (data) {

        var output = '<ul class= "searchresults">';
        $.each(data, function (key, val) {

            //search for the the user entered search criteria in the name and bio of speakers.
            if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.shortname + '_tn.jpg"  alt="' + val.name + '" />';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }

        });
        output += '</ul>';

        $('#update').html(output);
    });
}

//var request = new XMLHttpRequest();
//request.open('GET', 'data.json', true);
//request.send();
//request.onreadystatechange = function () {
//    if (this.readyState == 4 && this.status == 200) {
//console.log(this.responseText);
//you need to parse your data as JSON format 
//var obj = JSON.parse(this.responseText);

