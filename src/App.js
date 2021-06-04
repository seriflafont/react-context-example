import { useAppContext } from './state'
import Header from './components/Header'
import './App.scss';

function App() {
  let {
    state, dispatch
  } = useAppContext();

  return (
    <div className={`App ${state.darkMode ? 'dark' : 'light'}`}>
      <Header />
      <input type="text"
              placeholder="Type your name!"
              value={state.name} 
              onChange={(event) => {
              dispatch({ type: "SET_NAME", value: event.target.value })
              }}
      />
      <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </div>
  );
}

export default App;
