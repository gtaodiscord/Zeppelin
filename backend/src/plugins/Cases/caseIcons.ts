import { CaseTypes } from "../../data/CaseTypes.js";

// These emoji icons are hosted on the Hangar server
// If you'd like your self-hosted instance to use these icons, check #add-your-bot on that server
export const caseIcons: Record<CaseTypes, string> = {
  [CaseTypes.Ban]: "<:caseban:892052511698075689>",
  [CaseTypes.Unban]: "<:caseunban:892052628345856080>",
  [CaseTypes.Note]: "<:casenote:892052585765290014>",
  [CaseTypes.Warn]: "<:casewarn:892052663154397225>",
  [CaseTypes.Kick]: "<:casekick:892052550554107916>",
  [CaseTypes.Mute]: "<:casemute:892052568308580392>",
  [CaseTypes.Unmute]: "<:caseunmute:892052645911617606>",
  [CaseTypes.Deleted]: "<:casedeleted:892052535332995072>",
  [CaseTypes.Softban]: "<:casesoftban:892052606552264735>",
};
