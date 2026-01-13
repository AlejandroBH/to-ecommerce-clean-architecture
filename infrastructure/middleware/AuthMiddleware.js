class AuthMiddleware {
  constructor(authService) {
    this.authService = authService;
  }

  authenticate(req, res, next) {
    try {
      const token = req.headers.authorization?.replace("Bearer ", "");

      if (!token) {
        return res.status(401).json({ error: "Token requerido" });
      }

      const user = this.authService.verifyToken(token);
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ error: "Token inválido" });
    }
  }
}
