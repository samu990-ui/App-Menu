const SHEET_ID = "1YHj4Lj8lqcr2Ta417fKjeVlnE3e-_42vBZtJ9z8Sy8M";

const ACCESS_TOKEN = "ya29.a0Aa4xrXO94UqChoMLjvcywwH_zjlTTObnJHmIsLxueeb124sgkTgGgjPO0pZOqAOG4YvPOgFY3HToD-jFC77514CYIQdO24fdgnDheO4s3FzMDk9E7GYMcqC18wZrq6uTqFEZ5eAEYT_pBxNObr-SKxU7BdURaCgYKATASARESFQEjDvL9LSlmW6n9bJoqbw-qI9wpIg0163";


fetch(
    // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A2:C`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  //esperamos el response
).then(function(response){
    response.json().then(function(data){
        const values = data.values;
        // Obtenemos el elemento del dom
        const lista = document.getElementById("lista-menu");
        for (var i = 0; i < values.length; i++) {

            // Div que va a contener los datos del producto
            const producto = document.createElement("div");
            producto.className =  "menu-item";
    
            // Nombre del producto
            const itemProducto = document.createElement("span");
            itemProducto.className = "item producto";
            itemProducto.innerHTML = values[i][0]; 

            //Descripcion
            const itemDescripcion = document.createElement("span");
            itemDescripcion.className = "item descripcion";
            itemDescripcion.innerHTML = values[i][1];
    
            // Precio
            const itemPrecio = document.createElement("span");
            itemPrecio.className = "item precio";
            itemPrecio.innerHTML = values[i][2];
    
            // Agregamos todos los elementos al div de producto
            producto.appendChild(itemProducto);
            producto.appendChild(itemDescripcion);
            producto.appendChild(itemPrecio);
    
            // Agregamos el producto a la lista
            lista.appendChild(producto);
        }
    })
})