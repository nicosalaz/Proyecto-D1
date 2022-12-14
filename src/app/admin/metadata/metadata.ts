export const data = [
  {
    nombre: 'inventario',
    name_endpoint: 'getAllInventario',
    name_insert_endpoint: 'insertar_inventario',
    name_edit_endpoint: 'edit_inventario',
    name_delete_endpoint: 'delete_inventario',
    tabla: [
      {
        id: 0,
        nombre: 'codigo',
        nombre_endpoint: 'id',
      },
      {
        id: 1,
        nombre: 'producto',
        nombre_endpoint: 'nombre_producto',
      },
      {
        id: 2,
        nombre: 'tienda',
        nombre_endpoint: 'tienda',
      },
      {
        id: 3,
        nombre: 'cantidad unitaria',
        nombre_endpoint: 'cantidad_producto',
      },
      {
        id: 4,
        nombre: 'cantidad',
        nombre_endpoint: 'cantidad',
      },
    ],
    modal: [
      {
        tipo: 'input',
        label: 'id',
        nombre_col: 'id',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 0,
        tipo_input: 'hidden',
        nombre_endpoint: 'productos',
        nombre_form: 'id_inventario',
      },
      {
        tipo: 'select',
        label: 'nombre',
        nombre_col: 'nombre_producto',
        value: 'id',
        valor_editar: '',
        informacion: [],
        order: 0,
        tipo_input: 'select',
        nombre_endpoint: 'productos',
        nombre_form: 'id_producto',
      },
      {
        tipo: 'select',
        label: 'direccion',
        nombre_col: 'direccion',
        value: 'id',
        valor_editar: '',
        informacion: [],
        order: 1,
        tipo_input: 'select',
        nombre_endpoint: 'tiendas',
        nombre_form: 'id_tienda',
      },
      {
        tipo: 'input',
        label: 'cantidad',
        nombre_col: 'cantidad',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 2,
        tipo_input: 'number',
        nombre_endpoint: 'tiendas',
        nombre_form: 'cantidad',
      },
    ],
  },
  {
    nombre: 'tiendas',
    name_endpoint: 'tiendas',
    name_insert_endpoint: 'insertar_tienda',
    name_edit_endpoint: 'edit_tienda',
    name_delete_endpoint: 'delete_tienda',
    tabla: [
      {
        id: 0,
        nombre: 'codigo',
        nombre_endpoint: 'id',
      },
      {
        id: 1,
        nombre: 'direccion',
        nombre_endpoint: 'direccion',
      },
      {
        id: 2,
        nombre: 'localidad',
        nombre_endpoint: 'localidad',
      },
    ],
    modal: [
      {
        tipo: 'input',
        label: '',
        nombre_col: 'id',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 0,
        tipo_input: 'hidden',
        nombre_endpoint: '',
        nombre_form: 'id_tienda',
      },
      {
        tipo: 'input',
        label: 'direccion',
        nombre_col: 'direccion',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 0,
        tipo_input: 'text',
        nombre_endpoint: '',
        nombre_form: 'direccion',
      },
      {
        tipo: 'select',
        label: 'localidad',
        nombre_col: 'localidad',
        value: 'id',
        valor_editar: '',
        informacion: [],
        order: 1,
        tipo_input: 'select',
        nombre_endpoint: 'tiendas',
        nombre_form: 'id_localidad',
      },
    ],
  },
  {
    nombre: 'productos',
    name_endpoint: 'productos',
    name_insert_endpoint: 'insertar_producto',
    name_edit_endpoint: 'edit_producto',
    name_delete_endpoint: 'delete_producto',
    tabla: [
      {
        id: 0,
        nombre: 'codigo',
        nombre_endpoint: 'id',
      },
      {
        id: 1,
        nombre: 'nombre',
        nombre_endpoint: 'nombre',
      },
      {
        id: 2,
        nombre: 'cantidad',
        nombre_endpoint: 'cantidad',
      },
      {
        id: 3,
        nombre: 'precio',
        nombre_endpoint: 'precio',
      },
      {
        id: 4,
        nombre: 'categoria',
        nombre_endpoint: 'categoria',
      },
    ],
    modal: [
      {
        tipo: 'input',
        label: 'id',
        nombre_col: 'id',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 0,
        tipo_input: 'hidden',
        nombre_endpoint: '',
        nombre_form: 'id_producto',
      },
      {
        tipo: 'input',
        label: 'nombre',
        nombre_col: 'nombre',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 0,
        tipo_input: 'text',
        nombre_endpoint: '',
        nombre_form: 'nombre',
      },
      {
        tipo: 'input',
        label: 'cantidad',
        nombre_col: 'cantidad',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 1,
        tipo_input: 'text',
        nombre_endpoint: '',
        nombre_form: 'cantidad',
      },
      {
        tipo: 'input',
        label: 'precio',
        nombre_col: 'precio',
        value: '',
        valor_editar: '',
        informacion: [],
        order: 2,
        tipo_input: 'text',
        nombre_endpoint: '',
        nombre_form: 'precio',
      },
      {
        tipo: 'select',
        label: 'nombre_categoria',
        nombre_col: 'id_categoria',
        value: 'id',
        valor_editar: '',
        informacion: [],
        order: 3,
        tipo_input: 'select',
        nombre_endpoint: 'categorias',
        nombre_form: 'id_categoria',
      },
    ],
  },
];
