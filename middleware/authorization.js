module.exports = function authorization (req, res, next) {
  console.log(req.cookies);
  const token = req.cookies.token;
  if (token !== 'xyz0987654321') {
    return res.sendStatus(401)
  }

  next()
}