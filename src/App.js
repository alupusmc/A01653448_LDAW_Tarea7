import React from "react";

import "./App.css";
import Button from "./boton/boton";
import ButtonFilter from "./filtro/filtro";
import RangeFilter from "./rangeFilter/rangeFilter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.forma = React.createRef();
    this.color = React.createRef();
    this.opacidad = React.createRef();
    this.corte = React.createRef();
    this.size = React.createRef();
    this.precio = React.createRef();

    this.state = {
      forma: [
        { name: "Redondo", src: "Forma/redondo" },
        { name: "Princesa", src: "Forma/princesa" },
        { name: "Esmeralda", src: "Forma/esmeralda" },
        { name: "Óvalo", src: "Forma/ovalo" },
        { name: "Marquesa", src: "Forma/marquesa" },
        { name: "Pera", src: "Forma/pera" },
        { name: "Asscher", src: "Forma/asscher" },
        { name: "Corazón", src: "Forma/corazon" },
        { name: "Cojín", src: "Forma/cojijn" },
        { name: "Baguette", src: "Forma/baguette" },
        { name: "Trillón", src: "Forma/trillon" },
        { name: "Radiante", src: "Forma/radiante" },
      ],
      color: [
        { name: "Transparente", src: "Color/incoloro" },
        { name: "Casi incoloro", src: "Color/casi-incoloro" },
        { name: "Ligeramente amarillo", src: "Color/ligeramente-amarillo" },
        { name: "Amarillo claro", src: "Color/amarillo-claro" },
      ],

      opacidad: [
        { name: "Perfecta", src: "Claridad/perfecta" },
        { name: "Imperfecciones no visibles", src: "Claridad/imperfecciones-no-visibles" },
        { name: "Imperfecciones visibles a 10x", src: "Claridad/imperfecciones-10x" },
        { name: "Imperfecciones visibles a simple vista", src: "Claridad/imperfecciones-simple-vista" },
      ],
      cortes: [
        { name: "Excellente (Máximo Brillo)", src: "Corte/excelente" },
        { name: "Muy Buena (Muy Brillante)", src: "Corte/muy-bueno" },
        { name: "Bueno (Brillante)", src: "Corte/bueno" },
        { name: "Regular (Poco Brillante)", src: "Corte/regular" },
      ],
    };
  }

  search = () => {
    let filter = {
      forma:this.forma.current.getFiltro(),
      color:this.color.current.getFiltro(),
      opacidad:this.opacidad.current.getFiltro(),
      corte:this.corte.current.getFiltro(),
      size:this.size.current.getFiltro(),
      precio:this.precio.current.getFiltro(),
    }
 
    console.log(filter)
    alert(JSON.stringify(filter))

  }


  render() {
    return (
      <div >
        <p id="name">LDA W7 Axel Octavio Meinguer Estrada - A01653448</p>
      <div className="body">
        <div className="mitad">
          <ButtonFilter ref={this.forma} title="FORMA" buttons={this.state.forma} tooltip="..." size="col-6"  ></ButtonFilter>
          <ButtonFilter ref={this.color} title="COLOR"  buttons={this.state.color} tooltip="..." size="col-4"  ></ButtonFilter>
          <ButtonFilter ref={this.opacidad} title="CLARIDAD"  buttons={this.state.opacidad} tooltip="..."  size="col-4"  ></ButtonFilter>
        </div>
        <div className="mitad">
        <ButtonFilter ref={this.corte} title="CORTO" buttons={this.state.cortes}  tooltip="..." size="col-4"  ></ButtonFilter>
        <RangeFilter ref={this.size} title="QUILATAJE" tooltip="..." images="true" min="0" max="30" step="0.1"></RangeFilter>
        <RangeFilter ref={this.precio} title="PRECIO" tooltip="..."  min="200" max="5000000" step="100"></RangeFilter>
        </div>
        <div className="submit" onClick={this.search}>
          <Button label="buscar" color="fill"  ></Button>
        </div>
        <div className="submit" onClick={this.clean}>
          <Button label="limpiar filtros" color="clear"></Button>
        </div>
      </div>
       </div>
    );
  }


  clean = () => {
    this.forma.current.limpiarFiltros()
    this.color.current.limpiarFiltros()
    this.opacidad.current.limpiarFiltros()
    this.corte.current.limpiarFiltros()
    this.size.current.limpiarFiltros()
    this.precio.current.limpiarFiltros()
  }


}

export default App;
