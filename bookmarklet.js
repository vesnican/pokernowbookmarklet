(function () {
  // thx https://stackoverflow.com/a/52486921/1431103
  function setNativeValue(element, value) {
    let lastValue = element.value;
    element.value = value;
    let event = new Event("input", { target: element, bubbles: true });
    // React 15
    event.simulated = true;
    // React 16
    let tracker = element._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    element.dispatchEvent(event);
  }

  function click(element) {
    let event = new Event("click", { target: element, bubbles: true });
    element.dispatchEvent(event);
  }

  function setPokerNowBlind(index, sb, bb, duration) {
    // set small blind
    const sbelem = document.querySelector(`.blind-level-table tr:nth-child(${index}) :nth-child(2) input`);
    setNativeValue(sbelem, sb);

    // set big blind
    const bbelem = document.querySelector(`.blind-level-table tr:nth-child(${index}) :nth-child(3) input`);
    setNativeValue(bbelem, bb);

    // duration is tricky - if duration requested and the element is disabled, we need to click next level
    if (duration) {
      const durationelem = document.querySelector(`.blind-level-table tr:nth-child(${index}) :nth-child(4) input`);
      if (durationelem.disabled) {
        const addLevelButton = document.querySelector(`.blind-level-table tr:nth-child(${index + 1}) button`);
        click(addLevelButton);
      }
      setNativeValue(durationelem, duration);
    }

  }

  setPokerNowBlind(1, '25', '50', '30');
  setPokerNowBlind(2, '50', '100', '30');
  setPokerNowBlind(3, '100', '200', '30');
  setPokerNowBlind(4, '150', '300', '30');
  setPokerNowBlind(5, '200', '400', '30');
  setPokerNowBlind(6, '250', '500', '30');
  setPokerNowBlind(7, '300', '600', '30');
  setPokerNowBlind(8, '400', '800', '30');
  setPokerNowBlind(9, '500', '1000', '15');
  setPokerNowBlind(10, '750', '1500', '15');
  setPokerNowBlind(11, '1000', '2000', '15');
  setPokerNowBlind(12, '1500', '3000', '15');
  setPokerNowBlind(13, '2000', '4000', '15');
  setPokerNowBlind(14, '3000', '6000', '15');
  setPokerNowBlind(15, '4000', '8000', '15');
  setPokerNowBlind(16, '5000', '10000', '15');
  setPokerNowBlind(17, '7500', '15000');
})();
