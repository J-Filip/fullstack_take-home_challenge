//  #Solution #1 - using cookies

module.exports = function login (req, res) {
  const { email, password } = req.body

  if (
    email === 'optimus.prime@autobots.com' &&
    password === 'validPassword1234!'
  ) {
    const token = "xyz0987654321";
        return res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .redirect("/encode");
  }

  return res.status(401).send('Login failed.')
}




