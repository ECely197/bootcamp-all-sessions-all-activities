async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (error) {
      return res.status(404).json("Error en el servidor");
    }
  }