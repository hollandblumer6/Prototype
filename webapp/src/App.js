import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react-v1'
import Dashboard from './components/user/Dashboard'
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AmplifySignOut />
       <h2> My App Content </h2>
  
      </header>
      <main>
        
      <Dashboard/>
      </main>
  
   
    </div>
  );
}

export default withAuthenticator(App);
