(function () {
  var DIGITS = /^\d+$/;
  var hideClass = "tw-hidden";
  var sizeSelector = ".js-pdp-variant-radio";
  var quantityButtonsSelector = ".js-pdp-quantity-button";
  var quantityInputSelector = ".js-pdp-quantity-input";
  var parentSelector = "label";
  var targetValues = ["18-24 months", "2T", "3T"];
  var messages = [
    "Add 2 of this product and the third one is free!",
    "Add another one free to your cart.",
    "Congrats! add to cart now!",
  ];
  var messageId = "demo-message";
  var priceSelector = ".product__price";
  var $quantityInput = document.querySelector(quantityInputSelector);
  var selectedSize = '';
  var selectedQuantity = 1;
  var $message = null;

  function insertMessageHolder() {
    var priceNode = document.querySelector(priceSelector);

    if (!priceNode) {
      return;
    }

    var priceParent = priceNode.parentNode.parentNode;
    var messageTxt =
      '<p id="' + messageId + '" class="tw-inline-block tw-px-2 tw-py-1 tw-text-xs tw-hidden" style="background-color: #b2fce4"></p>';
    var temp = document.createElement("div");
    temp.innerHTML = messageTxt;
    var messageHtml = temp.firstChild;
    priceParent.after(messageHtml);
    $message = document.getElementById(messageId);
  }

  function isValidSize(size) {
    return targetValues.some(function (value) {
      return value === size;
    });
  }

  function isValidQuantity(quantity) {
    return quantity > 0 && quantity <= 3;
  }

  function updateMessage() {
    if (isValidSize(selectedSize) && isValidQuantity(selectedQuantity)) {
      // update message
      $message.textContent = messages[selectedQuantity - 1];
      // show message
      if ($message.classList.contains(hideClass)) {
        $message.classList.remove(hideClass);
      }
    } else {
      // hide message
      if (!$message.classList.contains(hideClass)) {
        $message.classList.add(hideClass);
      }
    }
  }

  function handleSizeChange() {
    var labelParent = this.closest(parentSelector);
    if (!labelParent) {
      return;
    }

    selectedSize = labelParent.textContent.trim();
    updateMessage();
  }

  function handleQuantityChange() {
    selectedQuantity = $quantityInput && DIGITS.test($quantityInput.value) ? parseInt($quantityInput.value, 10) : 0;
    updateMessage();
  }

  insertMessageHolder();

  document.addEventListener("click", function (event) {
    if (event.target.closest(sizeSelector)) {
      handleSizeChange.call(event.target, event);
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest(quantityButtonsSelector)) {
      handleQuantityChange.call(event.target, event);
    }
  });
})();
