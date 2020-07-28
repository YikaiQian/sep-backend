

const routes = (app) => {
    app.route('/login')
        .post();

    app.route('register')
        .post();

    app.route('logout')
        .put();


    app.route('sepSession')
        .get()
        .post();


    app.route('toAttendSession')
        .get();

    app.route('toAttendSession/:sepSessionId')
        .post()
        .delete()
}
