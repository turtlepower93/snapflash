const Deck = require("../../models/deck");
const user = require("../../models/user");

module.exports = {
  index,
  addCards,
  create,
  update,
  show,
  delete: deleteOne,
  hideDeck,
};

async function hideDeck(req, res) {
  const isOwner = await Deck.findById(req.params.id);
  try {
    if (isOwner.user.toString() === req.user._id) {
      if (isOwner.hidden) {
        isOwner.hidden = false;
      } else {
        isOwner.hidden = true;
      }
      isOwner.save();
      return res.json(isOwner);
    }
  } catch (e) {
    throw new Error("shame on you.");
  }
}

async function index(req, res) {
  const decks = await Deck.find({ user: req.user._id });
  return res.json(decks);
}

async function addCards(req, res) {
  const deck = await Deck.findById(req.params.id);
  req.body.forEach((card) => deck.cards.push(card));
  deck.save();
  return res.json(deck);
}

async function create(req, res) {
  let deckData = req.body;
  deckData.user = req.user;
  deckData.userName = req.user.name;
  const newDeck = await Deck.create(deckData);
  return res.json(newDeck);
}

async function show(req, res) {
  let deck = await Deck.findById(req.params.id);
  return res.json(deck);
}

async function update(req, res) {
  try {
    if (req.body.user === req.user._id) {
      const updatedDeck = await Deck.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.json(updatedDeck);
    }
  } catch (e) {
    throw new Error("nice try");
  }
}

async function deleteOne(req, res) {
  const isOwner = await Deck.findById(req.params.id);
  try {
    if (isOwner.user.toString() === req.user._id) {
      const removedDeck = await Deck.findByIdAndRemove(req.params.id);
      return res.json(removedDeck);
    }
  } catch (e) {
    throw new Error("shame on you.");
  }
}

/*-- Helper Functions --*/

// async function isAuthorized(user, request) {
//     if(!req.user)

// }
