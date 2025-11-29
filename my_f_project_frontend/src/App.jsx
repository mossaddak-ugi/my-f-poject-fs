import Card from "./components/cards";
import Form from "./components/forms";

import { useState, useEffect } from "react";

function App() {
  const [fileItemQuote, setFileItemQuote] = useState(null);
      const fetchFileItemQuote = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/v1/files');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setFileItemQuote(data);
    };

  useEffect(() => {
    fetchFileItemQuote();
  }, []);

  const cards = Array.isArray(fileItemQuote) ? fileItemQuote : [];

  return (
    <div className="p-5">
      <hr />
      <Card card_contents={cards} />
      <Form />
    </div>
  );
}
export default App;