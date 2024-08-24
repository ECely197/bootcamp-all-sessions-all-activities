function manipularReq (req, res, next){
    req.nuevaPropiedad = "Esto es un valor que antes no existia";
    next();
  };

  export default manipularReq;