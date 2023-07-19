import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
    <StatusBar translucent={true} style="inverted"/>
    <Home />
    </>
  )
}