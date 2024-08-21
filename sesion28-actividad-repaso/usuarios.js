const users = [
  { id: 1, name: "Rick", lastname: "Sahcnez", age: "70" },
  { id: 2, name: "Morty", lastname: "Smith", age: "15" },
  { id: 3, name: "Summer", lastname: "Smith", age: "17" },
  { id: 4, name: "Beth", lastname: "Smith", age: "34" },
  { id: 5, name: "Jerry", lastname: "Smith", age: "35" },
];

function bienvenida(req, res) {
  return res.json("Bienvenido a la API de Rick y Morty");
}

function verLista(req, res) {
  return res.json(users);
}

function addUser(req, res) {
  if (req.query.id && req.query.name && req.query.lastname && req.query.age) {
    const newUser = {
      id: Number(req.query.id),
      name: req.query.name,
      lastname: req.query.lastname,
      age: Number(req.query.age),
    };
    users.push(newUser);
    return res.json(users);
  }
  return res.json(
    "Para crear nuevo usuario son necesarios todos los datos (id, nombre, apellido, edad"
  );
}

function searchUser(req, res) {
  const nameParam = req.params.name;
  for (const user of users) {
    if (user.name === nameParam) {
      return res.json(user);
    }
  }
  return res.json("No se ha encontrado ningun usuario con ese nombre");
}

export { bienvenida, verLista, addUser, searchUser };
export default users;
