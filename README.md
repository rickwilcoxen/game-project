
(づ￣ ³￣)づ <( here's the readme! )

# Process
  More or less followed a straight forward path to completion:

## Planning
  Starting the plan for the game with user stories and a wireframe.

### Wireframe
  The basic set up which is what the browser will look like, however there are some differences.
  The game board will not be visible all the time. When the user first loads the website, the game will not be visable.

  Not signed in version:
  _ _ _ _ _ _ _ _ _ _ _ _
  |  header - tic tac toe|
  |_ _ nav _ _ _ _ _ _ _ |
  |  sign up             |
  |  sign in             |
  |                      |
  |                      |
  |_ _ _ _ _ _ _ _ _ _ _ |
  | footer - links       |
  |    elsewhere         |
  |_ _ _ _ _ _ _ _ _ _ _ |

  Signed in version:
  _ _ _ _ _ _ _ _ _ _ _ _
  |  header - tic tac toe|
  |_ _ nav _ _ _ _ _ _ _ |
  | game board           |
  |       _ | _ | _      |
  |       _ | _ | _      |
  |         |   |        |
  |_ _ _ _ _ _ _ _ _ _ _ |
  | footer - links       |
  |    elsewhere         |
  |_ _ _ _ _ _ _ _ _ _ _ |

  SignedIn(True) nav === sign out, change password, new game, view games, stats.
  game board not visible unless game has been started / selected

### User stories
  _Authentication_
As an unregistered user, I want to sign up with email, pw, and pw confirmation so that sign in.
As a registered user, I want to sign in with email and pw so that I can play the game
As a signed in user, I want to change my password
As a signed in user, I want to sign out
  _Game Play_
As a signed in user, I want to start a new tic tac toe game
As a signed in user that started a game, I want to play X first
As a signed in user that started a game, I want to rotate turns between x and o
As a signed in user that started a game, I do not want to be able to choose the same spot
As a signed in user that started a game, I want to get a display message when i win/lose/tie
As a signed in user that started a game, I do not want to be able to keep playing once the game is over
As a signed in user that started a game, I want to be able to play again
As a signed in user, I want to know how manny games I've played

## Set up
### Setting up the files.
  In order to really start the project, I had to fork and download the repo from the GA git hub, which supplied a lot of backend code that I would not have the time or expertise to complete. This enabled me to get started on the main front end code that I would need to really complete the project.

### How I did it all...
  I followed this list (in this order) to complete the code:
    1. worked on Game UI
    2. worked on game engine
    3. game UI part 2
    4. Authentication
    5. game apiUrl
    6. css/style

  Some parts were more difficult than others, and required external research (outside of class notes) or help from classmates or instructors.

  Personally starting out was the hardest part for me, and it felt really difficult to get it all up and running. I spent a lot of time being really frustrated, and as a result I was constantly left struggling in my own thoughts. It took me a really long time to ask for help when I was really, really stuck.

  Near the end, I came to the realization that I really, really need to ask for help when I need it. I come from a long line of really, really stubborn people (it gets MUCH worse than not asking for directions when you're lost), and going through this project I realized how stubborn I really am.

  I'm struggling! I need help! Am I going to ask for help? Nope, I can do it! But can I do it alone? I totally can't!

  Coming down to the wire I realized how much help I super duper needed. This lead me to lean on my classmates a lot more, and even went on a three hour zoom call to sort out all the remaining (read: frustrating) bugs I had.

  In the end, we got there! However I will continue to add onto it and make it more in the image that I want it to be (aka: personalized and pretty!).

# Technology Used
  - atom
  - html
  - css
  - JavaScript

# What Will Be Added in Later Iterations
## CSS / style
  Personalization! Adding personalized x/os instead of the standard x & o.
  I will also be making a cleaner UI, so the site will be a bit prettier than the basic look it has currently.


¯|_ (ツ)_ /¯  
that's all folks
