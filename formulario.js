train.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    train.style.left = timePassed / 5 + 'px';

    if (timePassed > 11000) clearInterval(timer);

  }, 20);
}
