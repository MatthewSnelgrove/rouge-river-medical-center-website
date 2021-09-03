const router = require('express').Router();

router.route('/').get((req, res) => {
    //Load webpage?
    res.send('12345');
    // res.render(homepage);
});

module.exports = router;