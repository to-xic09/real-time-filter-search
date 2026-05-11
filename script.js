const users = [
  {
    name: "Aarav Singh",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Frontend developer passionate about clean code."
  },
  {
    name: "Bharat Yadav",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
    bio: "Gym trainer and fitness mentor."
  },
  {
    name: "Bhavesh Joshi",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Photographer capturing city life."
  },
  {
    name: "Chirag Gupta",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400",
    bio: "Music producer and DJ."
  },
  {
    name: "Chetan Malhotra",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400",
    bio: "Video editor creating cinematic reels."
  },
  {
    name: "Neha Gupta",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Book lover and content creator."
  },
  {
    name: "Kabir Khan",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Music enthusiast and photographer."
  },
  {
    name: "Ananya Verma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Digital artist creating colorful stories."
  },
  {
    name: "Rohan Patel",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "Fitness coach helping people."
  }
];


const container = document.querySelector(".container");
let inp = document.querySelector("input");

function showuser(arr) {

  container.innerHTML = "";

  arr.forEach(function (user) {

    const card = document.createElement("div");
    card.classList.add("card");

    const bgImg = document.createElement("img");
    bgImg.src = user.pic;
    bgImg.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");

    blurredLayer.style.backgroundImage =
      `url('${user.pic}')`;

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    content.append(heading, para);

    card.append(
      bgImg,
      blurredLayer,
      content
    );

    container.appendChild(card);

  });

}

showuser(users);



inp.addEventListener("input", function () {

  let newuser = users.filter((user) => {

    return user.name
      .toLowerCase()
      .startsWith(inp.value.toLowerCase());

  });

  showuser(newuser);

});


