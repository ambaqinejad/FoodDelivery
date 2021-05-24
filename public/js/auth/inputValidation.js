function isEmpty(input) {
  return input.val() ? false : true;
}

function isEmptySelection(selection) {
  return selection.find(":selected").text() ? false : true;
}

function isEmptyRadio(radioName) {
  return $(`input[name="${radioName}"]:checked`).length === 0 ? true : false;
}

function removeError(paragraph, input) {
  paragraph.addClass("hide-error");
  paragraph.text("");
  input.removeClass("form-necessary-missing");
}

function addError(paragraph, input, message) {
  paragraph.removeClass("hide-error");
  paragraph.text(message);
  input.addClass("form-necessary-missing");
}
