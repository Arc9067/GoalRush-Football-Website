let tableLi = document.querySelectorAll(".tableh-li");
let listtactive = document.querySelector(".listtactive");
let tableli1 = document.querySelector(".tableh-li1");
let tableli2 = document.querySelector(".tableh-li2");
let tableli3 = document.querySelector(".tableh-li3");
// let leagueTypeDiv = document.querySelectorAll(".active");
import { key } from "../key/apiKey.js";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${key}`,
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
};

let leagueType = document.querySelectorAll(".type-li");

let leagueType1 = document.querySelector(".li1");
let leagueType2 = document.querySelector(".li2");
let leagueType3 = document.querySelector(".li3");
let leagueType4 = document.querySelector(".li4");
let leagueType5 = document.querySelector(".li5");
let leagueType6 = document.querySelector(".li6");
let leagueDiv = document.querySelector(".league-div");

tableLi.forEach((listele) => {
  listele.addEventListener("click", (element) => {
    if (listele.classList.contains("tableh-li1")) {
      listele.classList.add("active");

      if (
        tableli2.classList.contains("active") ||
        tableli3.classList.contains("active")
      ) {
        tableli2.classList.remove("active");
        tableli3.classList.remove("active");
      } else {
        return;
      }
    }
    if (listele.classList.contains("tableh-li2")) {
      listele.classList.add("active");
      if (
        tableli2.classList.contains("active") ||
        tableli3.classList.contains("active")
      ) {
        tableli1.classList.remove("active");
        tableli3.classList.remove("active");
      } else {
        return;
      }
    }
    if (listele.classList.contains("tableh-li3")) {
      listele.classList.add("active");
      if (
        tableli1.classList.contains("active") ||
        tableli2.classList.contains("active")
      ) {
        tableli1.classList.remove("active");
        tableli2.classList.remove("active");
      } else {
        return;
      }
    }
  });
});

leagueType.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.classList.contains("li1")) {
      ele.classList.add("active");
      leagueDiv.innerHTML = `<div class="loading-div">
                    <span class="league-loader"> </span>
                    <h3>Loading League Standing</h3>
                  </div>
`;
      fetch(
        "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=140",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.response[0]);
          let firstName = data.response[0].player.firstname;
          let lastname = data.response[0].player.lastname;
          let playerPic = data.response[0].player.photo;
          let teamPic = data.response[0].statistics[0].team.logo;
          let gamePlayed = data.response[0].statistics[0].games.appearences;
          let goalScored = data.response[0].statistics[0].goals.total;
          leagueDiv.innerHTML = `                
            <div class="league-table-div">
                    <div class="table-scorer">
                      <div class="row">
                        <div class="col-lg-8 scorer">
                          <div class="scorer-details">
                            <div class="scorerName">
                              <h3>
                                <span class="ScorerfirstName">${firstName}</span>
                                <span class="ScorerlastName"
                                  >${lastname}</span
                                >
                              </h3>
                              <p>league top scorer</p>
                              <div class="match-info">
                                <h4>Matches Played: <span>${
                                  gamePlayed ? gamePlayed : 0
                                }</span></h4>
                                <h4>goal Scored: <span>${
                                  goalScored ? goalScored : 0
                                }</span></h4>
                              </div>
                            </div>
                            <div class="scorer-club">
                              <img
                                src="${teamPic}"
                                alt="club"
                              />
                            </div>
                          </div>
                          <div class="scorer-img">
                            <img
                              src="${playerPic}"
                              alt="player"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`;
        })
        .catch((err) => console.error(err));

      if (
        leagueType2.classList.contains("active") ||
        leagueType3.classList.contains("active") ||
        leagueType4.classList.contains("active") ||
        leagueType5.classList.contains("active") ||
        leagueType6.classList.contains("active")
      ) {
        leagueType2.classList.remove("active");
        leagueType3.classList.remove("active");
        leagueType4.classList.remove("active");
        leagueType5.classList.remove("active");
        leagueType6.classList.remove("active");
      }
    }
    if (ele.classList.contains("li2")) {
      ele.classList.add("active");
      leagueDiv.innerHTML = `<div class="loading-div">
                    <span class="league-loader"> </span>
                    <h3>Loading League Standing</h3>
                  </div>
