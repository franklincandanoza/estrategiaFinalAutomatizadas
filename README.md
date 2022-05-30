# Pruebas Automatizadas - Entrega Final

## Integrantes del grupo
- Cristian Agudelo (c.agudeloh@uniandes.edu.co)
- David Hidalgo (d.hidalgo@uniandes.edu.co)
- Frank Candanoza (f.candanoza@uniandes.edu.co) 

## Estrategia Final de Pruebas
[estrategia-pruebas_finalv1.pdf](https://github.com/franklincandanoza/estrategiaFinalAutomatizadas/files/8795477/estrategia-pruebas_finalv1.pdf)



## Video presentación Final

https://drive.google.com/file/d/1h741hU3NtXRQlyBx5u70vJoc6EQvubHr/view?usp=sharing


## Levantar la aplicación a probar 
### Instalar Ghost usando docker
Para el diseño y ejecución de estas pruebas,se utiliza la version de ghost 4.44 que ya tiene imagénes definidas en DockerHub. Con el siguiente comando se podrían descargar y ejecutar el contenedor teniendo como requisito que debe existir docker instalado previamente en la máquina.

```
docker run -d  -e url=http://localhost:3003 -p 3003:2368 ghost:4.44.0
docker run -d  -e url=http://localhost:2368 -p 3005:2368 ghost:3.41.1
```

### Crear usuario Ghost
Despues de desplegar la aplicacion bajo pruebas se debe crear un usuario en http://localhost:3003/ghost con las siguientes credenciales:

```
user-> robotpruebas@uniandes.edu.co
password-> RobotMISO..20&
```


## Inventario de pruebas manuales / exploratorias
El inventario de pruebas exploratorias se puede encontrar en el siguiente [link](https://docs.google.com/spreadsheets/d/1PBJi9k62ba4eBXOoQGiPel9dsMm7tYdP/edit#gid=1624035705)


# HERRAMIENTAS DE PRUEBAS AUTOMATIZADAS 

## Cypress

### Instalar Cypress
```
npm install -g cypress
```

## Ejecuciòn de pruebas con Cypress

Para correr las pruebas con Cypress ubicarse sobre la carpeta Pruebas/cypress y luego ejecutar:

### Para ejecutar pruebas de reconocimiento con monkeys
```
cypress run --headed --config-file smart-monkey-config.json
```

### Para ejecutar pruebas E2E de Ghost
```
cypress run --config-file cypress_ghost_4.44_e2e.json --headed
```

### Para ejecutar pruebas de validaciòn de datos aleatorios de Ghost
```
cypress run --config-file cypress_ghost_4.44_validacion_datos_aleatorios.json --headed
```

### Para ejecutar pruebas de validaciòn de datos usando pool apriori:
```
cypress run --config-file cypress_ghost_4.44_validacion_datos_pool_apriori.json --headed
```

### Para ejecutar pruebas de validaciòn de datos usando pseudo aleatorios:
```
cypress run --config-file cypress_ghost_4.44_validacion_datos_pseudo_aleatorio.json --headed
```


### Pruebas RIPuppet
Para ejecutar las pruebas seguir los siguientes comandos

```
cd RI_Puppet
npm install
node index.js
```



## KRAKEN

### Instalar Kraken
```
cd Pruebas/kraken

dentro de directorio ejecutar
npm install adb
npm install assertthat
npm install chai
npm install kraken-node
npm install fs
npm install util
``` 

### Ejecutar pruebas con Kraken

Ingresar al directorio de Kraken y despues ejecutar los binarios locales
```
./node_modules/kraken-node/bin/kraken_node gen
./node_modules/kraken-node/bin/kraken_node run
```

## Regresión Visual lo pueden ejecutar para kraken ubicándose en la raiz del proyecto y ejecutando los siguientes comandos. ( se deben correr primero las pruebas de Kraken)
```
cd Pruebas/resemble
npm install
node compare_regression.js ../kraken/reports/3.41 ../kraken/reports/4.44
```
