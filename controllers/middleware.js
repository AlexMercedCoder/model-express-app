// middleware checks if username is property is set in the session
// this helps determine if the user is logged in
// if not, redirects to login page
function auth(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.redirect("/user/login");
  }
}

module.exports = { auth };
