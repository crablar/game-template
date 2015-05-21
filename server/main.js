Meteor.startup(function () {

  Meteor.methods({

    reset : function(){  
      Cards.update({card_name: "Hello World"},
        {
          card_name: "Hello World",
          card_description: "This will alert hello world.",
          img_url: "https://thinkingonscripture.files.wordpress.com/2013/03/world.jpg",
          is_discarded: false,
          is_in_play: false,
          is_in_hand: true
      }, { upsert: true });

      Cards.update({card_name: "Robot"},
        {
          card_name: "Robot",
          card_description: "This will put a robot into play.",
          img_url: "http://cdn.outblush.com/women/images/2010/10/mr-robot-pillows-100x100.jpg",
          is_discarded: false,
          is_in_play: false,
          is_in_hand: true
      }, { upsert: true });
    }

  });

  Meteor.call('reset');

});