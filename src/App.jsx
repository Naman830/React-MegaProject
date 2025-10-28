import React from "react";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-4xl font-bold">
        Hello Naman Working Vitereact
      </h1>
    </div>
    </>
  );
}

export default App;
