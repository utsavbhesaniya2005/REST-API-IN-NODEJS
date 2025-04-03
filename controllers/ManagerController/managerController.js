const dashboard = (req, res) => {

    res.status(200).json({status : true, msg : 'Welcome To Manager Dashboard...'});
}

module.exports = {dashboard};