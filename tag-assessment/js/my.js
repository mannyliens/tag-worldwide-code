
$(document).ready(function () {
    $("#country").change(function () {
        document.getElementById("dd2").style.display = "block";
        idx = $("#country")[0].selectedIndex - 1
        $("#cities").html($(".city-container div").eq(idx).html())
    });
});

function tabToggle(evt, tabValue) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabValue).style.display = "block";
    evt.currentTarget.className += " active";
}