`;
      fetch(
        "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=78",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          let firstName = data.response[0].player.firstname;
          let lastname = data.response[0].player.lastname;
          let playerPic = data.response[0].player.photo;
          let teamPic = data.response[0].statistics[0].team.logo;
          let gamePlayed = data.response[0].statistics[0].games.appearences;
          let goalScored = data.response[0].statistics[0].goals.total;
          leagueDiv.innerHTML = `                
            <div class="league-table-div">
                    <div class="table-scorer">
                      <div class="row">
                        <div class="col-lg-8 scorer">
                          <div class="scorer-details">
                            <div class="scorerName">
                              <h3>
                                <span class="ScorerfirstName">${firstName}</span>
                                <span class="ScorerlastName"
                                  >${lastname}</span
                                >
                              </h3>
                              <p>league top scorer</p>
                              <div class="match-info">
                                <h4>Matches Played: <span>${
                                  gamePlayed ? gamePlayed : 0
                                }</span></h4>
                                <h4>goal Scored: <span>${
                                  goalScored ? goalScored : 0
                                }</span></h4>
                              </div>
                            </div>
                            <div class="scorer-club">
                              <img
                                src="${teamPic}"
                                alt="club"
                              />
                            </div>
                          </div>
                          <div class="scorer-img">
                            <img
                              src="${playerPic}"
                              alt="player"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`;
          console.log(response.response);
        })
        .catch((err) => console.error(err));
      if (
        leagueType1.classList.contains("active") ||
        leagueType3.classList.contains("active") ||
        leagueType4.classList.contains("active") ||
        leagueType5.classList.contains("active") ||
        leagueType6.classList.contains("active")
      ) {
        leagueType1.classList.remove("active");
        leagueType3.classList.remove("active");
        leagueType4.classList.remove("active");
        leagueType5.classList.remove("active");
        leagueType6.classList.remove("active");
      }
    }
    if (ele.classList.contains("li3")) {
      ele.classList.add("active");
      leagueDiv.innerHTML = `<div class="loading-div">
                    <span class="league-loader"> </span>
                    <h3>Loading League Standing</h3>
                  </div>
`;
      fetch(
        "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=39",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          let firstName = data.response[0].player.firstname;
          let lastname = data.response[0].player.lastname;
          let playerPic = data.response[0].player.photo;
          let teamPic = data.response[0].statistics[0].team.logo;
          let gamePlayed = data.response[0].statistics[0].games.appearences;
          let goalScored = data.response[0].statistics[0].goals.total;
          leagueDiv.innerHTML = `                
            <div class="league-table-div">
                    <div class="table-scorer">
                      <div class="row">
                        <div class="col-lg-8 scorer">
                          <div class="scorer-details">
                            <div class="scorerName">
                              <h3>
                                <span class="ScorerfirstName">${firstName}</span>
                                <span class="ScorerlastName"
                                  >${lastname}</span
                                >
                              </h3>
                              <p>league top scorer</p>
                              <div class="match-info">
                                <h4>Matches Played: <span>${
                                  gamePlayed ? gamePlayed : 0
                                }</span></h4>
                                <h4>goal Scored: <span>${
                                  goalScored ? goalScored : 0
                                }</span></h4>
                              </div>
                            </div>
                            <div class="scorer-club">
                              <img
                                src="${teamPic}"
                                alt="club"
                              />
                            </div>
                          </div>
                          <div class="scorer-img">
                            <img
                              src="${playerPic}"
                              alt="player"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`;
          console.log(response.response);
        })
        .catch((err) => console.error(err));

      if (
        leagueType1.classList.contains("active") ||
        leagueType2.classList.contains("active") ||
        leagueType4.classList.contains("active") ||
        leagueType5.classList.contains("active") ||
        leagueType6.classList.contains("active")
      ) {
        leagueType1.classList.remove("active");
        leagueType2.classList.remove("active");
        leagueType4.classList.remove("active");
        leagueType5.classList.remove("active");
        leagueType6.classList.remove("active");
      }
    }
    if (ele.classList.contains("li4")) {
      ele.classList.add("active");
      leagueDiv.innerHTML = `<div class="loading-div">
                    <span class="league-loader"> </span>
                    <h3>Loading League Standing</h3>
                  </div>
`;
      fetch(
        "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=135",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          let firstName = data.response[0].player.firstname;
          let lastname = data.response[0].player.lastname;
          let playerPic = data.response[0].player.photo;
          let teamPic = data.response[0].statistics[0].team.logo;
          let gamePlayed = data.response[0].statistics[0].games.appearences;
          let goalScored = data.response[0].statistics[0].goals.total;
          leagueDiv.innerHTML = `                
            <div class="league-table-div">
                    <div class="table-scorer">
                      <div class="row">
                        <div class="col-lg-8 scorer">
                          <div class="scorer-details">
                            <div class="scorerName">
                              <h3>
                                <span class="ScorerfirstName">${firstName}</span>
                                <span class="ScorerlastName"
                                  >${lastname}</span
                                >
                              </h3>
                              <p>league top scorer</p>
                              <div class="match-info">
                                <h4>Matches Played: <span>${
                                  gamePlayed ? gamePlayed : 0
                                }</span></h4>
                                <h4>goal Scored: <span>${
                                  goalScored ? goalScored : 0
                                }</span></h4>
                              </div>
                            </div>
                            <div class="scorer-club">
                              <img
                                src="${teamPic}"
                                alt="club"
                              />
                            </div>
                          </div>
                          <div class="scorer-img">
                            <img
                              src="${playerPic}"
                              alt="player"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`;
          console.log(response.response);
        })
        .catch((err) => console.error(err));

      if (
        leagueType1.classList.contains("active") ||
        leagueType2.classList.contains("active") ||
        leagueType3.classList.contains("active") ||
        leagueType5.classList.contains("active") ||
        leagueType6.classList.contains("active")
      ) {
        leagueType1.classList.remove("active");
        leagueType2.classList.remove("active");
        leagueType3.classList.remove("active");
        leagueType5.classList.remove("active");
        leagueType6.classList.remove("active");
      }
    }
    if (ele.classList.contains("li5")) {
      ele.classList.add("active");
      leagueDiv.innerHTML = `<div class="loading-div">
                    <span class="league-loader"> </span>
                    <h3>Loading League Standing</h3>
                  </div>
