function displaydata(){
    let p_tag_ref=document.getElementsByTagName("p")[0];
    console.log(p_tag_ref)
}
// DOM utility helpers
const dom = {
    get: (selector) => document.querySelector(selector),
    getAll: (selector) => [...document.querySelectorAll(selector)],
    create: (tag, text = '', cls = '') => {
        const el = document.createElement(tag);
        if (text) el.textContent = text;
        if (cls) el.className = cls;
        return el;
    },
    on: (el, event, fn) => el.addEventListener(event, fn),
};
