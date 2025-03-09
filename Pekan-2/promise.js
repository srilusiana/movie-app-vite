function download() {
    
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Downloading...");
    }, 3000);
  });
}
  
function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Verify file...");
    }, 2000);
  });
}
  
function notify() {}
console.log("Download complete");

download()
.then((results)=>{
console.log(results);
return verify();
})
.then((results)=>{
  console.log(results);
  return notify();
})
.catch((error)=>{
  console.log(error);
})