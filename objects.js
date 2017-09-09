playlist = new Object( {})
playlist.liga = "una vita da mediano"
function updatePlaylist(obj,name,song){
  obj[name]=song
}
function removeFromPlaylist(obj,name){
 delete obj[name]
}
