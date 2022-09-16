const contactos= require('./SchemaContactos');

module.exports={
//buscar contactos
   async read(req,res){
    const contactosList = await contactos.find();

    return res.json(contactosList);
    },
// crear contacto
   async create(req,res) {
  
     const{name,surname,phone,email} = req.body;
     if(!name || !surname || !phone || !email){
      return res.status(400).json({error: "precisa prencher os campos!" })
     }
     
     
     const cretedContacto= await contactos.create({
        name,
        surname,
        phone,
        email
      
     });
     return res.json(cretedContacto);
   
    },
    
    // borrar contacto
     async delete(req, res){
    const { id }= req.params;
    const deletarContacto= await contactos.findOneAndDelete({ _id: id });
    if (deletarContacto){
      return res.json(deletarContacto);
    }
return res.status(401).json({error:'no fui encontrado o registro'})
    },

//editar contacto
    async update(req, res){
      const { id }= req.params;

      const{name,surname,phone,email }= req.body;
      const Contacto= await contactos.findOne({ _id: id });
    if (name, surname,phone,email){
      
   Contacto.name= name,
   Contacto.surname= surname,
   Contacto.phone= phone,
   Contacto.email= email

   await Contacto.save()
    }
    return res.json(Contacto);
      },
      //buscar Grupos

      async read(req,res){
        const gruposList = await grupos.find();
    
        return res.json(gruposList);
        }
      
    }


