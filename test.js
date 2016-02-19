//back end
router.get("/route", function(req,res){
    request({
        url: "https://www.api.com/search?=" + req.query.currency
        /* and more code */
    })
});

//front end

$.ajax({
    url: "/route?currency=usd"
});