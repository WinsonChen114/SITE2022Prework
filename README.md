  # Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Winson Chen**

Time spent: **10** hours spent in total

Link to project: https://glitch.com/edit/#!/torpid-cake-quokka

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added visible Health counter
- [x] Repeats pattern if the player gets a strike

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Demonstrates a Win:
![X](https://cdn.glitch.global/2b2f8e44-ae9c-4a26-a83c-3222efb2fb9c/game_win.gif?v=1648329878198)

Demonstrates a loss because the timer ran out:
![X](https://cdn.glitch.global/2b2f8e44-ae9c-4a26-a83c-3222efb2fb9c/timer_loss.gif?v=1648329877526)

Demonstrates a loss because the player entered the wrong pattern 3 times
![X](https://cdn.glitch.global/2b2f8e44-ae9c-4a26-a83c-3222efb2fb9c/health_loss.gif?v=1648329877611)

Demonstrates random pattern generation
![](https://cdn.glitch.global/2b2f8e44-ae9c-4a26-a83c-3222efb2fb9c/random_pattern.gif?v=1648329877302)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   **JavaScript HTML DOM - Changing HTML - W3Schools, https://www.w3schools.com/js/js_htmldom_html.asp:**

   - Used to change the health counter after a mistake.

   **SetInterval() and ClearInterval()**
   **https://www.w3schools.com/jsref/met_win_setinterval.asp, https://www.w3schools.com/jsref/met_win_clearinterval.asp**

   - Used to set up a ticking clock

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   I encountered a challenge when I was trying to implement a ticking clock.
   The program ran into an infinite loop because I was decrementing the timer in the wrong place.
   I also did not have a correct check to make sure that the timer reached 0.
   I overcame this issue by first using console.log() to figure out that an infinite loop was happening.
   I then had to review the code and documentation for setInterval() to see when exactly I should decrement the timer.
   I overcame the problem by moving the decrement inside the function that setInterval() called, so I would be decrementing each time the function was called.

   I also encountered a challenge when I implemented the audio clips. I had to take a close look at how the audio was implemented in the starter code.
   This way, I could figure out what to change and if I should keep anything. I decided to use the .play() and .pause() functions instead of building on the starter code.
   After I implemented it, I noticed that some of my audio clips were too long and would cause the next clip not to play
   because the first one was still playing. I overcame this issue by increasing the delay between each clue and shortening the length of the audio clips.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   While building the website, I learned about a lot of ways to change how the user interacts with the website.
   For example, we could make the buttons change color, change how we use the buttons, and cause different things to happen when a button is pressed.
   A question about web development I have would be how to make a website even more interactive and the skills I need to learn to implement them.
   I am also curious about how websites store and get information from a server, or a database, like profile pages or another site where a user can save information. 
   
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had a few more hours to work on the project, I would try to implement a way to randomize the order that the buttons appear in
   each time the game runs. This way, the game will be more interesting and less predictable. I would also implement difficulty modes, which would feature
   longer patterns the harder the mode is. The difficulty mode can also affect the number of buttons that are on screen, so an Easy mode might only have
   4 buttons while a harder mode would have 7 or 9. Another idea I have is to let the user choose a custom amount of time they want to have to guess the pattern.
   Or the time can be linked to the difficulty mode. Modifying how much time the clues are held for is also another idea. I would also try to implement a celebratory song or tone
   that plays when when the user wins or loses

## Interview Recording URL Link

[My 5-minute Interview Recording] https://umich.zoom.us/rec/share/7jZAfGyDOV8_TOG1phudfi2OMpRkdNnt_tN8anAQeq2yp3-E0N1X0xZove9aGb8u.E3v-TS__Ef8tSeg9?startTime=1648534709000

## License

    Copyright Winson Chen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
