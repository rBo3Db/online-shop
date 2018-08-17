var timeoutJobId = 0;
var partOfName;
$('.search').on('input', function() {

        if (timeoutJobId && timeoutJobId !==0)
        {
            clearTimeout(timeoutJobId);
        }  

            partOfName = $(this).val();
            if (partOfName == "" || partOfName == " ") {
                return;
            };    
        timeoutJobId = setTimeout(viewResult, 5000);
});
function viewResult() {
    console.log('viewResult : ' + partOfName);
    partOfName.match = 
}