## Authors

- [@Mexil77](https://github.com/Mexil77)

## Usage/Examples

git clone git@github.com:Mexil77/dialogDesignSystem.git

cd dialogdesignsystem

npm install react-icons

npm start

## Sobre el proyecto

Este pequeño proyecto de despliegue de modals se realizo con react, html, sass y js.
La eleccion de estas tecnologias no gue mas que por mera comodidad a la hora de realizarlo y volverlo escalable para quien decidiera agregar mas y contribuir al proyecto.

## Distribucion

Las carpetas importantes serian 3, las 3 dentro de src y son las siguientes:

- Components
- CSS
- Obj

### Components

Aqui encontraremos todos los componentes de react que construyen la aplicacion, en este caso solo serian 2, el Selecter y Modal.

Selecter como componente padre se encarga del estado, es decir guardar la informacion del Modal a desplegar y cuando debe ser desplegado.

Modal por otro lado solo recive la informacion que Selecter le mande para visualizarla.

### CSS

Aqui se encontraran los estilos css de todos los componentes con ficheros de igual nombre solo que con extencion .css o .scss

### Obj

En esta carpeta encontraremos los ficheros con los objetos JSON necesarios para deslpegar tanto los botenes triger como los modal de cada uno de ellos.

Lo unico que debes hacer es crear un objeto nuevo en el array con la siguiente estructura:

```
{
    icon: <"Nombre del icono importado de react icons" />,
    type: "Numero de la posicion en el array mas 1",
    class: "Una de las siguientes: 'warningIcon', 'succesIcon' o 'dangerIcon'",
    title: "titulo del modal",
    message: "mensaje del modal",
    btnTriget: //Si deseas que tu modal no tenga boton que lo lance, deja esta propiedad vacia, es decir '{}'
    {
        title: "Titulo del boton que lanzara el modal",
        class: "Una de las siguientes: 'selecter_alert', 'selecter_success', 'selecter_danger' o 'selecter_fanci'",
    }
    btns: //Si deseas que tu modal no tenga botones, solo deja este array vacio, es decir: '[]'
    [
        {
            type: "0 para fondo blanco, 1 para fondo relleno o boton activo",
            message: "Texto dentro del boton",
            function: "Numero de la posicion en el switch de la funcion 'selectFunction' que llame a la fucion deseada para realizar con este boton",
        }
    ]
}
```
