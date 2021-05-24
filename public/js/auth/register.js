let restaurantName;
let restaurantEmail;
let restaurantAddress;
let restaurantDelivery;
let phoneCodeInput;
let restaurantPhone;
let restaurantPassword;
let restaurantPasswordAgain;

let necessaryRestaurantName;
let necessaryRestaurantEmail;
let necessaryRestaurantAddress;
let necessaryRestaurantDelivery;
let necessaryPhoneCodeInput;
let necessaryRestaurantPhone;
let necessaryRestaurantPassword;
let necessaryRestaurantPasswordAgain;

$(document).ready(function () {
  console.log("1");
  fillPhoneCodes();
  initialInput();
  submitForm();
});

function fillPhoneCodes() {
  const phoneCodeSelection = $("#phone-code-input");
  let phoneCodeOptions = "";

  for (const index in codes) {
    if (index === 0) {
      phoneCodeOptions += `<option value="${index + 1}" selected>${
        codes[index]
      }</option>`;
    } else {
      phoneCodeOptions += `<option value="${index + 1}">${
        codes[index]
      }</option>`;
    }
  }
  phoneCodeSelection.html(phoneCodeOptions);
}

function initialInput() {
  restaurantName = $("#restaurant_name");
  restaurantEmail = $("#restaurant_email");
  restaurantAddress = $("#restaurant_address");
  restaurantDelivery = $("#restaurant_delivery");
  phoneCodeInput = $("#phone-code-input");
  restaurantPhone = $("#restaurant_phone");
  restaurantPassword = $("#restaurant_password");
  restaurantPasswordAgain = $("#restaurant_password_again");

  necessaryRestaurantName = $("#necessary_restaurant_name");
  necessaryRestaurantEmail = $("#necessary_restaurant_email");
  necessaryRestaurantAddress = $("#necessary_restaurant_address");
  necessaryRestaurantDelivery = $("#necessary_restaurant_delivery");
  necessaryPhoneCodeInput = $("#necessary_phone-code-input");
  necessaryRestaurantPhone = $("#necessary_restaurant_phone");
  necessaryRestaurantPassword = $("#necessary_restaurant_password");
  necessaryRestaurantPasswordAgain = $("#necessary_restaurant_password_again");
}

function submitForm() {
  $("#register-form").submit(function () {
    try {
      removeAllError();
      checkInputIfIsEmpty();
      validateEmail();
      validatePhoneNumber();
      validatePassword();
    } catch (e) {
      console.log(e);
      return false;
    }
  });
}

function removeAllError() {
  removeError(necessaryRestaurantName, restaurantName);
  removeError(necessaryRestaurantEmail, restaurantEmail);
  removeError(necessaryRestaurantAddress, restaurantAddress);
  removeError(necessaryRestaurantDelivery, restaurantDelivery);
  removeError(necessaryPhoneCodeInput, phoneCodeInput);
  removeError(necessaryRestaurantPhone, restaurantPhone);
  removeError(necessaryRestaurantPassword, restaurantPassword);
  removeError(necessaryRestaurantPasswordAgain, restaurantPasswordAgain);
}

function checkInputIfIsEmpty() {
  let error = false;
  if (isEmpty(restaurantName)) {
    addError(necessaryRestaurantName, restaurantName, "ضروری");
    error = true;
  }
  if (isEmpty(restaurantEmail)) {
    addError(necessaryRestaurantEmail, restaurantEmail, "ضروری");
    error = true;
  }
  if (isEmpty(restaurantAddress)) {
    addError(necessaryRestaurantAddress, restaurantAddress, "ضروری");
    error = true;
  }
  if (isEmptyRadio("restaurant_delivery")) {
    addError(necessaryRestaurantDelivery, restaurantDelivery, "ضروری");
    error = true;
  }
  if (isEmptySelection(phoneCodeInput)) {
    addError(necessaryPhoneCodeInput, phoneCodeInput, "ضروری");
    error = true;
  }
  if (isEmpty(restaurantPhone)) {
    addError(necessaryRestaurantPhone, restaurantPhone, "ضروری");
    error = true;
  }
  if (isEmpty(restaurantPassword)) {
    addError(necessaryRestaurantPassword, restaurantPassword, "ضروری");
    error = true;
  }
  if (isEmpty(restaurantPasswordAgain)) {
    addError(
      necessaryRestaurantPasswordAgain,
      restaurantPasswordAgain,
      "ضروری"
    );
    error = true;
  }

  if (error) {
    throw new Error("Some inputs are empty.");
  }
}

function validateEmail() {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(restaurantEmail.val())) {
    addError(
      necessaryRestaurantEmail,
      restaurantEmail,
      "لطفا ایمیل صحیحی وارد نمایید."
    );
    throw new Error("Please enter a valid email address.");
  }
}

function validatePhoneNumber() {
  if (restaurantPhone.val().length !== 8) {
    addError(
      necessaryRestaurantPhone,
      restaurantPhone,
      "شماره تلفن باید ۸ رقم باشد."
    );
    throw new Error("Please enter a valid phone number.");
  }

  if (isNaN(+restaurantPhone.val())) {
    addError(
      necessaryRestaurantPhone,
      restaurantPhone,
      "شماره تلفن باید رقم باشد."
    );
    throw new Error("Please enter a valid phone number.");
  }
}

function validatePassword() {
  if (
    restaurantPassword.val().length > 12 ||
    restaurantPassword.val().length < 6
  ) {
    addError(
      necessaryRestaurantPassword,
      restaurantPassword,
      "رمز عبور باید حداقل ۶ و حداکثر ۱۲ کاراکتر باشد."
    );
    throw new Error(
      "Password should have at least 6 and at most 12 characters."
    );
  }

  if (restaurantPassword.val() !== restaurantPasswordAgain.val()) {
    addError(
      necessaryRestaurantPasswordAgain,
      restaurantPasswordAgain,
      "رمزهای عبور با هم تطابق ندارند."
    );
    throw new Error("Password and its repeat are not match.");
  }
}
