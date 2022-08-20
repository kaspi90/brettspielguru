import { boardgameRef } from "./firebase";
import { brettspiele } from "./DataTable";

function CreateBoardgame() {
  boardgameRef.push(brettspiele);
}

export default CreateBoardgame;
