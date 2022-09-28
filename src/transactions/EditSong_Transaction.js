import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, oldSong, newSong) {
        super();
        this.app = initApp;
        this.index = index;
        this.oldSong = oldSong;
        this.newSong = newSong;
    }

    doTransaction() {
        this.app.editSong(this.index, this.newSong);
    }
    
    undoTransaction() {
        this.app.editSong(this.index, this.oldSong);
    }
}