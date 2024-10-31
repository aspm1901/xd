document.addEventListener("DOMContentLoaded", function () {});

const Header = () => {
  return (
    <header>
      <div class="header-logo">
        <img src="FOTITOS/logo.png" alt="GameVerse Logo" class="logo" />
        <h1>GameVerse</h1>
      </div>
      <nav>
        <div class="nav-buttons">
          <button onclick="window.location.href='gameList.html'">
            Acerca de nosotros
          </button>
          <button onclick="window.location.href='contact.html'">
            Nuestros productos
          </button>
        </div>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <div className="container">
      <h2 style={{ color: "#f59bf7" }} className="titulo">
        ¡Bienvenido a GameVerse, tu mundo gamer!
      </h2>
      <section id="main">
        <img
          src="FOTITOS/imagenprincipal.jpg"
          alt="Imagen principal"
          className="imagenprincipal"
        />
        <h2>
          <a
            href="#"
            style={{ color: "#9f5ea0" }}
            className="w-full p-2 border border-grey-300 rounded"
          >
            Acerca de nosotros
          </a>
        </h2>
        <p className="letrarticulo">
          En GameVerse, nuestra pasión por los videojuegos es lo que nos
          impulsa. Somos un equipo de entusiastas que vive y respira este
          emocionante mundo, y nuestro objetivo es compartir esa pasión contigo.
        </p>
      </section>
      <section id="products">
        <h2>
          <a
            href="#"
            style={{ color: "#9f5ea0" }}
            className="w-full p-2 border border-grey-300 rounded"
          >
            Productos destacados
          </a>
          <br />
        </h2>
      </section>
    </div>
  );
};

const ProductButton = () => {
  return (
    <div className="todos-productos">
      <a href="prod.html">Ver todos nuestros productos</a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <a href="contacto.html" target="_top">
        ¡Contáctanos!
      </a>
      <address>Nuestra dirección es: Madre de Dios 371 - La Molina</address>
      <p>Número de contacto: +51 960 172 519</p>
      <small>2024 Fundamentos de diseño web - All Rights Reserved</small>
    </footer>
  );
};

const Form = () => (
  <div class="contact-container">
    <div class="image-section">
      <img src="FOTITOS/imagencuadro.png" alt="mandos" />
    </div>
    <div class="form-section">
      <h2>Contáctanos</h2>
      <form className="p-6 bg-white shadow-md rounded-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombres y apellidos"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="tel"
          placeholder="Número telefónico"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 border border-gray-300 rounded"
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  </div>
);
