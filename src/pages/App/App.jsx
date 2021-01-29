import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as decksAPI from '../../utilities/decks-api'
import AuthPage from '../AuthPage/AuthPage';
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DecksListPage from '../DecksListPage/DecksListPage';
import CardsListViewPage from '../CardsListViewPage/CardsListViewPage';
import CardsFlipViewPage from '../CardsFlipViewPage/CardsFlipViewPage';
import NavBar from '../../components/NavBar/NavBar';
import UpdateDeckPage from '../UpdateDeckPage/UpdateDeckPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);

  //get the decks from server and set the state
  useEffect( function() {
    async function getDecks() {
    const decksObj = await decksAPI.getAll();
    setDecks(decksObj)
    }
    getDecks();
  },[user])

    async function handleAddDeck(newDeckData, newCardsData) {
      newDeckData.cards = newCardsData;
      const newDeck = await decksAPI.createDeck(newDeckData);
      setDecks([
        ...decks,
        newDeck
      ])
  }

    async function handleUpdateDeck(updateDeckData, UpdateCardsData) {
      updateDeckData.cards = UpdateCardsData;
      const updateDeck = await decksAPI.updateDeck(updateDeckData);
      
    }

    async function handleDeleteDeck(deck){
      await decksAPI.deleteDeck(deck);
      const decksObj = await decksAPI.getAll();
      setDecks(decksObj)
    }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/new">
                <NewDeckPage handleAddDeck={handleAddDeck}/>
              </Route>
              <Route path="/decks">
                <DecksListPage decks={decks} handleDeleteDeck={handleDeleteDeck} />
              </Route>
              <Route path="/list">
                <CardsListViewPage />
              </Route>
              <Route path="/flip">
                <CardsFlipViewPage />
              </Route>
              <Route path="/edit">
                <UpdateDeckPage handleDeleteDeck={handleDeleteDeck} handleUpdateDeck={handleUpdateDeck}/> //add request params
              </Route>
              <Redirect to="/decks" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
