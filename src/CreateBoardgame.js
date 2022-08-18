import { boardgameRef } from "./firebase";
import { brettspiele } from "./DataTable";

function CreateBoardgame() {
  console.log(brettspiele);

  boardgameRef.push(brettspiele);
}

export default CreateBoardgame;
