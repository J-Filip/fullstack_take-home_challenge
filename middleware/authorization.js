module.exports = function authorization (req, res, next) {
  const token = req.cookies.token;
  if (token !== 'xyz0987654321') {
    return res.sendStatus(401)
  }

  next()
}