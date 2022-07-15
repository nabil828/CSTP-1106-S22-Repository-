function process_res(data) {
    console.log(data);
    for (i = 0; i < data.results.length; i++){
        $("#result").append(JSON.stringify(data.results[i].original_title) + "<br>")
        $("#result").append(JSON.stringify(data.results[i].overview) + "<br><br>")
        $("#result").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">`)
    }
    //todo
}

function search_() {
    y = $("#y").val()
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&query=${y}&page=1&include_adult=false`,
        type: "get",
        success: process_res
    })
}
function setup() {
    $("#x").click(search_)
}


$(document).ready(setup)