

function filtrar(){
    var classList = $('#divId').attr('class').split(/\s+/);
    $.each(classList, function(index, item) {
    if (item.index_of('misMatchPercentage') != -1 ) {
        misMatchPercentage = item.split('_')[1];
        //do something
    }
});
}

$(".accordion-items").css("display", "None");