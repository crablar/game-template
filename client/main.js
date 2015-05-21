if (Meteor.isClient) {

  var cardActionMap = {
    "Hello World" : function(card) {
      alert("hello world")
      Cards.update({_id: card._id},
      {
        $set:{
          is_in_hand : false,
          is_discarded : true
        }
      });
    },
    "Robot" : function(card) {
      Cards.update({_id: card._id},
      {
        $set:{
          is_in_hand : false,
          is_in_play : true
        }
      });
    },
  }

  var playCard = function(card){
    cardActionMap[card.card_name](card);
  }

  Template.board.helpers({
    getCards : function(zoneName) {
      switch (zoneName) {
        case "discard":
          return Cards.find({is_discarded : true});
        case "inPlay":
          return Cards.find({is_in_play : true});
        case "hand":
          return Cards.find({is_in_hand : true});
      }
    },
  });

  Template.board.events({
    'click .reset' : function(){
      Meteor.call('reset');
    }
  })

  Template.card.events({
    'click .play': function () {
      playCard(this);
    }
  });

}