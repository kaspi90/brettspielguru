import { set } from "firebase/database";
import { boardgameRef } from "./firebase";
import Brettspiel from "./Brettspiel";
import { brettspiele } from "./DataTable";

function CreateBoardgame() {
  console.log(brettspiele);

  boardgameRef.push(brettspiele);
}

export default CreateBoardgame;
