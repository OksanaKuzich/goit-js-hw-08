!function(){var e,t={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};console.log(t.textarea),t.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),t.textarea.addEventListener("input",(function(e){var t=e.currentTarget.value;console.log(t),localStorage.setItem("feedback-form-state",t)})),(e=localStorage.getItem("feedback-form-state"))&&(t.textarea.value=e)}();
//# sourceMappingURL=03-feedback.5e251dd1.js.map
