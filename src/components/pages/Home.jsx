import React from 'react';
import '../styles/Home.css';

const Home = () => {
 return (
  <main>
    <div className="home">
     
     <div className="d-flex">
     
     <p className="text-white mt-5">
     <h2 className=" mt-5 pt-5 ms-4"> Master <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cakes </h2> <br /> <br />
     En nuestra pastelería, el aroma a recién horneado se mezcla con el dulce perfume de la vainilla, mientras los pasteles y tartas relucen en todo su esplendor, invitándote a probar cada bocado lleno de sabor y ternura.
     </p>
     <img src="https://www.lacasadeeva.com/wp-content/uploads/2018/09/La-Casa-de-Eva-pastel-tres-leches-vainilla.png" alt="Cake photo" />
     </div>
    </div>
   <div className="mt-5 pt-5 text-center">
    <h5> Nuestros productos </h5>
   </div>
    <div className="card-container mt-2">
<div class="row mb-5">
     <div className="col">
      <div className="card h-100">
      <div className="card-title rounded bg-light">
       <img className="rounded-top" src="https://thumbs.dreamstime.com/b/una-rebanada-de-pastel-chocolate-sirviendo-con-polvo-cacao-en-la-bandeja-cer%C3%A1mica-marr%C3%B3n-circular-sobre-mesa-oscuro-caf%C3%A9-196514985.jpg"/>
       </div>
       <div className="card-body">
        <h2 className="card-title"> Pasteles en línea </h2> <br/>
        <p className="text-white p-2"> Te invitamos a probar nuestras exquisitas opciones de pasteles de línea, las cuales están disponibles en 20 deliciosas combinaciones de sabores. Puedes optar por llevártelos de inmediato o encargarlos según la variedad y la cantidad de porciones que necesites. ¡Atrévete a probar nuestros pasteles y disfruta de un sabor único y delicioso! </p>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card h-100 text-white">
        <div className="card-title rounded bg-light">
       <img className=" card-img-top" src="https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-hacer-una-tarta-de-halloween-con-crema-de-cacao-resultado-final_70891608_800x800.jpg"/>
       </div>
       <div className="card-body">
        <h2 className="card-title"> Pasteles temáticos </h2> <br/>
        <p className="text-white p-2"> Detalles estilizados para cada ocasión o temporada, recuerda. Lo mejor para tus seres queridos. </p>
       </div>
      </div>
     </div>
     <div className="col">
      <div className="card h-100">
      <div className="card-title rounded bg-light">
       <img className="card-img-top" src="https://latartaalpunto.com/web/wp-content/uploads/2020/07/pastel-de-unicornio.jpg"/>
       </div>
       <div className="card-body">
        <h2 className="card-title"> Pasteles personalizados </h2> <br/>
        <p className="text-white p-2"> Con nuestros pasteles personalizados, podrás crear momentos inolvidables para tus seres queridos. Si tienes una idea en mente, nosotros podemos hacerla realidad horneando un pastel hecho a medida, especialmente para ti. ¡Deja volar tu imaginación y crea un pastel único y especial que tus seres queridos nunca olvidarán! </p>
       </div>
      </div>
     </div>
    </div>
    </div>

   <div className="container mx-auto mt-5 mb-5">
		<div className="row col-12 d-flex">
		 <div className="col-md-6">
			<div className="card contact bg-light w-100">
			 <div className="card-header text-start">
        <h5 className="btn btn-minimalista"> Sucursal </h5>
			 </div>
			 <div className="card-body text-start">
				<p className="card-text text-dark"> Casa Matriz <br/>  Calle La Reforma #225, Col. San Benito. S.S </p>
        <hr/>
        <h5 className="btn btn-minimalista"> Horarios </h5>
        <p className="card-text text-dark"> Lunes a Sábado <br/>
        08:00 AM - 06:00 PM <br/> <br/>
         Domingo <br/>
         08:00 AM - 02:00 PM
        </p>
        <hr/>
        <h5 className="btn btn-minimalista"> Contacto </h5>
        <p className="card-text text-dark"> WhatsApp: +503 1234-5678 <br/>
        pedidosmc@gmail.com </p>
			 </div>
			</div>
		 </div>

     <div className="col-md-6">
			<div className="card contact bg-light w-100">
			 <div className="card-header text-start">
        <h5 className="btn btn-minimalista"> Sucursal </h5>
			 </div>
			 <div className="card-body text-start">
				<p className="card-text text-dark"> San Salvador <br/> Calle La Reforma #225, Col. San Benito. S.S </p>
        <hr />
        <h5 className="btn btn-minimalista"> Horarios </h5>
        <p className="card-text text-dark"> Lunes a Sábado <br/>
        08:00 AM - 05:30 PM <br/> <br/>
         Domingo <br/>
         08:00 AM - 12:00 MD
        </p>
        <hr/>
        <h5 className="btn btn-minimalista"> Contacto </h5>
        <p className="card-text text-dark"> WhatsApp: +503 1234-5678 <br/>
        pedidosmc@gmail.com </p>
			 </div>
			</div>
		 </div>
    </div>
   </div>
  </main>
 );
}

export default Home;