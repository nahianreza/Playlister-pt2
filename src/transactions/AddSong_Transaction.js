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
 export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
    }

    doTransaction() {
        this.app.createNewSong();
        
    }
    
    undoTransaction() {
        let index = this.app.state.currentList.songs.length - 1;
        this.app.deleteSong(index);
    }
}