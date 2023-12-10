$(document).ready(function(){
    // Открыть модальное окно при клике на элемент с id="openModal"
    $("#openModal").on("click", function(){
        $("#myModal").show();
    });

    // Закрыть модальное окно при клике на "крестик"
    $(".close").on("click", function(){
        $("#myModal").hide();
    });

    // Отправить данные на сервер при клике на кнопку "Отправить"
    $("#submitBtn").on("click", function(){
        submitForm();
    });
});

function openModal() {
    // Открывает модальное окно
    $("#myModal").show();
}

function closeModal() {
    // Закрывает модальное окно
    $("#myModal").hide();
}

function submitForm() {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const holiday = document.getElementById("holiday").value;
    
        const botToken = "6727228772:AAE7jNoOaS-Y3TrxawRXB51BW_Ygn4NTAHc";
        const chatId = "673266734";
        const text = `New request:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nHoliday: ${holiday}`;
    
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Заявка успешно отправлена в Telegram.");
                    closeModal();
                } else {
                    alert("Произошла ошибка при отправке заявки в Telegram.");
                }
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
}

// Функция для обработки ответа
function processResponse(response) {
    if (response.ok) {
        console.log("Form submitted successfully");
        closeModal();
    } else {
        console.error("Error submitting form:", response.description);
    }
}

