import { Link } from "react-router-dom";
import { useEffect, useState} from 'react'
import "./Deck.css";

export default function Deck({
  deck,
  handleDeleteDeck,
  currentUser,
  handleHideDeck,
}) {

  const [showDeckDelete, setShowDeckDelete] = useState('');

  function deleteDeck(evt) {
    handleDeleteDeck(deck);
  }

  function hideDeck(evt) {
    handleHideDeck(deck);
  }

  function showDeckDeleteOverlay() {
    showDeckDelete === 'displayDeleteOverlay' ? setShowDeckDelete('') : setShowDeckDelete('displayDeleteOverlay'); 
  }

  return (
    <div className="card shdo-dk" id="card-attributes">
      {currentUser._id === deck.user ? (
        <span className="disable-select delete-deck" onClick={showDeckDeleteOverlay}>
          ×
        </span>
      ) : (
        <></>
      )}
      <div className="deleteOverlay" id={showDeckDelete}>
        <div className="deleteOverlayFormBackground shdo-dk bdr-radius">
          <div className="deleteButtons">
          <div className="md-txt-3">Are You Sure You want to delete this deck?</div>
            <button className="deleteButton md-txt-2 shdo-dk link-hover" onClick={deleteDeck}> DELETE </button>
            <button className="dontDeleteButton md-txt-2 shdo-dk link-hover" onClick={setShowDeckDelete}>DO NOT DELETE</button>
          </div>
        </div>
      </div>
      <div className="card-head lt-bg-1">
        <div className="md-txt-3">{deck.name}</div>
        <span>
          Created By: <span style={{ color: "blue" }}>{deck.userName}</span>
        </span>
      </div>
      <div className="card-body wt-bg md-txt-1">
        <div>{deck.description}</div>
      </div>
      {currentUser._id === deck.user ? (
        <>
          <button
            className={deck.hidden ? "hidden" : "nothidden"}
            onClick={hideDeck}
          >
            {" "}
            {deck.hidden ? "Make Public" : "Make Private"}{" "}
          </button>
          <div className="deck-buttons three-buts txt-white-a">
            <Link
              className="cardl lt-bg-3 txt-white md-txt-1"
              to={{ pathname: `/edit`, state: { deck } }}
            >
              Update
            </Link>
            <Link
              className="cardl lt-bg-2 md-txt-1"
              to={{ pathname: "/list", state: { deck } }}
            >
              Study
            </Link>
            <Link
              className="cardl lt-bg-3 md-txt-1"
              to={{ pathname: "/flip", state: { deck } }}
            >
              Flip
            </Link>
          </div>
        </>
      ) : (
        <div className="deck-buttons two-buts txt-white-a">
          <Link
            className="cardl lt-bg-2"
            to={{ pathname: "/list", state: { deck } }}
          >
            Study
          </Link>
          <Link
            className="cardl lt-bg-3"
            to={{ pathname: "/flip", state: { deck } }}
          >
            Flip
          </Link>
        </div>
      )}
    </div>
  );
}
