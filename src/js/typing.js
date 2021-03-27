new TypeIt("#typewriter", {
  speed: 50,
  loop: true
}).pause(750)
  .type("", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("", {delay: 2000})
  .go();