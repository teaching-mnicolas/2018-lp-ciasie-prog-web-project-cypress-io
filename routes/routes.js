module.exports = function(app) {

    app.get('/', (req, res) => {
        res.render('home.twig', { email: req.session.email });
    });

    app.get('/login', (req, res) => {
        res.render('login.twig', { email: req.session.email });
    });

    app.post('/login_attempt', (req, res) => {
        req.session.email = req.body.email;
        req.session.password = req.body.password;
        res.redirect('/');
    });

    app.get('/logout', (req, res) => {
        if (req.session.email !== undefined) {
            req.session.destroy();
        }
        res.redirect('/');
    });
}