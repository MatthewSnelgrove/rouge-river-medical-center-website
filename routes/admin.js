const router = require('express').Router();

const crypto = require('crypto')
const OAuth = require('oauth-1.0a')
 
const clientKey = process.env.CLIENT_KEY;
const clientSecret = process.env.CLIENT_SECRET;
console.log(clientKey + "" + clientSecret);

const oauth = OAuth({
    consumer: { key: clientKey, secret: clientSecret },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
})


// //Authenticate or redirect to Oscar login page
// router.route('/').get((req, res) => {
//     //Get from Oscar
// });

//call with authorization header
router.route('/admin').get((req, res) => {
    res.send('54321');
    res.redirect('http://google.com');
    // const url = 'http://rouge-river-medical-centre/oscar_15/ws/services/providerService/providers_json';
    // oauth.toHeader();
    // res.redirect('http://rouge-river.kai-oscar.com/oscar/ws/oauth/initiate');
})

//

module.exports = router;
