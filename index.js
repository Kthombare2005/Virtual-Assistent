let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let speak = new SpeechSynthesisUtterance(text);
  speak.rate = 1;
  speak.pitch = 1;
  speak.volume = 1;
  window.speechSynthesis.speak(speak);
}

function greeting_msg() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
window.addEventListener("load", () => {
  greeting_msg();
});
let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};
btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});
// function takeCommand(command) {
//   btn.style.display = "none";
//   btn.style.display = "flex";
//   voice.style.display = "none";
//   if (command.includes("hello") || command.includes("key")) {
//     speak("Hello Sir,what can I help you?");
//   } else if (command.includes("who are you")) {
//     speak("I am your assistant, Created by Ketan Thombare");
//   } else if (command.includes("open youtube")) {
//     speak("Opening Youtube");
//     window.open("https://www.youtube.com");
//   } else if (command.includes("open google")) {
//     speak("Opening google");
//     window.open("https://www.google.com");
//   } else {
//     speak(`this is what i found on internet regarding ${message.replace("nova", "")||message.replace("nova","")}`)
//     window.open(`https://www.google.com/search?q=${message}`);
//   }
// }

function takeCommand(command) {
  btn.style.display = "none";
  btn.style.display = "flex";
  voice.style.display = "none";

  if (command.includes("hello") || command.includes("key")) {
    speak("Hello Sir, what can I help you with?");
  } else if (command.includes("who are you")) {
    speak("I am your assistant, created by Ketan Thombare.");
  } else if (command.includes("open youtube")) {
    speak("Opening YouTube");
    window.open("https://www.youtube.com");
  } else if (command.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com");
  } else {
    speak(
      `This is what I found on the internet regarding ${command.replace(
        "nova",
        ""
      )}`
    );
    window.open(`https://www.google.com/search?q=${command}`);
  }
}

// let btn = document.querySelector("#btn");
// let content = document.querySelector("#content");

// function speak(text) {
//   let speak = new SpeechSynthesisUtterance(text);
//   speak.rate = 1;
//   speak.pitch = 1;
//   speak.volume = 1;
//   window.speechSynthesis.speak(speak);
// }

// async function fetchAIResponse(query) {
//   const apiUrl =
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCpHwzyefgEFFbAxzFqhsklfrNrH9S6Y0o";
//   const payload = {
//     contents: [
//       {
//         parts: [
//           {
//             text: query,
//           },
//         ],
//       },
//     ],
//   };

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//       throw new Error(`API error: ${response.statusText}`);
//     }

//     const data = await response.json();
//     const reply =
//       data?.contents?.[0]?.parts?.[0]?.text || "I couldn't process your query.";
//     return reply;
//   } catch (error) {
//     console.error("Error fetching AI response:", error);
//     return "Sorry, I'm having trouble connecting to the AI service.";
//   }
// }

// async function greeting_msg() {
//   let day = new Date();
//   let hours = day.getHours();
//   let greeting;
//   if (hours >= 0 && hours < 12) {
//     greeting = "Good Morning";
//   } else if (hours >= 12 && hours < 16) {
//     greeting = "Good Afternoon";
//   } else {
//     greeting = "Good Evening";
//   }
//   const aiResponse = await fetchAIResponse(
//     `${greeting}, how can I assist you today?`
//   );
//   speak(aiResponse);
// }

// window.addEventListener("load", () => {
//   greeting_msg();
// });

// btn.addEventListener("click", async () => {
//   const userQuery = prompt("What would you like to ask Nova?");
//   if (userQuery) {
//     const aiResponse = await fetchAIResponse(userQuery);
//     speak(aiResponse);
//   }
// });
