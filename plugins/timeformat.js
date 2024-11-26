function formatTime(value, formatType = "datetime") {
        const options = {
        date: { year: "numeric", month: "2-digit", day: "2-digit" },
        time: { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false },
        datetime: { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false },
        };
    
        return new Date(value)
        .toLocaleString("zh-Hant", options[formatType] || options.datetime)
        .replaceAll("/", "-");
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("timeformat", (el, binding) => {
        el.innerText = formatTime(binding.value, binding.arg);
    });
});
