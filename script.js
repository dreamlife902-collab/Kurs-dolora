function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(res => res.json())
        .then(data => {
            let rate = data.rates[to];
            document.getElementById("result").innerHTML = `${amount} ${from} = ${(amount * rate).toFixed(2)} ${to}`;

        })
        .catch(() => alert('Eror'));
}











// const amountInput = document.getElementById("amount");
// const fromSelect = document.getElementById("from");
// const toSelect = document.getElementById("to");
// const result = document.getElementById("result");
// const currencyName = document.getElementById("currency-name");
// const dragon = document.getElementById("dragon");
// const message = document.getElementById("message");
// const resultBox = document.querySelector(".result-box");

// async function convertCurrency() {
//     const amount = Number(amountInput.value);
//     const from = fromSelect.value;
//     const to = toSelect.value;

//     if (amountInput.value.trim() === "" || !Number.isFinite(amount) || amount < 0) {
//         message.textContent = "⚠️ Iltimos, to‘g‘ri summa kiriting!";
//         amountInput.focus();
//         return;
//     }

//     message.textContent = "🐉 Ajdarho pulni izlab uchib ketdi...";
//     result.textContent = "Hisoblanmoqda...";
//     currencyName.textContent = to;

//     dragon.classList.remove("fly");
//     resultBox.classList.remove("stolen");

//     // Animatsiyani qayta boshlash
//     void dragon.offsetWidth;
//     dragon.classList.add("fly");

//     try {
//         const response = await fetch(
//             `https://api.exchangerate-api.com/v4/latest/${from}`
//         );

//         if (!response.ok) {
//             throw new Error("Kursni olib bo‘lmadi");
//         }

//         const data = await response.json();
//         const rate = data.rates[to];

//         if (typeof rate !== "number") {
//             throw new Error("Valyuta topilmadi");
//         }

//         const converted = amount * rate;

//         // Ajdarho natijani olib keladi
//         setTimeout(() => {
//             result.textContent = converted.toLocaleString("en-US", {
//                 minimumFractionDigits: 2,
//                 maximumFractionDigits: 2
//             });

//             currencyName.textContent = to;
//             message.textContent = "🔥 Ajdarho pulni olib keldi!";
//             resultBox.classList.remove("stolen");
//             void resultBox.offsetWidth;
//             resultBox.classList.add("stolen");
//         }, 1100);

//     } catch (error) {
//         result.textContent = "Xatolik!";
//         message.textContent =
//             "❌ Internetni tekshiring va qayta urinib ko‘ring.";
//     }
// }

// document.getElementById("convert")
//     .addEventListener("click", convertCurrency);

// document.getElementById("swap")
//     .addEventListener("click", () => {
//         const oldFrom = fromSelect.value;
//         fromSelect.value = toSelect.value;
//         toSelect.value = oldFrom;
//     });

// // Enter bosilganda ham hisoblaydi
// amountInput.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         convertCurrency();
//     }
// });
