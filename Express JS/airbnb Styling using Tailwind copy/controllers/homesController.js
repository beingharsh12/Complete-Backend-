exports.addHomes = (req,res,next) => {
    // res.sendFile(path.join(__dirname, '../','views','addHome.html'));
       res.render('addHome', {pageTitle: 'Add Home', path: '/host/add-home'});
}

const homes = [];
exports.postHomes = (req,res,next) => {
    homes.push({houseName: req.body.houseName});
    console.log(req.body,req.body.houseName);
    res.render('addedHome', {pageTitle: 'Home Added', path: '/host/added-home'});
           
}
exports.homes = homes;
