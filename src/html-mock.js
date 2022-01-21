module.exports = class Html {
  constructor() {
    this.innerHTML = {};
  }

  getInnerHtml(key) {
    return this.innerHTML[key] || null;
  }

  removeInnerHtml(key) {
    delete this.innerHTML[key];
  }

  setInnerHTML(key, value) {
    this.innerHTML[key] = value.toString();
  }
};
