//this is sample functioning code from Talkjs to demonstrate implementation of messaging feature

Talk.ready.then(function (Talk) {
  var me = new Talk.User({
    id: "123456",
    name: "Alice",
    email: "alice@example.com",
    photoUrl: "https://demo.talkjs.com/img/alice.jpg",
    welcomeMessage: "Hey there! How are you? :-)",
  });
  window.talkSession = new Talk.Session({
    appId: "taEn5Ook",
    me: me,
  });
  var other = new Talk.User({
    id: "654321",
    name: "Sebastian",
    email: "Sebastian@example.com",
    photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
    welcomeMessage: "Hey, how can I help?",
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  var inbox = talkSession.createInbox({ selected: conversation });
  inbox.mount(document.getElementById("talkjs-container"));
});

//query selector to connect to chat button on content page - not sure if 2nd parameter ("click", Talk) is correct

document.querySelector("btn-chat").addEventListener("click", Talk);
