# Pruebas Automatizadas - Entrega Final

## Integrantes del grupo
- Cristian Agudelo (c.agudeloh@uniandes.edu.co)
- David Hidalgo (d.hidalgo@uniandes.edu.co)
- Frank Candanoza (f.candanoza@uniandes.edu.co) 

## Levantar la aplicación a probar 
### Instalar Ghost usando docker
Para el diseño y ejecución de estas pruebas,se utiliza la version de ghost 4.44 que ya tiene imagénes definidas en DockerHub. Con el siguiente comando se podrían descargar y ejecutar el contenedor teniendo como requisito que debe existir docker instalado previamente en la máquina.

```
docker run -d  -e url=http://localhost:3003 -p 3003:2368 ghost:4.44.0

```
### Crear usuario Ghost
Despues de desplegar la aplicacion bajo pruebas se debe crear un usuario en http://localhost:3003/ghost con las siguientes credenciales:

```
user-> robotpruebas@uniandes.edu.co
password-> RobotMISO..20&
```

## ¿Como correr las pruebas?


### Pruebas E2E

Para correr las prubas de E2E se deben seguir los siguientes pasos:

#### Instalar Cypress
```
npm install -g cypress
```

#### Correr las pruebas E2E
Usar los siguientes comandos empezando desde la raiz del proyecto:
```
cd e2e
cypress run --headed 
```

### VRT 


### Escenarios de validación de datos.

