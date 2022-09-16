### Paso 1

Instalación de Python 3

### Paso 2

Instalacion del gestor de paquetes pip

### Paso 3

Verificacion de la version del gestor de paquetes pip
```pip -V```

### Paso 4

Instalacion de gestor de dependencias local pipenv, el cual sirve para aislar los proyectos en entornos privados permitiendo instalar paquetes por proyecto.

```pip install pipenv```

### Paso 5

Creamos nuestro directorio que contendra el codigo fuente. Una vez creada la carpeta principal del proyecto se ejecuta el comando (ubicandonos dentro de la carpeta creada) ```pipenv --three``` el cual creara nuestro entorno virtual. 

En este proceso se generara el archivo ```pipfile``` que tendra los detalles del proyecto como la version de python y los paquetes necesarios.

### Paso 6

Ahora que tenemos nuestro entorno virtual creado ejecutamos el comando ```pipenv install flask``` con el que podremos instalar la dependencia flask unicamente para nuestro proyecto. La ejecucion de este comando generara el archivo ```pipenv.lock``` que contiene la informacion de las versiones utilizadas para cada paquete dentro del proyecto.

### Paso 7

Agregar los archivos python y estructurarlo por modulos.

### Paso 8

Para ejecutar nuestro servidor flask dentro del entorno virtual debe ejecutarse el comando ```pipenv run flask --debug run -h 0.0.0.0``` con el que indicamos que levante el servidor flask, en modo debug para visualizar cambios en caliente y evitar reiniciar el servidor por cada cambio que se realice; y con el parametro ```-h 0.0.0.0``` con el que indicamos que aceptara las peticiones desde cualquier origen.
