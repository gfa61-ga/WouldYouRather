# Would You Rather

This project is part for Udacity React End Nano Degree. For project requirements, please consult with www.udacity.com

The code was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## known issues

https://github.com/udacity/reactnd-project-would-you-rather-starter/issues/1

## TL;DR

To get started:

* install all project dependencies with `npm install`
* to run the development version `yarn start`
* to run the production version build with `yarn build` then serve it with `serve -s build -l 8001`


## Table of Content

- [Components Information](#components-info)
    - [Overview](#components-overview)
    - [Hierarchy](#hierarchy)


- [Redux Store Tree](#redux-store-tree)
    - [Actions](#actions)
    - [Reducers](#reducers)
- [Contributing](#how-to-contribute)




### Components Info

#### Components Overview

##### Description

| Component | Description | Redux Store Connection |
|-----------------|------------------|-------------------|
| App | Main Component, renders the HeaderNav, Switches routes  | Yes: authedUser |
| HeaderNav | Manages Navigation, Logging In/Out  | Yes: authedUser |
| UserChip | Displays the current User info in the HeaderNav, also used by the UserSelect signIn modal  | Yes: dispatches log in action |
| UserSelect | Renders a clickable UserChips Modal for sign in  | Yes: openDialog |
| NoMatch | Conditionally rendered if the user is logged in and types a route that doesn't exist  | No |
| PleaseLogIn | Conditionally rendered if the user is logged out tries to access any route  | No |
| Home | Classifies the authedUser Questions into Answered and Unaswered Categories/Tabs | Yes: authedUser, questions |
| Answered | Renders the authedUser's Answered list of questions and links to ViewOnePoll | No |
| UnAnswered | Renders the authedUser's UnAnswered list of questions and links to ViewOnePoll | No |
| PollCards | list of Polls, used by Answered and UnAnswered | Yes: users |
| ViewOnePoll | Displays the current selected Poll, used of Answered and UnAnswered Polls, allows voting for UnAnswered Polls | Yes: questions, authedUser, users, qId, isAnswered |
| AddPoll | Used to compose new polls | Yes: author, users |
| LeaderBoard | Extracts Rankings, Used to render ranked users into LeaderCards | Yes: ranking, users |
| LeaderCards | Displays the user rank | No |

##### Hierarchy
```bash
    App
    │
    ├── HeaderNav
    │       │
    │       └── LogInLogOut
    │                 │
    │                 └── UserChip
    │                 │
    │                 └── PleaseLogIn
    │                            │
    │                            └── UserChip
    ├── Home (at /)
    │       │
    │       ├── Answered
    │       │           │
    │       │           └── PollCards
    │       │                   │
    │       │                   └──ViewOnePoll
    │       │
    │       └── UnAnswered
    │                   │
    │                   └── PollCards
    │                           │
    │                           └──ViewOnePoll
    │
    ├── AddPoll (at /add)
    │
    ├── LeaderBoard (at /leaderboard)
    │       │
    │       └── LeaderCard
    │
    ├── NoMatch (when logged in at /no match )
    │
    └── PleaseLogIn (when logged out at/ all)

```




### Redux Store Tree

```bash
Store =
    {
        authedUser: 'currently authenticated user',
        showSignIn: 'filter to show the sign in Model',
        questions: 'Object of questions objects', // mimics db format in _DATA.js
        users: 'Object of users objects' // mimucs db format in _DATA.js

    }
```

#### Actions

#### Action Creators

| Action Creator | Sync/Async | Role |
|-----------------|------------------|-------------------|
| handleInitialData |Async  | fetches _DATA using API, dispatches initQuestions, initUsers and setAuthedUserInStore if the user is still authed in the browser sessionStorage |
| setAuthedUser |  | sets authedUser in browser sessionStorage and dispatches setAuthedUserInStore |
| setAuthedUserInStore |Sync  | sets the authed user in store |
| showSignIn |Sync  | modifies flag for conditional modal rendering of users list to login |
| InitUsers |Sync  | Initializes the store with users {} |
| InitQuestions |Sync  | Initializes the store with questions {} |
| handleSubmitVote  |Async  | calls the api with the vote then saves the updates in store by dispatching submitVote |
| submitVote |Sync  | saves the vote in store |
| handleNewQuestion |Async  | calls the api with the new question to save the updates in store by dispatching saveQuestion |
| saveQuestion | Sync | saves the vote in store |







#### Reducers

| Reducer | Role |
|-----------------|------------------|
| showSignIn | manages the showSignIn modal trigger |
| users | handles the users {} |
| questions | handles the questions {} |
| authedUser |manages the authenticated user in store |

### How To Contribute

You can't; it's an educational project
