import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";
import Dashboard from "./components/user/Dashboard";
import Header from "./components/header/Header";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default withAuthenticator(App);
