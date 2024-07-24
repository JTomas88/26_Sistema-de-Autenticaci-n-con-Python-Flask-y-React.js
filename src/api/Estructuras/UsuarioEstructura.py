from random import randint

class UsuarioEstructura:
    _usuarios = []

    def __init__(self):
        self.id = _generateId(self)
        self.email = ""
        self.password = ""
        UsuarioEstructura._usuarios.append(self)
    
    def serialize (self):
        return{
            "id":self.id,
            "email":self.email,
            "password":self.password
        }
    
        #Genera el ID de manera aleatoria para el usuario 
    def _generateId(self):
        return randint(0, 99999999)
    
    def todosUsuarios():
        return [usu.serialize() for usu in UsuarioEstructura._usuarios]
    
    