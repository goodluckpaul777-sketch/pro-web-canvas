import { Toaster } from "sonner";
import MainApp from "./components/MainApp";

function App() {
  return (
    <>
      <MainApp />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#18181b",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#fafafa",
          },
        }}
      />
    </>
  );
}

export default App;