let timer = () => {
  let pArg = process.argv[2].match(/[a-z]+|[^a-z]+/gi)
  let type = pArg[1]
  let length = pArg[0]

  if (type === "min") {
    length = length * 60
  }
  
  let timerInterval = setInterval(() => {
    if( length !== 0) {
      length--
      console.log("Left:", length + "s", )
    }
    else{
      clearInterval(timerInterval)
      process.exit(0)
    }
  }, 1000);
}

timer()