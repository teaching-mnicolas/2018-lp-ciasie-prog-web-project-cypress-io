module.exports = function(app) {

    app.get('/', (req, res) => {
        console.log(req.session.email);
        if (req.session.email !== undefined) {
            console.log('ca passe if');
            res.render('home.twig', { email: req.session.email });
        } else {
            res.render('home.twig', { email: 'undefined' });
        }
    });

    app.get('/login', (req, res) => {
        res.render('login.twig');
    });

    app.post('/login_attempt', (req, res) => {
        req.session.email = req.body.email;
        req.session.password = req.body.password;
        res.redirect('/');
    });

    app.get('/logout', (req, res) => {
        req.session.destroy();
        res.redirect('/');
    });
}