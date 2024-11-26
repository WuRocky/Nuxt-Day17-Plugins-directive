export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("textformat", (el, binding) => {
        const {value, arg} = binding
    
        const formatMethods = {
            uppercase: () => value.toUpperCase(),
            lowercase: () => value.toLowerCase(),
        }

        el.innerText = formatMethods[arg]() || value;
    })
});
