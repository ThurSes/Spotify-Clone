import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const root = createRoot(document.getElementById("root"));

root.render(<main className="main">Carregando músicas...</main>);

import("./App.jsx")
  .then(({ default: App }) => {
    root.render(<StrictMode><App /></StrictMode>);
  })
  .catch(() => {
    root.render(
      <main className="main">
        <h1>Não foi possível carregar as músicas</h1>
        <p>Confira se o back-end está iniciado. Na pasta raiz, execute npm run dev.</p>
        <button onClick={() => window.location.reload()}>Tentar novamente</button>
      </main>
    );
  });
