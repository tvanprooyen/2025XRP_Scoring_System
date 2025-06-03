let settings = {}; // Initialize settings object

settings = {
    autoLowParkingPoints: 5,
    autoLowRubblePoints: 1,
    autoHighRubblePoints: 3,
    teleopLowRubblePoints: 1,
    teleopHighRubblePoints: 3,
    teleopOrbitPoints: 5,
    teleopOrbitAmpPoints: 8,
    endgameLowParkingPoints: 5,
    endgameOrbitPoints: 5,
    endgameOrbitAmpPoints: 8,
    endgameAmpReturnedPoints: 10,
    endgameCoopPoints: 10,
    penaltyTicketPoints: 2,
    GAME_TIME: 160,
    AUTO_PERIOD_DURATION: 30,
    ENDGAME_PERIOD_DURATION: 30
};

/* Add a checklist to helo make sure the match is ready, for example: 
    "Check all robots are ready", 
    "Check all field elements are in place"
*/
const matchReadyChecklist = [];

// This changes the default viewer screens. Options: gamescreen , blankscreen , summaryscreen
const defaultLoadedScreen = "gamescreen";

// This allows sounds to play, false means sounds will play
const defaultMuteSound = 'false';

// This makes it so only the screens listed will be muted automatically, other wise they will not be mute automatically
const screensAutoMute = ["blankscreen", "summaryscreen"];