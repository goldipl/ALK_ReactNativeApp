import { ButtonImage } from "./components/ButtonImage";
import { Todos } from "./components/Todos";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ButtonImage />
      <Todos />
    </QueryClientProvider>
  );
}