playlist = new Object({})

updatePlaylist(playlist,"tizianoFerro","111")
removeFromPlaylist(playlist,"liga")
console.log(playlist)
function updatePlaylist(obj,name,song){
  obj[name]=song
}
function removeFromPlaylist(obj,name){
 delete obj[name]
}
