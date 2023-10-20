// regular info here
function openNav() {
    document.getElementById("side_navbar").hidden = false;
}

function closeNav() {
    document.getElementById("side_navbar").hidden = true;
}


//API stuff down here
var APIKey = "MfLnohmWCj6R40fc9WQAAK0QbEuoLuX9VZSXBm9h";

var api_url = "https://api.data.gov/ed/collegescorecard/v1/schools?";


year = "latest"
fields = {
    "School Name": "school.name",
    "School ID": "id",
    "School State": "school.state",
    "School Ownership" : "school.ownership"
}

query_url = "https://api.data.gov/ed/collegescorecard/vl/schools.json?school.degrees_awarded.predominant=2,3_fields=id,school.name,2013.student.size";
//p = { "school.operating": "1", "2015.academics.program_available.assoc_or_bachelors": "true", "2015.student.size__range": "1..", "school.degrees_awarded.predominant__range": "1..3", "school.degrees_awarded.highest__range": "2..4", "id": "240444", "api_key": APIKey };

fetch(query_url).then(
    function (response) {
        return response.json();
    }
).then(function (jsonData) {

});



