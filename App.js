import { ButtonImage } from "./components/ButtonImage";
import { Photos } from "./components/Photos";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ButtonImage />
      <Photos />
    </QueryClientProvider>
  );
}