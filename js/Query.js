$(function () {
    Load();
})

function Load() {

    url = "Service.aspx/Load",
    $.ajax({
        type: "POST",
        url: url,
        //        data: "{Name: '" + "test1"
        //        + "' }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: true,
        async: false,

        success: function (response) {
            window.top.News = response.d;
            var News = window.top.News;
            Query(News, "");
        },
        error: function () {
            alert("ERROR");
        }
    });
}

function btn1Q() {
    Query(window.top.News, $('#txt1').val());
}

function Query(News, divider) {
    $('#st').empty();
    $('#st').append('<table>');
    if (News.code == "0") {
        for (var i = 0; i < News.ndNewsDetail.length; i++) {
            if (News.ndNewsDetail[i].Title.indexOf(divider) != -1) {
                $('#st').append('<tr><td>');
                $('#st').append('<a href="https://money.udn.com/' + News.ndNewsDetail[i].Url + '">' + News.ndNewsDetail[i].Title + '</a>');
                $('#st').append('</td></tr>');
            }
        }
        $('#st').append('</table>');
    }
    else
        alert("ERROR, Call Gary");
}