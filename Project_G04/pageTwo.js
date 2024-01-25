const musicalActs = [
  {
    image: "images/image1.jpeg",
    stageName: "3 Are Legend",
    date: "January 25th, 2024",
    show: "6:30 PM",
    genre: "Dance/Electronic",
    mostPopular: "We Are Legend",
  },

  {
    image: "images/image2.jpeg",
    stageName: "Chainsmokers",
    date: "February 15th, 2024",
    show: "8:30 PM",
    genre: "Dance/Electronic",
    mostPopular: "Closer",
  },

  {
    image: "images/image3.jpeg",
    stageName: "Koven",
    date: "March 4th, 2024",
    show: "10:30 PM",
    genre: "Dance/Electronic",
    mostPopular: "Another Home",
  },
];
const Redirect = () => {
  window.location.href = "Page1Modified.html#buy_tickets_nav";
};

document.addEventListener("DOMContentLoaded", function() {
  const renderArtist = () => {
    const artistContainer = document.createElement("div");
    artistContainer.id = "container";

    musicalActs.forEach((musicalAct) => {
      const artistLineup = document.createElement("div");
      artistLineup.className = "artistContainer";

      const buyTicketWrapper = document.createElement("div");
      buyTicketWrapper.className = "ticketButtonWrapper";

      const buyTicket = document.createElement("a");
      buyTicket.className = "ticketButton";
      buyTicket.innerHTML = "BUY TICKETS";
       buyTicket.onclick = Redirect;

      // buyTicket.id = "Tick" + musicalActs.indexOf(musicalAct);

      const artistImage = document.createElement("img");
      artistImage.className = "lineUpArtist";
      artistImage.src = musicalAct.image;

      const artistInfo = document.createElement("div");
      artistInfo.className = "artistInfos";
      artistInfo.innerHTML = `
        <h1 class="header">${musicalAct.stageName}</h1>
        <p>${musicalAct.date}</p>
        <p>Show: ${musicalAct.show}</p>
        <p> Genre: ${musicalAct.genre}</p>
        <p> Most Popular Track: ${musicalAct.mostPopular}</p>
      `;

      buyTicketWrapper.appendChild(buyTicket);
      artistInfo.appendChild(buyTicketWrapper);
      artistLineup.appendChild(artistImage);
      artistLineup.appendChild(artistInfo);
      artistContainer.appendChild(artistLineup);
    });


    document.body.appendChild(artistContainer);
    document.body.appendChild(document.querySelector('footer'));
  };

  renderArtist();
});
