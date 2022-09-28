import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render(){
        const {songKeyPairEdit,editSongCallback, hideEditSongModalCallback} = this.props;
        let title = "";
        let artist = "";
        let youTubeId = "";
        if (songKeyPairEdit) {
            title = songKeyPairEdit.title;
            artist = songKeyPairEdit.artist;
            youTubeId = songKeyPairEdit.youTubeId;
        }
        return(
            <div
                class = "modal"
                id="edit-song-modal"
                data-animation="slideInOutLeft">
                    <div class="modal-root">
                        <div class="modal-north">Edit Song</div>
                        <div class="modal-center">
                            <div class="modal-center-content" id='edit-song-modal-center-content'>
                                <div id='title-prompt'>Title: </div><input type="text" id="edit-title" defaultValue={title}></input>
                                <div id='artist-prompt'>Artist: </div><input type="text" id="edit-artist" defaultValue={artist}></input>
                                <div id='you-tube-id-prompt'>YouTube ID: </div><input type="text" id="edit-youtube-Id" defaultValue={youTubeId}></input>
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={() => editSongCallback(songKeyPairEdit, {
                                    title: document.getElementById("edit-title").value,
                                    artist: document.getElementById("edit-artist").value,
                                    youTubeId: document.getElementById("edit-youtube-Id").value
                                    })}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        )
    }
}