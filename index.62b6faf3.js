let t=document.querySelector(".phone-input-val"),e=document.querySelector(".submit-button-val");e.setAttribute("disabled",!0),t.oninput=function(){!function(t){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/.test(t)}(document.querySelector(".phone-input-val").value)?e.setAttribute("disabled",!0):e.removeAttribute("disabled")};
//# sourceMappingURL=index.62b6faf3.js.map
