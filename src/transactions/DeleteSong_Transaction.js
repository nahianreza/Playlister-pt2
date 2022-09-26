import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * 
 * 
 * 
 * @author McKilla Gorilla
 * @author ?
 */
 export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, deletedSong) {
        super();
        this.app = initApp;
        this.index = index;
        this.deletedSong = deletedSong;
    }

    
    doTransaction(){
        this.app.deleteSong(this.deletedSong);
    }
    undoTransaction() {
        this.app.createAnotherSong(this.index, this.deletedSong);
    }
}