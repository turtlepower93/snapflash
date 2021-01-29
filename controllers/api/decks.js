const Deck = require('../../models/deck');
const user = require('../../models/user');

module.exports = {
    index,
    addCards,
    create,
    update,
    show,
    delete:deleteOne,
};

async function index(req, res) {
    const decks = await Deck.find({user:req.user});
    console.log(decks);
    return res.json(decks);
}

async function addCards(req, res) {
    const deck = await Deck.findById(req.params.id);
    req.body.forEach((card) => deck.cards.push(card));
    deck.save();
    return res.json(deck);
}

async function create(req, res) {
    console.log(req.user)
    let deckData = req.body
    deckData.user = req.user
    const newDeck = await Deck.create(deckData);
    console.log(req.body);
    return res.json(newDeck);
}

async function show(req, res) {
    let deck = await Deck.findById(req.params.id);
    return res.json(deck);
}

async function update(req, res) {
    const updatedDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.json(updatedDeck);
}

async function deleteOne(req, res) {
    const removedDeck = await Deck.findByIdAndRemove(req.params.id);
    return res.json(removedDeck);
}

/*-- Helper Functions --*/
