import { boardgameRef } from "./Firebase";
import { brettspiele } from "../DataTable";

function CreateBoardgame() {
  boardgameRef.push(brettspiele);
}

export default CreateBoardgame;