`;
      fetch(
        "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=2",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          let firstName = data.response[0].player.firstname;
          let lastname = data.response[0].player.lastname;
          let playerPic = data.response[0].player.photo;
          let teamPic = data.response[0].statistics[0].team.logo;
          let gamePlayed = data.response[0].statistics[0].games.appearences;
          let goalScored = data.response[0].statistics[0].goals.total;
          leagueDiv.innerHTML = `                
            <div class="league-table-div">
                    <div class="table-scorer">
                      <div class="row">
                        <div class="col-lg-8 scorer">
                          <div class="scorer-details">
                            <div class="scorerName">
                              <h3>
                                <span class="ScorerfirstName">${firstName}</span>
                                <span class="ScorerlastName"
                                  >${lastname}</span
                                >
                              </h3>
                              <p>league top scorer</p>
                              <div class="match-info">
                                <h4>Matches Played: <span>${
                                  gamePlayed ? gamePlayed : 0
                                }</span></h4>
                                <h4>goal Scored: <span>${
                                  goalScored ? goalScored : 0
                                }</span></h4>
                              </div>
                            </div>
                            <div class="scorer-club">
                              <img
                                src="${teamPic}"
                                alt="club"
                              />
                            </div>
                          </div>
                          <div class="scorer-img">
                            <img
                              src="${playerPic}"
                              alt="player"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`;
          console.log(response.response);
        })
        .catch((err) => console.error(err));

      if (
        leagueType1.classList.contains("active") ||
        leagueType2.classList.contains("active") ||
        leagueType3.classList.contains("active") ||
        leagueType4.classList.contains("active") ||
        leagueType6.classList.contains("active")
      ) {
        leagueType1.classList.remove("active");
        leagueType2.classList.remove("active");
        leagueType3.classList.remove("active");
        leagueType4.classList.remove("active");
        leagueType6.classList.remove("active");
      }
    }
    if (ele.classList.contains("li6")) {
      ele.classList.add("active");
      leagueDiv.innerHTML = `<div class="loading-div">
                    <span class="league-loader"> </span>
                    <h3>Loading League Standing</h3>
                  </div>
`;
      fetch(
        "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2022&league=61",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          let firstName = data.response[0].player.firstname;
          let lastname = data.response[0].player.lastname;
          let playerPic = data.response[0].player.photo;
          let teamPic = data.response[0].statistics[0].team.logo;
          let gamePlayed = data.response[0].statistics[0].games.appearences;
          let goalScored = data.response[0].statistics[0].goals.total;
          leagueDiv.innerHTML = `                
            <div class="league-table-div">
                    <div class="table-scorer">
                      <div class="row">
                        <div class="col-lg-8 scorer">
                          <div class="scorer-details">
                            <div class="scorerName">
                              <h3>
                                <span class="ScorerfirstName">${firstName}</span>
                                <span class="ScorerlastName"
                                  >${lastname}</span
                                >
                              </h3>
                              <p>league top scorer</p>
                              <div class="match-info">
                                <h4>Matches Played: <span>${
                                  gamePlayed ? gamePlayed : 0
                                }</span></h4>
                                <h4>goal Scored: <span>${
                                  goalScored ? goalScored : 0
                                }</span></h4>
                              </div>
                            </div>
                            <div class="scorer-club">
                              <img
                                src="${teamPic}"
                                alt="club"
                              />
                            </div>
                          </div>
                          <div class="scorer-img">
                            <img
                              src="${playerPic}"
                              alt="player"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
`;
          console.log(response.response);
        })
        .catch((err) => console.error(err));

      if (
        leagueType1.classList.contains("active") ||
        leagueType2.classList.contains("active") ||
        leagueType3.classList.contains("active") ||
        leagueType4.classList.contains("active") ||
        leagueType5.classList.contains("active")
      ) {
        leagueType1.classList.remove("active");
        leagueType2.classList.remove("active");
        leagueType3.classList.remove("active");
        leagueType4.classList.remove("active");
        leagueType5.classList.remove("active");
      }
    }
  });
});
