module.exports = function(app) {

    app.get('/', function(req, res) {
        res.json({
            now: new Date().toISOString()
        });
    });

};
