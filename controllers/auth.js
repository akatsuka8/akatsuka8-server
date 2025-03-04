class AuthController {
  static async register(req, res) {
    res.send('Register');
  }
  static login(req, res) {
    res.send('Login')
  }
}

module.exports = AuthController
